<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Reader;
use Illuminate\Database\Eloquent\Collection;

class Book extends Model
{
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
        return self::select('id', 'title')->orderBy('title', 'asc')->get();
    }
}
