<?php

namespace App\Http\Controllers;

use App\Http\Requests\Loan\StoreLoanRequest;
use App\Http\Requests\Loan\UpdateLoanRequest;
use App\Models\Book;
use App\Models\Loan;
use App\Models\Reader;
use App\Services\LoanService;
use Inertia\Inertia;

class LoanController extends Controller
{
    public function __construct(
        private LoanService $loanService,
    ) {}

    public function index()
    {
        $this->loanService->checkAndUpdateExpiredDatesIfExists();

        $loans = $this->loanService->getLoanData();
        $readers = Reader::getReaderNameAndIdOrderedByName();
        $books = Book::getBookTitleAndIdOrderedByTitle();

        return Inertia::render('loans/index', [
            'loans' => $loans ?? [],
            'readers' => $readers ?? [],
            'books' => $books ?? [],
        ]);
    }

    public function store(StoreLoanRequest $request)
    {
        $data = $this->loanService->handleData($request->validated());
        Loan::create($data);

        return redirect()->back()->with('success', 'Empréstimo relizado com sucesso!');
    }

    public function update(UpdateLoanRequest $request, Loan $loan)
    {
        //
    }

    public function destroy(Loan $loan)
    {
        //
    }
}
