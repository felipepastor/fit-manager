<?php

use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Public routes for student questionnaire
Route::get('accesso/{access_token}', [StudentController::class, 'publicAccess'])->name('student.public-access');

Route::put('aluno/{student}/questionnaire', [StudentController::class, 'updateQuestionnaire'])->name('student.questionnaire.update');

Route::get('questionario/sucesso', function () {
    return Inertia::render('student/questionnaire-success');
})->name('student.questionnaire.success');

Route::get('questionario/erro', function () {
    return Inertia::render('student/questionnaire-error');
})->name('student.questionnaire.error');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Use resource routes for students
    Route::resource('aluno', StudentController::class)->names([
        'index' => 'student.index',
        'create' => 'student.create',
        'store' => 'student.store',
        'show' => 'student.show',
        'edit' => 'student.edit',
        'update' => 'student.update',
        'destroy' => 'student.destroy',
    ]);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
