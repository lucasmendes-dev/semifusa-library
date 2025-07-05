<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'cep' => $this->faker->postcode(),
            'logradouro' => $this->faker->streetName(),
            'numero' => $this->faker->numberBetween(10, 10000),
            'complemento' => $this->faker->word(),
            'bairro' => $this->faker->word(2),
            'localidade' => $this->faker->city(),
            'estado' => $this->faker->state(),
        ];
    }
}
