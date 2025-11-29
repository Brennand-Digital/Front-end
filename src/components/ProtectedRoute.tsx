import { Navigate } from "react-router-dom";
import { isAdmin } from "@/utils/auth";

interface Props {
  children: JSX.Element;
  onlyAdmin?: boolean;
}

const ProtectedRoute = ({ children, onlyAdmin }: Props) => {
  const isAuthenticated = localStorage.getItem("brennand_auth") === "true";
  if (!isAuthenticated) return <Navigate to="/auth" replace />;
  if (onlyAdmin && !isAdmin()) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;
