import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: "1",
    user: {
      name: "John Doe",
      avatar: "/placeholder.svg",
      email: "john@example.com",
    },
    action: "created a new project",
    time: "2 hours ago",
  },
  {
    id: "2",
    user: {
      name: "Jane Smith",
      avatar: "/placeholder.svg",
      email: "jane@example.com",
    },
    action: "updated user settings",
    time: "5 hours ago",
  },
  {
    id: "3",
    user: {
      name: "Robert Johnson",
      avatar: "/placeholder.svg",
      email: "robert@example.com",
    },
    action: "deleted a file",
    time: "1 day ago",
  },
  {
    id: "4",
    user: {
      name: "Emily Davis",
      avatar: "/placeholder.svg",
      email: "emily@example.com",
    },
    action: "invited a new team member",
    time: "2 days ago",
  },
  {
    id: "5",
    user: {
      name: "Michael Wilson",
      avatar: "/placeholder.svg",
      email: "michael@example.com",
    },
    action: "updated the dashboard",
    time: "3 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.user.name}
              <span className="text-muted-foreground"> {activity.action}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

