<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{

    function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8|max:12'
        ]);

        if($validator->fails()){
            return response()->json([
                'error_code' => 1000,
                'error_message' => $validator->errors()
            ], 422);
        }

        $user = User::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password) ){
            return response()->json([
                'error_code' => 1001,
                'error_message' => 'Wrong username or password!'
            ], 401);
        }


        try{
            $token = JWTAuth::fromUser($user);           
        }catch(\Exception $e){
            return response()->json([
                'error_code' => 1002,
                'error_message' => 'Token creation failed. Please try again.'     
            ], 500);
        }

        return response()->json([
            'success' => true,
            'message' => 'Login successful!',
            'token' => $token,
            'user' => $user
        ], 200);
    }

    function dashboard(){
        try{
            $user = JWTAuth::parseToken()->authenticate();
        }catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['error' => 'Token is expired'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['error' => 'Token is invalid'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['error' => 'Token not provided'], 401);
        }
       
        return response()->json([
            'success' => true,
            'user' => $user,
            'message' => 'Welcome to your dashboard'
        ], 200);
    }
    

    function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|max:12|min:8'
        ]);

         if($validator->fails()){
            return response()->json([
                'error_code' => 1000,
                'error_message' => $validator->errors()
            ], 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' =>$request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'success' => true,
            'message' => 'Succesfully created new admin',
            'user' => $user,
            'token' => $token
        ],200);
    }

    function logout(){
        try{
            $token = JWTAuth::getToken();

            if(!$token){
                return response()->json(['error' => 'Token not provided'], 401);
            }
             JWTAuth::invalidate($token);
            return response()->json([
                'success' => true,
                'message' => 'Logged out successfully'
            ]);
        }catch(\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['error' => 'Failed to log out'], 500);
        }

    }
}
