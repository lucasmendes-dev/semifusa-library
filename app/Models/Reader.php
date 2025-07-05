<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Book;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
        'address',
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
}
