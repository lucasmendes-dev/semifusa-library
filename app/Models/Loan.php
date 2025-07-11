<?php

namespace App\Models;

use App\Models\Book;
use App\Models\Reader;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    protected $fillable = [
        'loan_code',
        'reader_id',
        'book_id',
        'loan_date',
        'return_date',
        'status',
    ];

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function reader()
    {
        return $this->belongsTo(Reader::class);
    }

    public static function getLateLoansNumber(): int
    {
        return self::where('status', 'late')->count();
    }

    public static function getTotalBooksLoaned(): int
    {
        return self::count();
    }

    public static function getLoanByMonth(): Collection
    {
        return self::selectRaw('DATE_FORMAT(loan_date, "%Y-%m") as month, COUNT(*) as total')
        ->where('loan_date', '>=', Carbon::now()->subMonths(12)->startOfMonth())
        ->groupBy(self::raw('DATE_FORMAT(loan_date, "%Y-%m")'))
        ->orderBy('month')
        ->get();
    }
}
