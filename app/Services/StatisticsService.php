<?php

namespace App\Services;

use App\Models\Address;
use App\Models\Loan;
use App\Models\Reader;
use Illuminate\Database\Eloquent\Collection;

class StatisticsService 
{
    public function getData(): array
    {
        $totalBooks = Loan::getTotalBooksLoaned();
        $readers = Reader::count();
        $neighborhood = $this->getLoanByNeighborhood();
        $age = $this->getLoanByAge();
        $gender = $this->getLoanByGender();
        $month = Loan::getLoanByMonth();

        $data = [
            'totalBooks' => $totalBooks,
            'readers' => $readers,
            'neighborhood' => $neighborhood,
            'age' => $age,
            'gender' => $gender,
            'month' => $month,
        ];
        return $data;
    }

    private function getLoanByNeighborhood(): array
    {
        $neighborhood = Address::getLoanByNeighborhood();
        $data = [];
        foreach ($neighborhood as $neigh) {
            $data[] = [
                'neighborhood_name' => $neigh->bairro,
                'neighborhood_total' => $neigh->total
            ];
        }
        return $data;
    }

    private function getLoanByAge()
    {
        $ages = Reader::getAgeRange();
        $defaultAgeRange = [
            '0 - 9',
            '10 - 19',
            '20 - 29',
            '30 - 39',
            '40 - 49',
            '50 - 59',
            '60 - 69',
            '70 - 79',
            '80 - 100'
        ];

        $agesMap = [];
        foreach ($ages as $item) {
            $agesMap[$item['range']] = $item['total'];
        }

        $finalAges = [];
        foreach ($defaultAgeRange as $range) {
            $finalAges[] = [
                'range' => $range,
                'total' => $agesMap[$range] ?? 0,
            ];
        }
        return $finalAges;
    }

    private function getLoanByGender(): Collection
    {
        $gender = Reader::getGender();
        $replaceValues = [
            'M' => 'Masculino',
            'F' => 'Feminino',
            'O' => 'Outros',
            'N' => 'NaoDeclarado',
        ];
        
        $counter = 0;
        foreach ($gender as $value) {
            $value->gender = $replaceValues[$value->gender];
            $value->fill = "var(--chart-" . ++$counter . ")";
        }
        return $gender;
    }
}
