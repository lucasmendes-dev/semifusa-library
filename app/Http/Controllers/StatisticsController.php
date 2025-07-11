<?php

namespace App\Http\Controllers;

use App\Services\StatisticsService;
use Inertia\Inertia;

class StatisticsController extends Controller
{
    public function __construct(private StatisticsService $statisticsService) {}

    public function index()
    {
        $data = $this->statisticsService->getData();

        $totalBooks = $data['totalBooks'];
        $readers = $data['readers'];
        $neighborhood = $data['neighborhood'];
        $age = $data['age'];
        $gender = $data['gender'];
        $month = $data['month'];

        return Inertia::render('statistics/index', [
            'totalBooks' => $totalBooks,
            'readers' => $readers,
            'neighborhood' => $neighborhood,
            'age' => $age,
            'gender' => $gender,
            'month' => $month,
        ]);
    }
}
