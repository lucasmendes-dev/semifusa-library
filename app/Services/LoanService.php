<?php

namespace App\Services;

use App\Models\Book;
use App\Models\Loan;
use App\Models\Reader;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\RedirectResponse;
use DateTime;
use DateTimeZone;

class LoanService
{
    public function __construct() {}

    public function handleCreateData(array $data): array
    {
        $data['loan_code'] = generateHexId();
        $data['status'] = 'in_progress';
        return $data;
    }

    public function handleUpdateData(array $data, string $id): array | RedirectResponse
    {
        if (!$this->isReturnDateAfterLoanDate($data['loan_date'], $data['return_date'])) {
            $data['date_error'] = true;
            return $data;
        }
        if ($data['return_date'] > now()) {
            Loan::where('id', $id)->update(['status' => 'in_progress']);
        }
        return $data;
    }

    public function getActiveLoanData(): Collection
    {
        $loans = Loan::where('status', '!=', 'returned')->orderBy('loan_date', 'desc')->get();
        $this->populateLoanData($loans);
        return $loans;
    }

    public function getFinishedLoanData(): Collection
    {
        $loans = Loan::where('status', 'returned')->orderBy('loan_date', 'desc')->get();
        $this->populateLoanData($loans);
        return $loans;
    }

    private function populateLoanData(Collection $loans): void
    {
        if (!empty($loans)) {
            $loans->each(function ($loan) {
                $loan->name = Reader::getReaderNameByID($loan->reader_id);
                $loan->phone = Reader::getReaderPhoneByID($loan->reader_id);
                $loan->book = Book::getBookTitleByID($loan->book_id);
            });
        }
    }

    public function checkAndUpdateExpiredDatesIfExists(): void
    {
        Loan::where('return_date', '<', now())
        ->where('status', 'in_progress')
        ->update(['status' => 'late']);
    }

    private function isReturnDateAfterLoanDate(string $loanDate, string $returnDate): bool
    {
        return $loanDate <= $returnDate;
    }

    public function parseTimeZoneDate(string $date): string
    {
        $dateTime = new DateTime($date);
        $dateTime->setTimezone(new DateTimeZone('America/Sao_Paulo'));
        return $dateTime->format('Y-m-d');
    }
}
