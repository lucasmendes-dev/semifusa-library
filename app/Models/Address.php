<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'cep',
        'logradouro',
        'numero',
        'complemento',
        'bairro',
        'localidade',
        'estado',
    ];

    public static function getLoanByNeighborhood(): Collection
    {
        return self::selectRaw('bairro, COUNT(*) as total')
        ->groupBy('bairro')
        ->orderByDesc('total')
        ->get();
    }
}
