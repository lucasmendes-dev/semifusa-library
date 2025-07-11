<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\LoanController;
use App\Http\Controllers\ReaderController;
use App\Http\Controllers\StatisticsController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    if (Auth::check()) {
        return redirect('/loans');
    }
    return redirect('/login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Loans
    Route::get('/loans', [LoanController::class, 'index'])->name('loans');
    Route::delete('/loans/{id}', [LoanController::class, 'destroy'])->name('loans.destroy');
    Route::put('/loans/{id}', [LoanController::class, 'update'])->name('loans.update');
    Route::post('/loans', [LoanController::class, 'store'])->name('loans.store');
    Route::put('/loans/returnBook/{id}', [LoanController::class, 'returnBook'])->name('loans.returnBook');

    // Books
    Route::get('/books', [BookController::class, 'index'])->name('books.index');
    Route::delete('/books/{id}', [BookController::class, 'destroy'])->name('books.destroy');
    Route::put('/books/{id}', [BookController::class, 'update'])->name('books.update');
    Route::post('/books', [BookController::class, 'store'])->name('books.store');
    
    // Readers
    Route::get('/readers', [ReaderController::class, 'index'])->name('readers.index');
    Route::delete('/readers/{id}', [ReaderController::class, 'destroy'])->name('readers.destroy');
    Route::put('/readers/{id}', [ReaderController::class, 'update'])->name('readers.update');
    Route::post('/readers', [ReaderController::class, 'store'])->name('readers.store');

    // Statistics
    Route::get('/statistics', [StatisticsController::class, 'index'])->name('statistics.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
