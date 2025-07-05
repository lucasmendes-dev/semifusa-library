<?php

namespace App\Http\Controllers;

use App\Http\Requests\Address\StoreAddressRequest;
use App\Http\Requests\Address\UpdateAddressRequest;
use App\Models\Address;

class AddressController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(StoreAddressRequest $request)
    {
        //
    }

    public static function storeFromReader(array $data): Address
    {
        return Address::create($data);
    }

    public function update(UpdateAddressRequest $request, Address $address)
    {
        //
    }

    public function destroy(Address $address)
    {
        //
    }
}
