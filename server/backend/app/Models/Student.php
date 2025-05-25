<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends Model
{
    protected $fillable = [
        'student_number',
        'first_name',
        'middle_name',
        'last_name',
        'birthdate',
        'age',
        'email',
        'phone_number',
        'address',
        'course',
        'year_level',
        'section'
    ];
    use HasFactory;
}
