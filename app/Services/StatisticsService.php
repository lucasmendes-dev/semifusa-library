<?php

namespace App\Services;

use App\Models\Address;
use App\Models\Loan;
use App\Models\Reader;
use Carbon\Carbon;

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
            $data[] = [$neigh->bairro => $neigh->total];
        }
        return $data;
    }

    private function getLoanByAge()
    {

    }

    private function getLoanByGender()
    {

    }
}
