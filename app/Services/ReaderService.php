<?php

namespace App\Services;

use App\Models\Reader;

class ReaderService 
{
    public function __construct() {}

    public function getReaderByID(string $readerID): Reader
    {
        return Reader::findOrFail($readerID);
    }

    public function handleData(array $data): array
    {
        $cpf = $data['cpf'];
        if ($cpf) {
            $data['cpf'] = $this->removeEverythingThatIsNotANumber($cpf);
        }
        return $data;
    }

    private function removeEverythingThatIsNotANumber(string $value): string
    {
        return preg_replace('/\D/', '', $value);
    }
}
