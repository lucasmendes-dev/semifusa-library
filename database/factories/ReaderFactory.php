<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reader>
 */
class ReaderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'phone' => $this->faker->phoneNumber(),
            'email' => $this->faker->email(),
            'marital_status' => $this->faker->randomElement(['single', 'married', 'divorced', 'widow']),
            'cpf' => $this->faker->numerify('###.###.###=##'),
            'rg' => $this->faker->numerify('##.###.###'),
            'nationality' => $this->faker->country(),
            'birth_date' => $this->faker->date('Y-m-d'),
            'gender' => $this->faker->randomElement(['M', 'F', 'O', 'N']),
            'profession' => $this->faker->jobTitle(),
            'address' => $this->faker->address(),
        ];
    }
}
