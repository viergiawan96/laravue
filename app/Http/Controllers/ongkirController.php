<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\province;
use App\courier;

class ongkirController extends Controller
{
    public function courierProvince()
    {
        $courier = courier::all();
        $province = province::all();
        return response()->json(compact('province','courier'), 200); 
    }
}
