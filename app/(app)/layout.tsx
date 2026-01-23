import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Nav />
        <main className="pt-20 px-6">{children}</main>
      </div>
    </div>
  );
}
