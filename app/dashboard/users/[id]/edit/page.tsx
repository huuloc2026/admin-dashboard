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
import { useUser } from "@/hooks/use-user";
import { Role_USER } from "@/lib/api/users";

const userSchema = z.object({
  name: z.string().min(2, "Tên ít nhất 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  role: z.nativeEnum(Role_USER,{message:"Role not valid"})
});

type UserFormValues = z.infer<typeof userSchema>;

export default function EditUserPage() {
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const { user, isLoading, error, updateUser } = useUser(id);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
  });

  // Set giá trị form khi có dữ liệu user
  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("role",user.role)
    }
  }, [user, setValue]);

  // Xử lý cập nhật user
  const onSubmit = async (values: UserFormValues) => {
    const updatedUser = await updateUser(values);
    if (updatedUser) {
      router.push("/dashboard/users");
    }
    router.push("/dashboard/users");
    
  };

  return (
    <div className="flex justify-center ">
      <Card className="w-[400px] ">
        <CardHeader>
          <CardTitle>Edit User</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name">Tên</Label>
                <Input id="name" {...register("name")} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input disabled id="email" type="email" {...register("email")} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="role">role</Label>
                <Input disabled id="role" type="role" {...register("role")} />
                {errors.root && <p className="text-red-500 text-sm">{errors.root.message}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Đang cập nhật..." : "Cập nhật"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
