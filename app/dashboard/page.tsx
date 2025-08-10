import { ProtectedRoute } from "@/components/auth/protected-route"
import { UserDashboard } from "@/components/dashboard/user-dashboard"

export default function DashboardPage() {
  return (
    <ProtectedRoute allowedRoles={["user"]}>
      <UserDashboard />
    </ProtectedRoute>
  )
}
