import TitleSection from "../components/TitleSection";

type HomePropsType = {};

const Home: React.FC<HomePropsType> = ({}) => {
  return (
    <div data-testid="home">
      <TitleSection />
    </div>
  );
};

export default Home;
