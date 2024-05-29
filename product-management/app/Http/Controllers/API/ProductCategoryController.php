<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductCategoryController extends Controller
{
    public function index()
    {
        $categories = ProductCategory::all();
        return response()->json($categories);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category = ProductCategory::create($validated);
        return response()->json($category, 201);
    }

    public function show(ProductCategory $category)
    {
        return response()->json($category);
    }

    public function update(Request $request, ProductCategory $category)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
        ]);

        $category->update($validated);
        return response()->json($category);
    }

    public function destroy(ProductCategory $category)
    {
        $category->delete();
        return response()->noContent();
    }
}
