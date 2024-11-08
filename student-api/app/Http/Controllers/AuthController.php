<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'email|required',
            'password'=> 'required|min:6'
           ]);
    
           if ($validator->fails()){
            return response()->json([
                'massage' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }
        
        $request->password = Hash::make($request->password);
        $user = User::create($request->all());
        $data = [
            'massage' => 'user is created successfully'
        ];

        return response()->json($data, 200);
    }
    public function login(Request $request) {
        $input = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (Auth::attempt($input)){
            $token = Auth::user()->createToken('auth_token');
            $data = [
                'message' => 'Login successfully',
                'token' => $token->plainTextToken
            ];

            return response()->json($data, 401);
        }
    }
    
}

