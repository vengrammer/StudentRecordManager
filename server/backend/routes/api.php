<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [UserController::class, 'login']);
Route::get('/dashboard', [UserController::class, 'dashboard']);
Route::post('/register', [UserController::class, 'register']);
Route::post('/logout', [UserController::class, 'logout']);

Route::resource('/student', StudentController::class);