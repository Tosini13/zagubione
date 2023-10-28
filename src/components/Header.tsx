import { getIconSrc } from "../utils";

export default function Header() {
  return (
    <nav className="justify-between items-start flex max-md:flex-wrap py-4 max-w-screen-xl mx-auto">
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
          <a className="link" href="/home">
            Strona główna
          </a>
          <a className="link" href="/search">
            Wyszukiwanie
          </a>
          <a className="link" href="/how-do-we-work">
            Jak działamy?
          </a>
          <a className="link" href="/reviews">
            Opinie
          </a>
        </div>
      </div>
      <div className="items-center self-stretch flex gap-5">
        <div className="items-start flex gap-2 max-md:justify-center">
          <a href="/log-in" className="link">
            Log In
          </a>
          <span className="text-base"> / </span>
          <a href="/sign-up" className="link">
            Sign Up
          </a>
        </div>
        <button className="button button-variant">Zgłoś</button>
      </div>
    </nav>
  );
}
