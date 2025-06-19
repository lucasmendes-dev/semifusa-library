<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\ReaderController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if (Auth::check()) {
        return redirect('/dashboard');
    }
    return redirect('/login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

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
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
