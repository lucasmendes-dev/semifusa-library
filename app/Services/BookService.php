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

    public function doesInventoryNumberAlreadyExists(string|null $inventoryNumber, string|null $bookID): bool
    {
        if (is_null($inventoryNumber)) {
            return false;
        }
        if (Book::where('inventory_number', $inventoryNumber)->exists()) {
            if ($bookID) {
                $currentBookInventoryNumber = Book::where('id', $bookID)->value('inventory_number');
                if ((string)$currentBookInventoryNumber !== $inventoryNumber) {
                    return true;
                }
            }
        }
        return false;
    }
}
