"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Edit } from "lucide-react";
import { useProduct } from "@/hooks/use-product";
import { CategoryName } from "../constants/product.constant";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { product, isLoading, error } = useProduct(params.id);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleEdit = () => {
    router.push(`/dashboard/products/${params.id}/edit`);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Skeleton className="h-8 w-48" />
          </div>
          <Skeleton className="h-10 w-20" />
        </div>
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-4 w-64" />
          </CardHeader>
          <CardContent className="space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-full" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4">
        <Button variant="outline" className="w-fit" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
        <Card>
          <CardContent className="pt-6">
            <div className="rounded-md bg-destructive/15 p-4 text-destructive">
              {error}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col gap-4">
        <Button variant="outline" className="w-fit" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
        <Card>
          <CardContent className="pt-6">
            <div className="rounded-md bg-muted p-4 text-muted-foreground">
              Product not found.
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Product Details</h1>
        </div>
        <Button onClick={handleEdit}>
          <Edit className="mr-2 h-4 w-4" />
          Edit Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-1">
            <div className="text-sm font-medium text-muted-foreground">
              Category
            </div>
            <div className="font-medium">
              {CategoryName[product.categoryId as keyof typeof CategoryName] ||
                "Unknown"}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-medium text-muted-foreground">
              Price
            </div>
            <div className="font-medium">${product.price}</div>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-medium text-muted-foreground">
              Stock
            </div>
            <div className="font-medium">{product.stock}</div>
          </div>

          <Separator />

          <div className="space-y-1">
            <div className="text-sm font-medium text-muted-foreground">
              Created At
            </div>
            <div>{new Date(product.createdAt).toLocaleString()}</div>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-medium text-muted-foreground">
              Updated At
            </div>
            <div>{new Date(product.updatedAt).toLocaleString()}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
