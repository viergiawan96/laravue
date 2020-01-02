<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
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

    public function getCart(Request $request)
    {
        $cart = DB::table('tmp_carts')->join('products', 'products.id', 'tmp_carts.id_product')
                                      ->where('id_user', $request->id)
                                      ->select('tmp_carts.id','tmp_carts.quantity','products.name_product','products.price')
                                      ->get();

        return response()->json(compact('cart'), 200);
    }

    public function putCart(Request $request)
    {
        $id = $request->id;
        $qty =$request->quantity;

        $cart = tmp_cart::find($id);
        $cart->quantity = $qty;
        $cart->save();

        return response()->json( 'quantity berhasil di update',  200);
    }

    public function deleteCart(Request $request)
    {
        $id = $request->id;

        $cart = tmp_cart::find($id);
        $cart->delete();

        return response()->json('berhasil di hapus', 200);
    }
}
