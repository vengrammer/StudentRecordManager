<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();
        return response()->json([
            'success' => true,
            'students' => $students
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'student_number' => 'required|unique:students,student_number|max:12',
            'first_name'     => 'required|max:255|regex:/^[a-zA-Z\s\-]+$/',
            'middle_name'    => 'nullable|max:255|regex:/^[a-zA-Z\s\-]+$/',
            'last_name'      => 'required|max:255|regex:/^[a-zA-Z\s\-]+$/',
            'birthdate'      => 'required|date',
            'age'            => 'nullable|integer',
            'email'          => 'required|email|unique:students,email|max:255',
            'phone_number'   => 'nullable|string|max:11',
            'address'        => 'required|string|max:255',
            'course'         => 'required|string|max:255',
            'year_level'     => 'required|integer|max:4',
            'section'        => 'nullable|string|max:11'   
        ]);

        if($validator->fails()){
            return response()->json([
                'error_code' => 1000,
                'error_message' => $validator->errors()
            ], 422);
        }
        
        $student = Student::create($request->only([
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
        ]));

        return response()->json([
            'success' => true,
            'message' => 'Successfully add student',
            'student' => $student
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student){
        $validator = Validator::make($request->all(), [
            'student_number' => 'required|max:12|unique:students,student_number,' . $student->id,
            'first_name'     => 'required|max:255|string',
            'middle_name'    => 'nullable|max:255|string',
            'last_name'      => 'required|max:255|string',
            'birthdate'      => 'required|date',
            'age'            => 'nullable|integer',
            'email'          => 'required|email|max:255|unique:students,email,' . $student->id,
            'phone_number'   => 'nullable|string|max:11',
            'address'        => 'required|string|max:255',
            'course'         => 'required|string|max:255',
            'year_level'     => 'required|integer|max:4',
            'section'        => 'nullable|string|max:11'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error_code' => 1000,
                'error_message' => $validator->errors()
            ], 422);
        }

        $student->update($request->only([
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
        ]));

        return response()->json([
            'success' => true,
            'message' => 'Successfully updated student',
            'student' => $student
        ], 200);
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student){
        $student->delete();

        return response()->json([
            'success' => true,
            'message' => 'Student deleted successfully'
        ], 200);
    }
}
