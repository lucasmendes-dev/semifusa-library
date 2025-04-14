<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Reader;

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
}
