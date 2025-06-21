<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // php artisan make:factory BookFactory --model=Book
        return [
            'title' => ucfirst(implode(' ', $this->faker->words(3))),
            'subtitle' => $this->faker->optional()->sentence(3),
            'author' => $this->faker->name(),
            'additional_information' => $this->faker->optional()->paragraph(),
            'inventory_number' => $this->faker->unique()->numberBetween(1000, 9999),
            'edition' => $this->faker->optional()->randomElement(['1ª edição', '2ª edição', '3ª edição']),
            'type' => $this->faker->randomElement(['main_library', 'comics', 'geloteca']),
            'status' => $this->faker->randomElement(['available', 'unavailable', 'loaned']),
        ];
    }
}
