<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the students.
     */
    public function index()
    {
        $students = Student::orderBy('name')->get();

        return Inertia::render('student', [
            'students' => $students
        ]);
    }

    /**
     * Show the form for creating a new student.
     */
    public function create()
    {
        return Inertia::render('student/create');
    }

    /**
     * Store a newly created student in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:students,email',
            'job' => 'nullable|string|max:255',
            'height' => 'nullable|integer',
            'weight' => 'nullable|integer',
            'body_fat' => 'nullable|integer',
            'objective' => 'nullable|string',
            'life_style' => 'nullable|string',
            'dedication' => 'nullable|string',
            // Add other validation rules as needed
        ]);

        Student::create($validated);

        return redirect()->route('student.index')
            ->with('success', 'Student created successfully.');
    }

    /**
     * Display the specified student.
     */
    public function show(Student $student)
    {
        return Inertia::render('student/show', [
            'student' => $student
        ]);
    }

    /**
     * Show the form for editing the specified student.
     */
    public function edit(Student $student)
    {
        return Inertia::render('student/edit', [
            'student' => $student
        ]);
    }

    /**
     * Update the specified student in storage.
     */
    public function update(Request $request, Student $student)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:students,email,' . $student->id,
            'job' => 'nullable|string|max:255',
            'height' => 'nullable|integer',
            'weight' => 'nullable|integer',
            'body_fat' => 'nullable|integer',
            'objective' => 'nullable|string',
            'life_style' => 'nullable|string',
            'dedication' => 'nullable|string',
            // Add other validation rules as needed
        ]);

        $student->update($validated);

        return redirect()->route('student.index')
            ->with('success', 'Student updated successfully.');
    }

    /**
     * Remove the specified student from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();

        return redirect()->route('student.index')
            ->with('success', 'Student deleted successfully.');
    }
}
