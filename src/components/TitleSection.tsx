import { getIconSrc } from "../utils";
import Button from "./Button";
import Form from "./Form";

type TitleSectionPropsType = {};

const TitleSection: React.FC<TitleSectionPropsType> = ({}) => {
  return (
    <div
      data-testid="title_section"
      className="max-w-screen-lg mx-auto space-y-10 relative pb-24"
    >
      <h1 className="text-center text-6xl font-bold leading-[70px] max-w-screen-md mx-auto max-md:text-4xl">
        <span>Znajdź </span>
        <span className="text-primary-variant">zgubę</span>
        <span>, lub pomóż innym ją znaleźć</span>
      </h1>
      <Form />
      <p className="text-center max-w-screen-sm mx-auto text-xl leading-loose">
        Jeśli zgubiłeś swoją własność lub znalazłeś czyjąś, wypełnij super
        krótki formularz, aby ogłosić to na naszej tablicy.
      </p>
      <Button iconSrc={getIconSrc("arrow-left.svg")} className="mx-auto">
        Zgłoś już teraz
      </Button>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
        className="aspect-[0.93] object-cover object-center w-[68px] rotate-[-22.782deg] stroke-[1.765px] stroke-indigo-100 overflow-hidden max-w-full mr-9 max-md:mr-2.5 absolute top-0 left-0 -translate-x-full"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
        className="aspect-[0.9] object-cover object-center w-[88px] rotate-[-32.916deg] stroke-[2.626px] stroke-indigo-100 overflow-hidden max-w-full absolute top-0 right-0 translate-x-full"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
        className="absolute bottom-0 left-0 -translate-x-full h-60"
      />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
        className="absolute bottom-0 left-1/4 h-20"
      />
    </div>
  );
};

export default TitleSection;
