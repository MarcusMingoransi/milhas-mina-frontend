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
  const { token, user } = useAuth();
  const location = useLocation();

  const isAllowed = useMemo(
    () =>
      permissions.some((role) => (user ? user.roles.includes(role) : false)),
    [user, permissions]
  );

  if (!token) {
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
