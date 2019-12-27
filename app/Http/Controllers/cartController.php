<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\tmp_cart;
use App\product;

class cartController extends Controller
{
    public function store(Request $request) 
    {
        $id_product = $request->id_product;
        $user = $request->id_user;
        $product = product::find($id_product);
        $cek = tmp_cart::where('id_user', $user)
                        ->where('id_product', $id_product)
                        ->get()
                        ->count();   
        if($cek > 0)
        {
            $getCount = tmp_cart::where('id_user', $user)
                    ->where('id_product', $id_product)
                    ->first();

            $add_qty = tmp_cart::find($getCount->id);
            $add_qty->quantity = $getCount->quantity + 1;
            $add_qty->save();
            return response()->json('true', 200);   
        } elseif($cek === 0)
        {
            $cart = tmp_cart::create([
                'id_product' => $product->id,
                'id_user' => $request->id_user,
                'quantity' => 1
            ]);
            return response()->json('false', 200);
        }
    }
}
