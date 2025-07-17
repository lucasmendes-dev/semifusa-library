<?php

namespace App\Http\Controllers;

use App\Http\Requests\Loan\StoreLoanRequest;
use App\Http\Requests\Loan\UpdateLoanRequest;
use App\Models\Book;
use App\Models\Loan;
use App\Models\Reader;
use App\Services\BookService;
use App\Services\LoanService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanController extends Controller
{
    public function __construct(
        private LoanService $loanService,
        private BookService $bookService,
    ) {}

    public function index()
    {
        $this->loanService->checkAndUpdateExpiredDatesIfExists();

        $activeLoans = $this->loanService->getActiveLoanData();
        $finishedLoans = $this->loanService->getFinishedLoanData();

        $readers = Reader::getReaderNameAndIdOrderedByName();
        $books = Book::getBookTitleAndIdOrderedByTitle();

        $availableBooks = Book::getAvailableBooksNumber();
        $loanedBooks = Book::getLoanedBooksNumber();
        $lateBooks = Loan::getLateLoansNumber();

        return Inertia::render('loans/index', [
            'activeLoans' => $activeLoans ?? [],
            'finishedLoans' => $finishedLoans ?? [],
            'readers' => $readers ?? [],
            'books' => $books ?? [],
            'availableBooks' => $availableBooks,
            'loanedBooks' => $loanedBooks,
            'lateBooks' => $lateBooks,
        ]);
    }

    public function store(StoreLoanRequest $request)
    {
        $data = $this->loanService->handleCreateData($request->validated());

        Loan::create($data);

        $this->bookService->updateBookStatus($data['book_id']);
        return redirect()->back()->with('success', 'Empréstimo relizado com sucesso!');
    }

    public function update(UpdateLoanRequest $request, string $id)
    {
        $loan = Loan::findOrFail($id);
        $data = $this->loanService->handleUpdateData($request->validated(), $id);

        if (isset($data['date_error'])) {
            return redirect()->back()->with('error', 'A data de retorno não pode ser menor que a data de empréstimo');
        }
        $loan->update($data);

        return redirect()->back()->with('success', 'Os dados do empréstimo de "' . $loan->loan_code . '" foram atualizados!');
    }

    public function destroy(string $id)
    {
        $loan = Loan::findOrFail($id);
        $loanCode = $loan->loan_code;
        $book = $this->bookService->getBookByID($loan->book_id);

        $loan->delete();

        $book->status = 'available';
        $book->save();

        return redirect()->back()->with('success', 'Empréstimo"' . $loanCode . '" deletado com sucesso!');
    }

    public function returnBook(Request $request, string $id)
    {
        $loan = Loan::findOrFail($id);
        $book = $this->bookService->getBookByID($loan->book_id);

        $loan->status = 'returned';
        $loan->return_date = $this->loanService->parseTimeZoneDate($request->return_date);
        $loan->save();

        $book->status = 'available';
        $book->save();

        return redirect()->back()->with('success', 'O livro "' . $book->title . '" foi devolvido.');
    }
}
