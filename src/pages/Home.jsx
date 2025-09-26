import FrontLabel from "./FrontLabel";
import { CARDS_DATA } from "../static/constant";
import AnimatedCard from "../components/AnimatedCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="snap-y snap-mandatory scroll-smooth">
          <div className="w-full h-screen flex flex-col justify-center items-center snap-start">
            <FrontLabel />
          </div>

          {CARDS_DATA.map((card, idx) => (
            <div key={idx} className="snap-start mb-2">
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
      <Footer />
    </div>
  );
};

export default Home;
