import { Outdent } from "lucide-react";
import AdminSideBar from "./sidebar";
import AdminHeader from "./Header";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Admin sidebar */}
      <AdminSideBar />
      <div className="flex fle-1 flex-col">
        {/* Admin header */}
        <AdminHeader />
        <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
          <Outdent />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
