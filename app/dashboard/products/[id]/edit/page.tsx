"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProduct } from "@/hooks/use-product";
import { CategoryName } from "../../constants/product.constant";

// Validation schema for product form
const productSchema = z.object({
  name: z.string().min(2, "Product name must be at least 2 characters"),
  price: z.number().min(0, "Invalid product price"),
  stock: z.number().int().min(0, "Stock quantity must be at least 0"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  categoryId: z.string()
});

type ProductFormValues = z.infer<typeof productSchema>;

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const { product, isLoading, error, updateProduct } = useProduct(id);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
  });

  // Set default values when product data is available
  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("price", product.price);
      setValue("stock", product.stock);
      setValue("description", product.description);
      const categoryKey = Object.keys(CategoryName).find(
        (key) => CategoryName[key as keyof typeof CategoryName] === product.categoryId
      ) as keyof typeof CategoryName; // Ép kiểu sang key hợp lệ
      
      if (categoryKey) {
        setValue("categoryId", categoryKey as CategoryName);
      }
    }
      
  }, [product, setValue]);

  // Handle product update
  const onSubmit = async (values: ProductFormValues) => {
    
    const updatedProduct = await updateProduct(values);
    if (updatedProduct) {
      router.push("/dashboard/products");
    }
    router.push("/dashboard/products");
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Edit Product</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Product Name */}
              <div>
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" {...register("name")} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              {/* Price */}
              <div>
                <Label htmlFor="price">Price</Label>
                <Input id="price" type="number" {...register("price", { valueAsNumber: true })} />
                {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
              </div>

              {/* Stock */}
              <div>
                <Label htmlFor="stock">Stock Quantity</Label>
                <Input id="stock" type="number" {...register("stock", { valueAsNumber: true })} />
                {errors.stock && <p className="text-red-500 text-sm">{errors.stock.message}</p>}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  {...register("description")}
                  className="border p-2 w-full rounded"
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
              </div>

              {/* Category */}
              <div>
                <Label htmlFor="categoryId">Category</Label>
                <select id="categoryId" {...register("categoryId")} className="border p-2 w-full rounded">
                {Object.entries(CategoryName).map(([key, value]) => (
    <option key={key} value={key}>
      {value}
    </option>
  ))}
                </select>
                {errors.categoryId && <p className="text-red-500 text-sm">{errors.categoryId.message}</p>}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Product"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
