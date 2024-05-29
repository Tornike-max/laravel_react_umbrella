<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('categories')->paginate(10);
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'image' => 'nullable|image',
            'categories' => 'required|array',
            'categories.*' => 'exists:product_categories,id',
        ]);

        $product = Product::create($validated);
        $product->categories()->attach($validated['categories']);

        return response()->json($product, 201);
    }

    public function show(Product $product)
    {
        return response()->json($product->load('categories'));
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'price' => 'sometimes|required|numeric',
            'image' => 'nullable|image',
            'categories' => 'sometimes|required|array',
            'categories.*' => 'exists:product_categories,id',
        ]);

        $product->update($validated);
        if (isset($validated['categories'])) {
            $product->categories()->sync($validated['categories']);
        }

        return response()->json($product);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->noContent();
    }
}
