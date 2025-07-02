<?php

namespace App\Services;

use App\Models\Reader;
use DateTime;

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
}
