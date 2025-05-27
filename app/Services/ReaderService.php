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
            if ($this->isCPFValid($cpf)) {
                $data['cpf'] = $this->removeEverythingThatIsNotANumber($cpf);
            } else {
                return ['cpf_error' => true];
            }
        }
        return $data;
    }

    private function isCPFValid(string $cpf): bool
    {
        $cpf = $this->removeEverythingThatIsNotANumber($cpf);
        // Check if it has 11 digits
        if (strlen($cpf) !== 11) {
            return false;
        }

        // Rejects CPFs with all the same digits (e.g.: 111.111.111-11)
        if (preg_match('/^(\d)\1{10}$/', $cpf)) {
            return false;
        }

        // Validation of check digits
        for ($t = 9; $t < 11; $t++) {
            $sum = 0;
            for ($i = 0; $i < $t; $i++) {
                $sum += $cpf[$i] * (($t + 1) - $i);
            }

            $digit = (10 * $sum) % 11;
            $digit = $digit < 2 ? 0 : 11 - $digit;

            if ($cpf[$t] != $digit) {
                return false;
            }
        }
        return true;
    }

    private function removeEverythingThatIsNotANumber(string $value): string
    {
        return preg_replace('/\D/', '', $value);
    }
}
