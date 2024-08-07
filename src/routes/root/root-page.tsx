import Dashboard from "./components/dashboard";
import SideNav from "./components/side-nav";
import TopNav from "./components/top-nav";

function RootPage() {
  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="w-16 hidden md:block">
        <SideNav />
      </div>

      <div className="w-screen md:w-[calc(100vw-4rem)] bg-[#141316] h-screen">
        <TopNav />

        <Dashboard />
      </div>
    </div>
  );
}

export default RootPage;
