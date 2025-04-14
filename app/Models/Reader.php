<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Book;

class Reader extends Model
{
    protected $fillable = [
        'name',
        'phone',
        'email',
        'marital_status',
        'cpf_cnpj',
        'nationality',
        'age',
        'gender',
        'profession',
        'address',
    ];

    public function books()
    {
        return $this->belongsToMany(Book::class);
    }
}
