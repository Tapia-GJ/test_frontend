import { Routes, Route, Navigate } from "react-router"
import NotFoundPage from "@/pages/404";
import LoginPage from "@/pages/auth/Login";
import UsersPage from "@/pages/user/UsersPage";
import RootLayout from "@/layouts/RootLayout";
import ProfilePage from "@/pages/user/ProfilePage";
import NewUserPage from "@/pages/admin/NewUserPage";
import EditUserPage from "@/pages/admin/EditUserPage";
import AuditPage from "@/pages/admin/AuditPage";
import AdminLayout from "@/layouts/AdminLayout";
function AppRouter() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/">
          <Route element={<RootLayout />}>
            <Route index element={<Navigate to="/users" replace />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="users/new" element={<NewUserPage />} />
            <Route path="users/:id/edit" element={<EditUserPage />} />
            <Route path="admin/audit" element={<AuditPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>

      </Routes>

    </>
  )
}

export default AppRouter;
