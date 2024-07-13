<?php

use App\Http\Controllers\BuilderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::group(['prefix' => 'profile', 'middleware' => 'auth'], function () {
    Route::get('/builder', [BuilderController::class, 'builderIndex'])->name('builderIndex');


    Route::get('/personal-info', [BuilderController::class, 'personalInfo'])->name('personalInfo');
    Route::get('/educations', [BuilderController::class, 'educations'])->name('educations');
    Route::get('/experiences', [BuilderController::class, 'experiences'])->name('experiences');
});
