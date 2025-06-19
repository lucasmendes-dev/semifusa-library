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
}
