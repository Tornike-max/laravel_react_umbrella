<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query();

        if ($request->has('categories')) {
            $categories = explode(',', $request->input('categories'));
            foreach ($categories as $category) {
                $query->orWhereJsonContains('categories', $category);
            }
        }

        $products = $query->paginate(10);

        return response()->json($products);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'price' => 'required|numeric',
            'categories' => 'required|array',
            'image' => 'required|image',
        ]);

        $path = $request->file('image')->store('images', 'public');

        $url = 'http://localhost:8000' . Storage::url($path);
        $product = new Product([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'categories' => json_encode($request->categories),
            'image' => $url,
        ]);

        $product->save();

        return response()->json(['message' => 'Product created successfully.'], Response::HTTP_CREATED);
    }


    public function show(string $id)
    {
        $product = Product::findOrFail($id);

        return response()->json($product);
    }


    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
        ]);

        $product->update($request->all());

        return redirect()->route('products.index')
            ->with('success', 'Product updated successfully');
    }


    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }
}
