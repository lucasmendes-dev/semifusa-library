<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\ReaderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Books
    Route::get('/books', [BookController::class, 'index'])->name('books.index');

    // Comics
    Route::get('/comics', [BookController::class, 'comics'])->name('comics.index');

    // Geloteca
    Route::get('/geloteca', [BookController::class, 'geloteca'])->name('geloteca.index');
    
    // Readers
    Route::get('/readers', [ReaderController::class, 'index'])->name('readers.index');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
