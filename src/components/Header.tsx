import { getIconSrc } from "../helpers";

export default function Header() {
  return (
    <nav className="justify-between items-start flex max-md:flex-wrap py-4 max-w-screen-xl mx-auto">
      <div className="items-center text-base flex gap-10 my-auto px-5 max-md:flex-wrap">
        <h1 className="font-bold leading-tight flex">
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

  return (
    <div className="items-center flex flex-col pl-5 pr-2">
      <div className="self-center flex w-full max-w-[1363px] grow flex-col max-md:max-w-full">
        <div className="justify-center items-center self-center flex w-full max-w-[1300px] pb-0 pl-0 flex-col pt-8 max-md:max-w-full">
          <div className="justify-between items-start self-center flex w-full gap-5 ml-8 px-5 max-md:max-w-full max-md:flex-wrap">
            <div className="items-start self-center flex w-[692px] max-w-full justify-between gap-5 my-auto max-md:flex-wrap">
              <div className="text-blue-500 text-base font-bold leading-tight self-center my-auto pl-5 pt-4 pb-0.5">
                <span className="">zagubione</span>
                <span className="text-blue-500">.com</span>
              </div>
              <div className="items-start self-stretch flex w-[489px] max-w-full grow shrink-0 basis-auto justify-between gap-5 max-md:flex-wrap max-md:justify-center">
                <div className=" text-base leading-[200%]">Strona główna</div>
                <div className=" text-base leading-[200%]">Wyszukiwanie</div>
                <div className=" text-base leading-[200%]">Jak działamy?</div>
                <div className=" text-base leading-[200%] self-stretch">
                  Opinie
                </div>
              </div>
            </div>
            <div className="items-start self-stretch flex w-[292px] max-w-full justify-between gap-5">
              <div className="items-start self-center flex gap-2 my-auto max-md:justify-center">
                <div className=" text-base leading-[200%] self-stretch">
                  Log In
                </div>
                <div className=" text-base leading-[200%] self-stretch">/</div>
                <div className=" text-base leading-[200%] self-stretch">
                  Sign Up
                </div>
              </div>
              <div className="items-start bg-blue-100 flex flex-col flex-1 px-5 py-3 rounded-lg">
                <div className="text-blue-500 text-base font-semibold tracking-wider self-center">
                  Zgłoś
                </div>
              </div>
            </div>
          </div>
          <div className="self-center z-[1] w-full max-w-[1192px] mt-14 px-5 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[22%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col mt-9">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/658f89fa-feb9-4dec-a7d3-797cebaa4d34?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
                    className="aspect-[0.93] object-cover object-center w-[68px] rotate-[-22.782deg] stroke-[1.765px] stroke-indigo-100 overflow-hidden max-w-full mr-9 max-md:mr-2.5"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d513009-7dcd-4ab0-8523-8c8270177155?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
                    className="aspect-[0.99] object-cover object-center w-full overflow-hidden grow mt-40 max-md:mt-10"
                  />
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-center flex flex-col mt-3.5 max-md:max-w-full max-md:-mr-0.5">
                  <div className="items-center self-stretch flex flex-col max-md:max-w-full">
                    <div className="text-blue-500 text-center text-6xl font-bold leading-[70px] self-center max-w-[736px] max-md:max-w-full max-md:text-4xl">
                      <span className="">Znajdź </span>
                      <span className="text-blue-500">zgubę</span>
                      <span className="">, lub pomóż innym ją znaleźć</span>
                    </div>
                    <div className="items-start border border-[color:var(--Stroke-gray,#EDEFFC)] shadow-[0px_2px_30px_6px_rgba(80,150,255,0.00)] bg-white self-stretch flex justify-between gap-4 mt-9 p-3.5 rounded-lg border-solid max-md:max-w-full max-md:flex-wrap">
                      <div className="items-center self-stretch flex flex-col grow shrink-0 basis-auto pr-5 max-md:max-w-full">
                        <div className="flex w-[660px] max-w-full items-start justify-between gap-5 max-md:flex-wrap max-md:justify-center">
                          <div className="items-center border-[color:var(--Seconadry-text,#797FB9)] self-stretch flex w-[163px] max-w-full flex-col pl-4 pr-5 py-2 rounded-[43px] border-0 border-solid">
                            <div className="flex w-[76px] max-w-full items-start gap-2.5">
                              <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93b72bb8-8bd8-4e49-9e66-bb36acaf496f?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/93b72bb8-8bd8-4e49-9e66-bb36acaf496f?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93b72bb8-8bd8-4e49-9e66-bb36acaf496f?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/93b72bb8-8bd8-4e49-9e66-bb36acaf496f?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/93b72bb8-8bd8-4e49-9e66-bb36acaf496f?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93b72bb8-8bd8-4e49-9e66-bb36acaf496f?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/93b72bb8-8bd8-4e49-9e66-bb36acaf496f?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/93b72bb8-8bd8-4e49-9e66-bb36acaf496f?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
                                className="aspect-[0.87] object-cover object-center w-[13px] overflow-hidden self-center max-w-full my-auto"
                              />
                              <div className="text-slate-400 text-base leading-[187.5%] self-stretch">
                                Miasto
                              </div>
                            </div>
                          </div>
                          <div className="items-start border-[color:var(--Seconadry-text,#797FB9)] self-stretch flex w-[163px] max-w-full gap-2.5 px-4 py-2 rounded-[43px] border-0 border-solid max-md:justify-center">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cce61dbb-ea48-4a24-a5ed-befa0b282030?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce61dbb-ea48-4a24-a5ed-befa0b282030?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce61dbb-ea48-4a24-a5ed-befa0b282030?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce61dbb-ea48-4a24-a5ed-befa0b282030?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce61dbb-ea48-4a24-a5ed-befa0b282030?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce61dbb-ea48-4a24-a5ed-befa0b282030?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce61dbb-ea48-4a24-a5ed-befa0b282030?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cce61dbb-ea48-4a24-a5ed-befa0b282030?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
                              className="aspect-square object-cover object-center w-2.5 overflow-hidden self-center max-w-full my-auto"
                            />
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a186cc4a-9cf9-4341-bcb6-175ded0d3794?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a186cc4a-9cf9-4341-bcb6-175ded0d3794?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a186cc4a-9cf9-4341-bcb6-175ded0d3794?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a186cc4a-9cf9-4341-bcb6-175ded0d3794?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a186cc4a-9cf9-4341-bcb6-175ded0d3794?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a186cc4a-9cf9-4341-bcb6-175ded0d3794?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a186cc4a-9cf9-4341-bcb6-175ded0d3794?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a186cc4a-9cf9-4341-bcb6-175ded0d3794?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
                              className="aspect-[1.07] object-cover object-center w-[30px] overflow-hidden self-stretch max-w-full"
                            />
                            <div className="text-slate-400 text-base leading-[187.5%] self-stretch">
                              Wszystko
                            </div>
                          </div>
                          <div className="items-start self-center flex gap-2.5 my-auto rounded-[43px]">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8527d1f8-2025-474d-ac83-9dc937289702?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8527d1f8-2025-474d-ac83-9dc937289702?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8527d1f8-2025-474d-ac83-9dc937289702?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8527d1f8-2025-474d-ac83-9dc937289702?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8527d1f8-2025-474d-ac83-9dc937289702?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8527d1f8-2025-474d-ac83-9dc937289702?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8527d1f8-2025-474d-ac83-9dc937289702?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8527d1f8-2025-474d-ac83-9dc937289702?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
                              className="aspect-square object-cover object-center w-[15px] fill-slate-400 overflow-hidden self-center max-w-full my-auto"
                            />
                            <div className="text-slate-400 text-base leading-[187.5%]">
                              np. portfel, klucze, pies, kot
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="items-start bg-slate-800 self-center flex w-[41px] max-w-full flex-col my-auto p-2 rounded-lg">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/71863a4a-4cbf-425b-a514-6c4620ee7a0d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/71863a4a-4cbf-425b-a514-6c4620ee7a0d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/71863a4a-4cbf-425b-a514-6c4620ee7a0d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/71863a4a-4cbf-425b-a514-6c4620ee7a0d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/71863a4a-4cbf-425b-a514-6c4620ee7a0d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/71863a4a-4cbf-425b-a514-6c4620ee7a0d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/71863a4a-4cbf-425b-a514-6c4620ee7a0d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/71863a4a-4cbf-425b-a514-6c4620ee7a0d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
                          className="aspect-square object-cover object-center w-full overflow-hidden self-stretch"
                        />
                      </div>
                    </div>
                    <div className="text-zinc-800 text-center text-base leading-[187.5%] self-center max-w-[527px] mt-9 max-md:max-w-full">
                      Jeśli zgubiłeś swoją własność lub znalazłeś czyjąś,
                      wypełnij super krótki formularz, aby ogłosić to na naszej
                      tablicy.
                    </div>
                  </div>
                  <div className="items-start bg-blue-500 self-center flex w-[210px] max-w-full grow flex-col mt-8 px-5 py-5 rounded-lg">
                    <div className="flex w-full items-start gap-1.5 max-md:ml-px">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/64b1e85c-ce31-4d25-8d9a-4497fec703bf?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/64b1e85c-ce31-4d25-8d9a-4497fec703bf?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64b1e85c-ce31-4d25-8d9a-4497fec703bf?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/64b1e85c-ce31-4d25-8d9a-4497fec703bf?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/64b1e85c-ce31-4d25-8d9a-4497fec703bf?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64b1e85c-ce31-4d25-8d9a-4497fec703bf?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/64b1e85c-ce31-4d25-8d9a-4497fec703bf?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/64b1e85c-ce31-4d25-8d9a-4497fec703bf?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
                        className="aspect-square object-cover object-center w-5 overflow-hidden max-w-full"
                      />
                      <div className="text-white text-base font-semibold tracking-wider">
                        Zgłoś już teraz
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[7%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7daa24e2-6a28-4233-81bd-43d7f9ce8551?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
                  className="aspect-[0.9] object-cover object-center w-[88px] rotate-[-32.916deg] stroke-[2.626px] stroke-indigo-100 overflow-hidden max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-center flex w-full max-w-[984px] items-start justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6d4cee9a-4953-4134-ad2e-8be645643712?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
            className="aspect-square object-cover object-center w-full stroke-[2.053px] stroke-indigo-100 overflow-hidden flex-1"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c4b8fa95-2630-45ea-818f-932dddcdde2c?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b8fa95-2630-45ea-818f-932dddcdde2c?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b8fa95-2630-45ea-818f-932dddcdde2c?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b8fa95-2630-45ea-818f-932dddcdde2c?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b8fa95-2630-45ea-818f-932dddcdde2c?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b8fa95-2630-45ea-818f-932dddcdde2c?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b8fa95-2630-45ea-818f-932dddcdde2c?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4b8fa95-2630-45ea-818f-932dddcdde2c?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
            className="aspect-square object-cover object-center w-full stroke-[2.52px] stroke-indigo-100 overflow-hidden flex-1 mt-3"
          />
        </div>
      </div>
    </div>
  );
}
