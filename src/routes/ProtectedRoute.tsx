import { Navigate } from "react-router-dom";
import { Role, useAuthStore } from "../store/authStore";

interface Props {
  children: React.ReactNode;
  allowedRoles: Role[];
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { user, isLoading } = useAuthStore();

  if (isLoading) return <div>Loading...</div>;
  if (!user || !allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" />;

  return <>{children}</>;
};

export default ProtectedRoute;
