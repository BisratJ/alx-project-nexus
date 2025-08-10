import { ProtectedRoute } from "@/components/auth/protected-route"
import { VendorDashboard } from "@/components/dashboard/vendor-dashboard"

export default function VendorDashboardPage() {
  return (
    <ProtectedRoute allowedRoles={["vendor"]}>
      <VendorDashboard />
    </ProtectedRoute>
  )
}
