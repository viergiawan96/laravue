<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTmpCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tmp_carts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('id_product');
            $table->bigInteger('id_user');
            $table->bigInteger('quantity');
            $table->string('dest_add');
            $table->string('ship_method');
            $table->string('ship_price');
            $table->string('resi');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tmp_carts');
    }
}
