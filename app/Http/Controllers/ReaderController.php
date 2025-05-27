<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReaderRequest;
use App\Http\Requests\UpdateReaderRequest;
use App\Models\Reader;
use Inertia\Inertia;

class ReaderController extends Controller
{
    public function index()
    {
        $readers = Reader::all();
        return Inertia::render('readers/index', ['readers' => $readers]);
    }

    public function store(StoreReaderRequest $request)
    {
        //
    }

    public function update(UpdateReaderRequest $request, Reader $reader)
    {
        //
    }

    public function destroy(Reader $reader)
    {
        //
    }
}
