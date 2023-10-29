import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Root() {
  return (
    <>
      <div className="sticky w-full">
        <Header />
      </div>
      <Outlet />
    </>
  );
}

export default Root;
