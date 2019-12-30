<template>
    <div class="container">
        <div class="row">
            <div class="col-8 border mt-2 mr-2 shadow-lg rounded">
                <div class="mt-2">
                    <table class="table">
                        <thead class="table-borderless">
                            <tr>
                                <th class="text-center" scope="col" colspan="2">Product</th>
                                <th scope="col">price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img  class="img" :src="'img/asus.jpg'" alt="product-item">
                                </td>
                                <td class="align-middle">Mark</td>
                                <td class="align-middle">Rp.20000</td>
                                <td class="align-middle">
                                    <input id="quantity" type="number" value ="1" class="form-control quantity-input">
                                </td>
                                <td class="align-middle">Rp.20000</td>
                                <td class="align-middle">
                                    <button type="button" class="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="align-middle">
                                    <img  class="img" :src="'img/asus.jpg'" alt="product-item">
                                </td>
                                <td class="align-middle">Jacob</td>
                                <td class="align-middle">Rp.20000</td>
                                <td class="align-middle">
                                    <input id="quantity" type="number" value ="1" class="form-control quantity-input">
                                </td>
                                <td class="align-middle">Rp.20000</td>
                                <td>
                                    <button type="button" class="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md mt-2 border rounded total-cart">
                <h3 class="mt-4">Cart Total</h3>
                <div style="margin-top:5%;">
                    <div class="mt-2">
                        <select class="browser-default custom-select custom-select-md">
                            <option selected>Choose to delivery</option>
                            <option value="1">JNE</option>
                            <option value="2">Tiki</option>
                            <option value="3">Sicepat</option>
                        </select>
                        <select class="browser-default custom-select custom-select-md mt-2">
                            <option selected>Select a country</option>
                            <option value="1">Bekasi</option>
                            <option value="2">Jakarta</option>
                            <option value="3">Yogyakarta</option>
                        </select>
                    </div>
                    <div class="mt-4">
                        <span><strong style="margin-right:55%; font-size: 1.2em;">Subtotal</strong>Rp.20.000</span><br/>
                        <span><strong style="margin-right:54%; font-size: 1.2em;">Shipping</strong>Rp.20.000</span><br/>
                        <span><strong style="margin-right:54%; font-size: 1.2em;">Discount</strong>Rp.10.000</span><br/>
                        <span><strong style="margin-right:64%; font-size: 1.2em;">Total</strong>Rp.10.000</span>
                    </div>
                    <div class="d-flex justify-content-center mt-3 mb-2">
                        <button type="button" class=" btn-change btn btn-lg btn-block">CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style>
    #quantity {
            text-align: center;
        }
    .quantity-input {
            text-align: center;
            width: 80px; 
        }
    .total-cart {
        background-color:whitesmoke;
    }
    .total-cart h3 {
        text-align: center;
        border-block-end-style: dashed;
        border-width: 1px;
        border-color: #808080;
    }
    .img{
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 150px;
    }
    .img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
    }
    .btn-change{
    background: lightseagreen;
    margin: 20px;
    float: left;
    border:0px;
    color:#fff;
    box-shadow: 0 0 1px #ccc;
    -webkit-transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    -webkit-box-shadow: 0px 0px 0 0 #31708f inset , 0px 0px 0 #31708f inset;
    }
    .btn-change:hover{
        -webkit-box-shadow: 0px 50px 0 0px #31708f inset , 0px -50px 0 0px #31708f inset; 
    }
</style>