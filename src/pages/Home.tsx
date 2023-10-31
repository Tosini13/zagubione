import HowItWorks from "../components/HowItWorks";
import PostsDrop from "../components/PostsDrop";
import TitleSection from "../components/TitleSection";
import { stuffType } from "../constants";
import FoundContextProvider, { useFoundContext } from "../stores/found.context";
import LostContextProvider, { useLostContext } from "../stores/lost.context";

const FoundDrops = () => {
  const { found } = useFoundContext();
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">
        Znalezione w <span className="text-primary-variant">Szczecinie</span>
      </h2>
      <PostsDrop type={stuffType.FOUND} posts={found} />
    </div>
  );
};

const LostDrops = () => {
  const { lost } = useLostContext();
  console.log("lost !log!", lost);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">
        Zgubione w <span className="text-primary-variant">Szczecinie</span>
      </h2>
      <PostsDrop type={stuffType.LOST} posts={lost} />
    </div>
  );
};

type HomePropsType = {};

const Home: React.FC<HomePropsType> = ({}) => {
  return (
    <div data-testid="home" className="py-16">
      <TitleSection />
      <div className="horizontal-layout py-16">
        <FoundContextProvider>
          <FoundDrops />
        </FoundContextProvider>
        <LostContextProvider>
          <LostDrops />
        </LostContextProvider>
      </div>
      <div className="bg-primary-variant/10">
        <div className="horizontal-layout py-16">
          <HowItWorks />
        </div>
      </div>
    </div>
  );
};

export default Home;
