<?php

use Illuminate\Http\Request;

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::group([ 'prefix' => 'auth'], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('cart', 'cartController@store'); 
    Route::post('getCart','cartController@getCart');
    Route::post('putCart','cartController@putCart');
    Route::post('deleteCart','cartController@deleteCart');
    Route::get('getCourierProvince','ongkirController@courierProvince');
    Route::post('getCity', 'ongkirController@getCity');
    Route::post('getCost', 'ongkirController@getCost');

});

Route::post('register', 'registerController@register');

Route::get('product', 'productController@index');
Route::post('GetProduct', 'productController@store');
