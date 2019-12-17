<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\product;
use App\color_size;

class productController extends Controller
{
    public function index()
    {
        $product = product::all();
        return response()->json(compact('product'), 200);
    }

    public function store(Request $request)
    {
        $id = $request->get('id');
        $color = $request->get('color');
        $size = $request->get('size');  
        $stok = color_size::where('id_product', $id)
                            ->where('color', $color)
                            ->where('size', $size)
                            ->select('amount')
                            ->get();

       return response()->json(compact('stok'));

    }

}


/*DB::table('products')->join('color_sizes', 'products.id', 'color_sizes.id_product')
                    ->select('products.id','products.name_product','products.type_product','products.price',
                    'products.desc','products.images','color_sizes.color',
                    'color_sizes.amount','color_sizes.size')
                    ->get();
*/