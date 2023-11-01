import { Link } from "react-router-dom";
import { getIconSrc } from "../utils";
import { ReactComponent as InstagramLogo } from "../../public/icons/insta-logo.svg";

type FooterPropsType = {};

const Footer: React.FC<FooterPropsType> = ({}) => {
  return (
    <div data-testid="footer" className="text-base grid grid-cols-4">
      <section className="flex flex-col gap-y-6">
        {/* <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3fbc8223-f73e-400b-b9fd-ab27d302e986?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbc8223-f73e-400b-b9fd-ab27d302e986?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbc8223-f73e-400b-b9fd-ab27d302e986?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbc8223-f73e-400b-b9fd-ab27d302e986?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbc8223-f73e-400b-b9fd-ab27d302e986?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbc8223-f73e-400b-b9fd-ab27d302e986?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbc8223-f73e-400b-b9fd-ab27d302e986?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3fbc8223-f73e-400b-b9fd-ab27d302e986?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
            className="aspect-[2.41] object-contain object-center w-[171px] rotate-[-22.782deg] stroke-[1.765px] stroke-slate-400 opacity-10 overflow-hidden z-[1] max-w-full self-start"
          /> */}
        <Link
          to={"/"}
          className="font-bold leading-tight flex items-center mb-4"
        >
          <img
            src={getIconSrc("logo.svg")}
            alt="brand logo"
            className="h-6 aspect-square"
          />
          <span>zagubione</span>
          <span className="text-primary-variant">.com</span>
        </Link>
        <h2 className="font-semibold">Kontakt</h2>
        <div className="whitespace-nowrap">+48 696 993 916</div>
        <a href="mailto:znalezionepl@gmail.com" className="link-on-primary">
          znalezionepl@gmail.com
        </a>
      </section>
      {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6d31443-5d1f-4c49-a9ac-f179ec711bf3?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
          className="aspect-square object-contain object-center w-[72px] stroke-[2.053px] stroke-slate-400 opacity-10 overflow-hidden max-w-full grow mt-1 self-end"
        /> */}
      <nav className="flex flex-col gap-y-4 mx-auto">
        <h2 className=" font-bold whitespace-nowrap">Na skróty</h2>
        <Link className="link-on-primary" to="/">
          Strona główna
        </Link>
        <Link className="link-on-primary" to="/found">
          Znalezione
        </Link>
        <Link className="link-on-primary" to="/lost">
          Zgubione
        </Link>
        <Link className="link-on-primary" to="/about-us">
          O nas
        </Link>
        <Link className="link-on-primary" to="/">
          Zgłoś
        </Link>
      </nav>
      <nav className="flex flex-col gap-y-4 mx-auto">
        <h2 className="font-bold whitespace-nowrap">Kategorie</h2>
        <Link to="found?category=document" className="link-on-primary">
          Dokumenty
        </Link>
        <Link to="found?category=personal&key" className="link-on-primary">
          Klucze
        </Link>
        <Link
          to="found?category=personal&search=wallet"
          className="link-on-primary"
        >
          Portfele
        </Link>
        <Link
          to="found?category=animal&search=pies"
          className="link-on-primary"
        >
          Psy
        </Link>
        <Link to="found?category=animal&search=kot" className="link-on-primary">
          Koty
        </Link>
      </nav>
      <section className="flex gap-x-10 ml-auto justify-between">
        <a href="#insta" className="hover:brightness-125 transition h-fit">
          <img
            loading="lazy"
            src={getIconSrc("insta-logo.svg")}
            className="aspect-square w-8"
          />
        </a>
        <a href="#fb" className="hover:brightness-125 transition h-fit">
          <img
            loading="lazy"
            src={getIconSrc("facebook-icon.svg")}
            className="aspect-square w-8"
          />
        </a>
        <a href="#whatsapp" className="hover:brightness-125 transition h-fit">
          <img
            loading="lazy"
            src={getIconSrc("whatsapp-icon.svg")}
            className="aspect-square w-8"
          />
        </a>
      </section>
    </div>
  );
};

export default Footer;
