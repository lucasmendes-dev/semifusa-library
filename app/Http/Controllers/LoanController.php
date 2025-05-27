<?php

namespace App\Http\Controllers;

use App\Http\Requests\Loan\StoreLoanRequest;
use App\Http\Requests\Loan\UpdateLoanRequest;
use App\Models\Loan;

class LoanController extends Controller
{
    public function index()
    {
        //
    }

    public function store(StoreLoanRequest $request)
    {
        //
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
