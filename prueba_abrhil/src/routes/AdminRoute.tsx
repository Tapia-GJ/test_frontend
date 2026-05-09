import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/store/authStore";

export const AdminRoute = () => {
  const user = useAuthStore((state) => state.user);

  if (!user || user.role !== "ADMIN") {
    return <Navigate to="/users" replace />;
  }

  return <Outlet />;
};
