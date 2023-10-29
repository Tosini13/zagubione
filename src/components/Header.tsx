import { Link } from "react-router-dom";
import { getIconSrc } from "../utils";

export default function Header() {
  return (
    <nav className="justify-between items-start flex max-md:flex-wrap py-4 max-w-screen-xl mx-auto h-header">
      <div className="items-center text-base flex gap-10 my-auto px-5 max-md:flex-wrap">
        <h1 className="font-bold leading-tight flex items-center">
          <img
            src={getIconSrc("logo.svg")}
            alt="brand logo"
            className="h-6 aspect-square"
          />
          <span>zagubione</span>
          <span className="text-primary-variant">.com</span>
        </h1>
        <div className="items-start self-stretch flex grow shrink-0 basis-auto gap-x-10 max-md:flex-wrap">
          <Link className="link" to="/">
            Strona główna
          </Link>
          <Link className="link" to="/search">
            Wyszukiwanie
          </Link>
          <Link className="link" to="/how-do-we-work">
            Jak działamy?
          </Link>
          <Link className="link" to="/reviews">
            Opinie
          </Link>
        </div>
      </div>
      <div className="items-center self-stretch flex gap-5">
        <div className="items-start flex gap-2 max-md:justify-center">
          <Link to="/login" className="link">
            Log In
          </Link>
          <span className="text-base"> / </span>
          <Link to="/sign-up" className="link">
            Sign Up
          </Link>
        </div>
        <button className="button button-variant">Zgłoś</button>
      </div>
    </nav>
  );
}
