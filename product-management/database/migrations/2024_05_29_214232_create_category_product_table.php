<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('category_product', function (Blueprint $table) {
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('product_category_id');

            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->foreign('product_category_id')->references('id')->on('product_categories')->onDelete('cascade');

            $table->primary(['product_id', 'product_category_id']);
        });
    }

    public function down()
    {
        Schema::table('category_product', function (Blueprint $table) {
            $table->dropForeign(['product_id']);
            $table->dropForeign(['product_category_id']);
        });

        Schema::dropIfExists('category_product');
    }
};
