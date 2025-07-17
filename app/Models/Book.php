<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Reader;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'author',
        'additional_information',
        'inventory_number',
        'edition',
        'type', 
        'status',
    ];

    public function readers()
    {
        return $this->belongsToMany(Reader::class);
    }

    public static function getBookTitleByID(string $bookID): string
    {
        return Book::where('id', $bookID)->value('title');
    }

    public static function getBookTitleAndIdOrderedByTitle(): Collection
    {
        return self::select('id', 'title', 'inventory_number')
        ->where('status', 'available')
        //->where('type', '!=', 'geloteca')
        ->orderBy('title', 'asc')->get();
    }

    
    public static function getAvailableBooksNumber(): int
    {
        return Book::where('status', 'available')->count();
    }

    public static function getLoanedBooksNumber(): int
    {
        return Book::where('status', 'loaned')->count();
    }
}
