<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // php artisan db:seed
        $this->call([
            BookSeeder::class,  // use Hasfactory on Model
            ReaderSeeder::class,
        ]);
    }
}
