<?php

use App\Http\Controllers\UserController; //Walang API na folder directory
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/user', UserController::class); //url for UserController || define routes for CRUD operations 

// Route to approve account
Route::put('/user/approve/{id}', [UserController::class, 'approveAccount']);
