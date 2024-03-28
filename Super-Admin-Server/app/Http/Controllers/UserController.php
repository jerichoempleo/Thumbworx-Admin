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
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
