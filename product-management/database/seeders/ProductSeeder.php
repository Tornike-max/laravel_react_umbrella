<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $categories = ProductCategory::factory()->count(10)->create();

        $categories->each(function ($category) {
            Product::factory()
                ->count(10000)
                ->create()
                ->each(function ($product) use ($category) {
                    $product->categories()->attach($category->id);
                });
        });
    }
}
