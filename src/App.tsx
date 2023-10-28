import Header from "./components/Header";
import TitleSection from "./components/TitleSection";

function App() {
  return (
    <>
      <div className="sticky w-full">
        <Header />
      </div>
      <div className="min-h-screen grid place-content-center">
        <TitleSection />
      </div>
    </>
  );
}

export default App;
