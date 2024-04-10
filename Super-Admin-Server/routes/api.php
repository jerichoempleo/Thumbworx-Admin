<?php

use App\Http\Controllers\UserController; //Walang API na folder directory
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MailController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/user', UserController::class); //url for UserController || define routes for CRUD operations 

// Route to approve account
Route::put('/user/approve/{id}', [UserController::class, 'approveAccount']); //Dito ung reference na galing sa UserController.php

// Route to deny account
Route::put('/user/deny/{id}', [UserController::class, 'denyAccount']); //Dito ung reference na galing sa UserController.php

Route::post('/user/send-account-denied-email', [MailController::class, 'sendAccountDeniedEmail']); //icheck kung need ng id dito

Route::post('/user/send-account-approved-email', [MailController::class, 'sendAccountApprovedEmail']); //icheck kung need ng id dito

//Route in validating the token in Revise Documents.
Route::get('/user/validate-token/{token}', [UserController::class, 'validateToken']);



