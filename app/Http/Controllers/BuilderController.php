<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BuilderController extends Controller
{
    public function builderIndex(){
        return Inertia::render('Builder/BuilderIndex');
    }

    public function personalInfo(){
        return Inertia::render('Builder/PersonalInfo');

    }

    public function experiences(){
         return Inertia::render('Builder/Experiences');
    }

    public function educations(){
         return Inertia::render('Builder/Educations');
    }
}
