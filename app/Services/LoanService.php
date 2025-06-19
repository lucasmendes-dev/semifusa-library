<?php

namespace App\Services;

use App\Models\Book;
use App\Models\Loan;
use App\Models\Reader;
use Illuminate\Database\Eloquent\Collection;

class LoanService
{
    public function __construct() {}

    public function handleData(array $data): array
    {
        $data['loan_code'] = generateHexId();
        $data['status'] = 'in_progress';
        return $data;
    }

    public function getLoanData(): Collection
    {
        $loans = Loan::orderBy('loan_date', 'desc')->get();
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
}
