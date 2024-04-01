<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class UserController extends Controller
{
 
    protected $user;
    public function __construct(){
        $this->user = new User(); //Connecting to User model
        
    }

    public function index()
    {
        return $this->user->all();  //returns all records 
    }


    public function store(Request $request)
    {
        //
    }

  
    public function show(string $id)
    {
     return $user = $this->user->find($id);  
    }

  
    public function update(Request $request, string $id)
    {
        $user = User::findOrFail($id); // Find the user by ID
        $user->update($request->all()); // Update the user with request data
        return $user; // Return the updated user
    }

    public function destroy(string $id)
    {
        //
    }

    public function approveAccount(string $id)
    {
        $user = $this->user->find($id); // Assuming $this->user is your User model instance
        $user->update(['account_status' => 1]); // Update account_status to 1
        return $user;
    }
    

}
