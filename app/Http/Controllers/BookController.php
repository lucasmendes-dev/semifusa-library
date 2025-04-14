<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Book;

class BookController extends Controller
{
    public function index()
    {
        dd("books");
    }

    public function store(StoreBookRequest $request)
    {
        //
    }

    public function update(UpdateBookRequest $request, Book $book)
    {
        //
    }

    public function destroy(Book $book)
    {
        //
    }

    public function comics()
    {
        dd("comics");
    }

    public function geloteca()
    {
        dd("geloteca");
    }
}
