import Header from "../components/Header";
import FrontLabel from "./FrontLabel";
import { CARDS_DATA } from "../static/constant";
import AnimatedCard from "../components/AnimatedCard";

const Home = () => {
  return (
    <div className="bg-light-bg">
      <div className="relative">
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>

        <div className="pt-[140px] h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <div className="w-full h-screen flex flex-col justify-center items-center snap-start">
            <FrontLabel />
          </div>

          {CARDS_DATA.map((card, idx) => (
            <div key={idx} className="snap-start">
              <AnimatedCard
                image={card.img}
                text={card.text}
                color={card.color}
                path={card.path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
