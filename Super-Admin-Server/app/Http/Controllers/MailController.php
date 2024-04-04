<?php

namespace App\Http\Controllers;
use App\Mail\AccountDeniedMail;
use Illuminate\Http\Request;
use Mail;

class MailController extends Controller
{
     public function sendAccountDeniedEmail(Request $request)
    {
        $email = $request->input('email');

        $mailData = [
            'title' => 'Account Denied',
            'body' => 'A request to update the denied documents.',
        ];

        Mail::to($email)->send(new AccountDeniedMail($mailData));

        return response()->json(['message' => 'Account denied email sent successfully'], 200);
    }
}
