<?php

namespace App\Http\Controllers;

use App\Http\Requests\Reader\StoreReaderRequest;
use App\Http\Requests\Reader\UpdateReaderRequest;
use App\Models\Reader;
use App\Services\ReaderService;
use Inertia\Inertia;

class ReaderController extends Controller
{
    public function __construct(private ReaderService $readerService) {}

    public function index()
    {
        $readers = $this->readerService->getReadersData();
        return Inertia::render('readers/index', ['readers' => $readers]);
    }

    public function store(StoreReaderRequest $request)
    {
        $data = $this->readerService->handleCreateData($request->validated());
        Reader::create($data);

        return redirect()->back()->with('success', 'Leitor(a) "' . $request->name . '" cadastrado(a)!');
    }

    public function update(UpdateReaderRequest $request, string $id)
    {
        $reader = $this->readerService->getReaderByID($id);
        $data = $this->readerService->handleUpdateData($request->validated());

        $reader->update($data);

        return redirect()->back()->with('success', 'Os dados do(a) leitor(a) "' . $reader->name . '" foram atualizados!');
    }

    public function destroy(string $id)
    {
        $reader = $this->readerService->getReaderByID($id);
        $readerName = $reader->name;

        $reader->delete();

        return redirect()->back()->with('success', 'Leitor "' . $readerName . '" deletado(a) com sucesso!');
    }
}
