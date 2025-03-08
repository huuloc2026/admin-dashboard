"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, Edit } from "lucide-react"
import { useUser } from "@/hooks/use-user"

export default function UserDetailsPage({ params }: { params: { id: string } }) {
  const { user, isLoading, error } = useUser(params.id)
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  const handleEdit = () => {
    router.push(`/dashboard/users/${params.id}/edit`)
  }

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
    )
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4">
        <Button variant="outline" className="w-fit" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Users
        </Button>
        <Card>
          <CardContent className="pt-6">
            <div className="rounded-md bg-destructive/15 p-4 text-destructive">{error}</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex flex-col gap-4">
        <Button variant="outline" className="w-fit" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Users
        </Button>
        <Card>
          <CardContent className="pt-6">
            <div className="rounded-md bg-muted p-4 text-muted-foreground">User not found.</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">User Details</h1>
        </div>
        <Button onClick={handleEdit}>
          <Edit className="mr-2 h-4 w-4" />
          Edit User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-1">
            <div className="text-sm font-medium text-muted-foreground">Role</div>
            <div className="font-medium">{user.role}</div>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-medium text-muted-foreground">Status</div>
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${user.status === "ACTIVE" ? "bg-green-500" : "bg-gray-300"}`} />
              {user.status}
            </div>
          </div>

         

          <Separator />

          <div className="space-y-1">
            <div className="text-sm font-medium text-muted-foreground">Created At</div>
            <div>{new Date(user.createdAt).toLocaleString()}</div>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-medium text-muted-foreground">Updated At</div>
            <div>{new Date(user.updatedAt).toLocaleString()}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

