import React, { useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { Role } from "../../models/models";

interface Props {
  permissions: Role[];
  redirectPath?: string;
  children: JSX.Element;
}

const PrivateRoute = ({ permissions, redirectPath, children }: Props) => {
  const { user } = useAuth();
  const location = useLocation();

  const isAllowed = useMemo(() => {
    return permissions.some((role) => {
      return user && user.roles ? user.roles.includes(role) : false;
    });
  }, [user, permissions]);

  if (!user?.token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  if (!isAllowed) {
    return (
      <Navigate to={redirectPath || "/"} replace state={{ from: location }} />
    );
  }

  return children;
};

export default PrivateRoute;
