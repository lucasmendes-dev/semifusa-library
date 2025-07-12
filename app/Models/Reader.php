<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Book;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Collection as SupportCollection;

class Reader extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'marital_status',
        'cpf',
        'rg',
        'nationality',
        'birth_date',
        'gender',
        'profession',
        'address_id',
    ];

    public function books()
    {
        return $this->belongsToMany(Book::class);
    }

    public static function getReaderNameByID(string $readerID): string
    {
        return self::where('id', $readerID)->value('name');
    }

    public static function getReaderPhoneByID(string $readerID): string
    {
        return self::where('id', $readerID)->value('phone');
    }

    public static function getReaderNameAndIdOrderedByName(): Collection
    {
        return self::select('id', 'name')->orderBy('name', 'asc')->get();
    }

    public static function getGender(): Collection
    {
        return self::selectRaw('gender, COUNT(*) as total')
        ->groupBy('gender')
        ->orderByDesc('total')
        ->get();
    }

    public static function getAgeRange(): SupportCollection
    {
        return self::selectRaw('
            FLOOR(TIMESTAMPDIFF(YEAR, birth_date, CURDATE()) / 10) * 10 AS age_group_start,
            COUNT(*) as total
        ')
        ->groupBy('age_group_start')
        ->orderBy('age_group_start')
        ->get()
        ->map(function ($item) {
            return [
                'range' => $item->age_group_start . ' - ' . ($item->age_group_start + 9),
                'total' => $item->total,
            ];
        });
    }
}
