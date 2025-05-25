<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $firstName = $this->faker->firstName;
        $middleName = $this->faker->optional()->firstName;
        $lastName = $this->faker->lastName;

        $birthdate = $this->faker->dateTimeBetween('-30 years', '-17 years');
        $age = now()->diffInYears($birthdate);

        return [
            'student_number' => '2025-' . str_pad($this->faker->unique()->numberBetween(1, 9999), 4, '0', STR_PAD_LEFT),
            'first_name' => $firstName,
            'middle_name' => $middleName,
            'last_name' => $lastName,
            'birthdate' => $birthdate->format('Y-m-d'),
            'age' => $age,
            'gender' => $this->faker->randomElement(['Male', 'Female', 'Other']),
            'email' => $this->faker->unique()->safeEmail,
            'phone_number' => $this->faker->optional()->phoneNumber,
            'address' => $this->faker->address,
            'course' => $this->faker->randomElement(['BSCS', 'BSA', 'BSIT', 'BSEd']),
            'year_level' => $this->faker->randomElement(['1st Year', '2nd Year', '3rd Year', '4th Year']),
            'section' => $this->faker->optional()->randomElement(['A', 'B', 'C']),
        ];
    }
}
