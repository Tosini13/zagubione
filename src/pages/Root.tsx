import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BusinessFooter from "../components/BusinessFooter";

function Root() {
  return (
    <>
      <header className="sticky w-full">
        <Header />
      </header>
      <Outlet />
      <footer className="bg-primary text-white">
        <div className="horizontal-layout py-16">
          <Footer />
        </div>
        <div className="bg-[#25283F] py-6">
          <BusinessFooter />
        </div>
      </footer>
    </>
  );
}

export default Root;
