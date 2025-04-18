"use client";

import {useCurrentUser} from "../auth/hooks/use-current-user";
import AdminView from "./admin.view";

export default function AdminPage() {
  const {data: user} = useCurrentUser();

  if (!user?.isAdmin) {
    return <div className="text-red-500"> Forbidden</div>;
  }

  return <AdminView />;
}
