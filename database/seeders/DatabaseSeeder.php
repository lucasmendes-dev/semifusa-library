<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => Hash::make('TestPassword1@'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // php artisan db:seed
        $this->call([
            BookSeeder::class,  // use Hasfactory on Model
            ReaderSeeder::class,
        ]);
    }
}
