<?php

namespace App\Services;

use App\Models\Book;

class BookService 
{
    public function __construct() {}

    public function getBookByID(string $bookID): Book
    {
        return Book::findOrFail($bookID);
    }

    public function updateBookStatus(string $id): void
    {
        Book::where('id', $id)->update(['status' => 'loaned']);
    }
}
