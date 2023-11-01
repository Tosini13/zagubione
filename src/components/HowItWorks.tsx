import { twMerge } from "tailwind-merge";
import Button from "./Button";
import { getIconSrc } from "../utils";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

const INSTRUCTIONS = [
  {
    number: "1.",
    content:
      "Zgłaszasz znaleznioną/zgubioną rzecz na www.znalezione.pl. To tylko 30 sekund.",
  },
  {
    number: "2.",
    content:
      "My publikujemy Twoje zgłoszenie na naszej stronie, Instagramie i Facebooku. Tym samym zwiększamy zakres poszukiwań.",
  },
  {
    number: "3.",
    content:
      "Adresat Twojego zgłoszenia kontaktuje się z Tobą przez nasz czat. Nie martw się, otrzymasz email przypominający.",
  },
  {
    number: "4.",
    content:
      "Otrzymasz od nas wsparcie w formie listy pytań weryfikujących przynależność przedmiotu do osoby użytkownika kontaktującego się z Tobą.",
  },
  {
    number: "5.",
    content:
      "Następnie ustalisz w jaki sposób zwrócić znaleziony przedmiot. Dostępnych jest wiele opcji w tym wysyłka, na koszt właściciela przedmiotu.",
  },
  {
    number: "!",
    content:
      "Koniecznie obserwuj naszego instagrama aby móc dalej pomagać. Pamiętaj, dobre uczynki zawsze wracają.",
  },
];

type HowItWorksPropsType = {};

const HowItWorks: React.FC<HowItWorksPropsType> = ({}) => {
  return (
    <div data-testid="how_it_works" className="space-y-10">
      <h1 className="text-3xl font-bold text-center">
        Jak działa zagubione<span className="text-primary-variant">.com</span>?
      </h1>
      <div className="grid grid-cols-4 gap-x-8">
        <div className="space-y-4 col-span-2">
          {INSTRUCTIONS.map((instruction, index) => (
            <div
              key={index}
              className="bg-primary-variant-on rounded-md flex items-center py-4 px-6 gap-x-6"
            >
              <p
                className={twMerge(
                  "text-primary-variant font-bold text-3xl",
                  index === INSTRUCTIONS.length - 1 && "text-orange-400"
                )}
              >
                {instruction.number}
              </p>
              <p className="grow">{instruction.content}</p>
            </div>
          ))}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9c36e73-8d26-4fd2-9414-b06ec0ef3413?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
          className="mx-auto aspect-[0.33] object-cover object-center w-[88px] fill-[linear-gradient(180deg,#797FB9_0.02%,rgba(121,127,185,0.00)_105.02%)] overflow-hidden max-w-full my-auto max-md:mt-10"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0afe4b-e804-4db3-8df2-7fde0e480e6d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0afe4b-e804-4db3-8df2-7fde0e480e6d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0afe4b-e804-4db3-8df2-7fde0e480e6d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0afe4b-e804-4db3-8df2-7fde0e480e6d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0afe4b-e804-4db3-8df2-7fde0e480e6d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0afe4b-e804-4db3-8df2-7fde0e480e6d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0afe4b-e804-4db3-8df2-7fde0e480e6d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0afe4b-e804-4db3-8df2-7fde0e480e6d?apiKey=5d6fb11db002416f98bff4d90d2e47c6&"
          className="aspect-[0.46] object-cover object-center w-[248px] rotate-[-0.23deg] shadow-[0px_17.13826px_25.70739px_0px_rgba(41,102,193,0.10)] overflow-hidden max-w-full mt-12 max-md:mt-10"
        />
      </div>
      <Button
        variant="secondary"
        className="mx-auto border-primary-variant border"
        icon={<ArrowLeftIcon className="h-6 aspect-square" />}
      >
        Dodaj Zgłoszenie
      </Button>
    </div>
  );
};

export default HowItWorks;
