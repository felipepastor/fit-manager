<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class StudentController extends Controller
{
    /**
     * Display a listing of the students.
     */
    public function index()
    {
        $students = Student::orderBy('name')->get();

        return Inertia::render('student/students', [
            'students' => $students
        ]);
    }

    /**
     * Store a newly created student in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:students,email',
        ]);

        // Generate UUID for access_token
        $validated['access_token'] = \Illuminate\Support\Str::uuid();

        $student = Student::create($validated);

        // Create connection with current authenticated user
        $student->teachers()->attach($request->user()->id);

        // Return to same page with flash data
        return Inertia::render('dashboard', [
            'student' => $student,
            'success' => 'Student created successfully.'
        ]);
    }

    /**
     * Display the specified student.
     */
    public function show(Request $request)
    {
        $studentId = $request->route('aluno');

        $student = Student::findOrFail($studentId);

        return Inertia::render('student/show', [
            'student' => $student
        ]);
    }

    /**
     * Public access to student questionnaire via access token.
     */
    public function publicAccess(Request $request, $access_token)
    {
        $student = Student::where('access_token', $access_token)->firstOrFail();

        return Inertia::render('student/public-questionnaire', [
            'student' => $student
        ]);
    }

    /**
     * Update student questionnaire via public access.
     */
    public function updateQuestionnaire(Request $request, Student $student)
    {
        $validated = $request->validate([
            'nickname' => 'required|string|max:255',
            'birthday' => 'required|date',
            'cellphone' => 'required|string|max:255',
            'job' => 'required|string|max:255',
            'height' => 'required|integer|min:100|max:250',
            'weight' => 'required|integer|min:30|max:300',
            'body_fat' => 'required|integer|min:1|max:50',
            'objective' => 'required|string|min:10',
            'goals' => 'required|string|min:10',
            'life_style' => 'required|in:sedentary,normal,active,very_active',
            'dedication' => 'required|boolean',
            'active' => 'required|boolean',
            'smoke' => 'required|in:yes,no,sometimes',
            'drink' => 'required|in:never,rarely,sometimes,often',
            'drink_frequency' => 'required|integer|min:1|max:5',
            'consultancy_before' => 'required|boolean',
            'training_frequency' => 'required|integer|min:1|max:5',
            'training_content' => 'required|in:bodybuilding,cardio,functional,crossfit,pilates',
            'training_history' => 'required|string|min:10',
            'like_training' => 'required|in:yes,no,sometimes',
            'favorite_training' => 'required|string|max:255',
            'training_days_week' => 'required|array|min:1',
            'training_affinity' => 'required|integer|min:1|max:5',
            'training_description' => 'required|string|min:10',
            'training_extra_exercise' => 'required|string|max:255',
            'training_extra_effort' => 'required|integer|min:1|max:5',
            'training_extra_frequency_days' => 'required|array',
            'running_practice' => 'required|string|max:255',
            'running_frequency' => 'required|integer|min:1|max:5',
            'running_frequency_days' => 'required|array',
            'running_affinity' => 'required|integer|min:1|max:5',
            'running_description' => 'required|string|min:10',
            'do_diet' => 'required|in:yes,no,sometimes',
            'diet_description' => 'required|string|min:10',
            'orthopedic_issues' => 'required|string|min:5',
            'training_specificity' => 'required|string|min:10',
            'sleeping_hours' => 'required|integer|min:1|max:5',
            'tired_when_wake' => 'required|in:yes,no,sometimes',
            'observations' => 'required|string|min:10',
        ]);

        // Add answered_at timestamp
        $validated['answered_at'] = now();

        $student->update($validated);

        return redirect()->route('student.questionnaire.success');
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

        // return redirect()->route('student.index')
        //     ->with('success', 'Student updated successfully.');
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
