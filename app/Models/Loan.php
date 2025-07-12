<?php

namespace App\Models;

use App\Models\Book;
use App\Models\Reader;
use Carbon\Carbon;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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

    public static function getLoanByMonth()
    {
        $subquery = self::selectRaw('
            DATE_FORMAT(loan_date, "%Y-%m") as month_key,
            DATE_FORMAT(loan_date, "%m") as month_number,
            COUNT(*) as total
        ')
        ->where('loan_date', '>=', Carbon::now()->subMonths(12)->startOfMonth())
        ->groupByRaw('DATE_FORMAT(loan_date, "%Y-%m"), DATE_FORMAT(loan_date, "%m")');

        return DB::table(DB::raw("({$subquery->toSql()}) as sub"))
            ->mergeBindings($subquery->getQuery())
            ->selectRaw('
                CASE month_number
                    WHEN "01" THEN "Janeiro"
                    WHEN "02" THEN "Fevereiro"
                    WHEN "03" THEN "Março"
                    WHEN "04" THEN "Abril"
                    WHEN "05" THEN "Maio"
                    WHEN "06" THEN "Junho"
                    WHEN "07" THEN "Julho"
                    WHEN "08" THEN "Agosto"
                    WHEN "09" THEN "Setembro"
                    WHEN "10" THEN "Outubro"
                    WHEN "11" THEN "Novembro"
                    WHEN "12" THEN "Dezembro"
                END AS month_name,
                total,
                month_key
            ')
            ->orderBy('month_key')
            ->get();
    }
}
