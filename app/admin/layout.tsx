import { Separator } from "@/components/ui/separator";
import Sidebar from "./Sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <>
        <h2 className="text-2xl pl-4">Dashboard</h2>
        <Separator className="mt-2" />

        <section className="grid lg:grid-cols-12 gap-12 mt-12 ">
          <div className="lg:col-span-2">
            {/* because our sidebar is going to be a client component and we cannot access the userId which needs to await for auth(), we are going to do that here and pass it down as a prop*/}
            <Sidebar />
          </div>
          <div className="lg:col-span-10 px-4">{children}</div>
        </section>
      </>
    </>
  );
};
export default DashboardLayout;
