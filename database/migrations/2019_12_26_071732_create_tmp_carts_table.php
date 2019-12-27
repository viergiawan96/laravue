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
            $table->bigInteger('id_product');
            $table->bigInteger('id_user');
            $table->bigInteger('quantity')->nullable();
            $table->string('dest_add')->nullable();
            $table->string('ship_method')->nullable();
            $table->string('ship_price')->nullable();
            $table->string('resi')->nullable();
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
