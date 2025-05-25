<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Student;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        Student::factory()->count(10)->create();

        User::factory()->create([
            'name' => 'Reven Gerona',
            'email' => 'geronareven@gmail.com',
            'password' => Hash::make('07132004')
        ]);
    }
}
