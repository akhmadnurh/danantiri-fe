import { Outlet } from "@remix-run/react";
import FooterComponent from "~/components/layout/footer.component";
import HeaderComponent from "~/components/layout/header.component";

const MainLayout = () => {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-[calc(100vh-20rem)]">
        <Outlet />
      </div>
      <FooterComponent />
    </>
  );
};

export default MainLayout;
