<?php

namespace App\Http\Controllers;

use App\Http\Requests\Book\StoreBookRequest;
use App\Http\Requests\Book\UpdateBookRequest;
use App\Models\Book;
use App\Services\BookService;
use Inertia\Inertia;

class BookController extends Controller
{
    public function __construct(private BookService $bookService) {}

    public function index()
    {
        $mainLibrary = Book::where('type', 'main_library')->orderBy('title', 'asc')->get();
        $comics = Book::where('type', 'comics')->orderBy('title', 'asc')->get();
        $geloteca = Book::where('type', 'geloteca')->orderBy('title', 'asc')->get();

        return Inertia::render('books/index', [
            'mainLibrary' => $mainLibrary ?? [],
            'comics' => $comics ?? [],
            'geloteca' => $geloteca ?? [],
        ]);
    }

    public function store(StoreBookRequest $request)
    {
        Book::create($request->validated());

        return redirect()->back()->with('success', 'Livro "' . $request->title . '" cadastrado(a)!');
    }

    public function update(UpdateBookRequest $request, string $id)
    {
        $book = $this->bookService->getBookByID($id);
        $data = $request->validated();

        $book->update($data);

        return redirect()->back()->with('success', 'Os dados do livro "' . $book->title . '" foram atualizados!');
    }

    public function destroy(string $id)
    {
        $book = $this->bookService->getBookByID($id);
        $bookTitle = $book->title;

        $book->delete();

        return redirect()->back()->with('success', 'Livro "' . $bookTitle . '" deletado com sucesso!');
    }
}
