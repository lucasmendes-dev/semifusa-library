<?php

namespace App\Services;

use App\Http\Controllers\AddressController;
use App\Models\Address;
use App\Models\Reader;
use DateTime;
use Illuminate\Database\Eloquent\Collection;

class ReaderService 
{
    public function __construct() {}

    public function getReaderByID(string $readerID): Reader
    {
        return Reader::findOrFail($readerID);
    }

    public function getReadersData(): Collection
    {
        $readers = Reader::orderBy('name', 'asc')->get();
        $this->populateReaderAddress($readers);
        return $readers;
    }

    public function handleCreateData(array $data): array
    {
        $data = $this->formatData($data);
        if ($data['address']) {
            $address = AddressController::storeFromReader($data['address']);
            $data['address_id'] = $address->id;
            unset($data['address']);
        }
        return $data;
    }

    public function handleUpdateData(array $data): array
    {
        if ($data['birth_date']) {
            $data['birth_date'] = date('Y-m-d', strtotime(str_replace('/', '-', $data['birth_date'])));
        }
        if ($data['address']) {
            $address = Address::findOrFail($data['address']['id']);
            $address->update($data['address']);
        }
        return $data;
    }

    private function formatData($data): array
    {
        $cpf = $data['cpf'];
        if ($cpf) {
            $data['cpf'] = $this->removeEverythingThatIsNotANumber($cpf);
        }
        $birthDate = $data['birth_date'];
        if ($birthDate) {
            $data['birth_date'] = $this->replaceSlashesToDashFromDate($birthDate);
        }
        return $data;
    }

    private function removeEverythingThatIsNotANumber(string $value): string
    {
        return preg_replace('/\D/', '', $value);
    }

    private function replaceSlashesToDashFromDate(string $date): string
    {
        $dateValue = DateTime::createFromFormat('d/m/Y', $date);
        return $dateValue->format('Y-m-d');
    }

    private function populateReaderAddress(Collection &$readers):void
    {
        $readers->each(function ($reader) {
            $address = Address::findOrFail($reader->address_id);
            $reader->address = $address;
        });
    }
}
