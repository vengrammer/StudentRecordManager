<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();

             // Personal Information
            $table->string('student_number')->unique(); // e.g., "2023-0001"
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->date('birthdate');
            $table->integer('age');
            $table->enum('gender', ['Male', 'Female', 'Other']);

            // Contact Information
            $table->string('email')->unique();
            $table->string('phone_number')->nullable();
            $table->text('address');

            // Academic Information
            $table->string('course'); // e.g., BSCS, BSA
            $table->string('year_level'); // e.g., "1st Year", "2nd Year"
            $table->string('section')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
