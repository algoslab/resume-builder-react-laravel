<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function dashboard(){
        return Inertia::render('Dashboard/DashboardIndex');
    }
    public function profileViews(){
        return  Inertia::render('Dashboard/ProfileViews');
    }
    public function appliedJobs(){
        return  Inertia::render('Dashboard/AppliedJobs');
    }
}
