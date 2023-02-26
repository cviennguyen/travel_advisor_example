import { useState } from "react";
import { Navbar, WhereTo, ToVisit, ToEat, ToStay, Footer } from "../components";
import travelerChoiceBg from "../img/tc_cards_desktop.jpeg";
import travelerChoiceBgSM from "../img/tc_cards_tablet.jpeg";
import botb from "../img/botb_mark.svg";

const Home = () => {
  // Home Page Trending in Travel toggle state
  const [toggle, setToggle] = useState({
    toGo: true, // Place to Go state, active by defaul
    toDo: false, //Things to Do state
    toStay: false, //Places to staty
  });

  return (
    <>
      {/* Navbar with Sticky poperty */}
      <Navbar sticky />
      {/* --- */}

      {/* Search Form - Where to */}
      <WhereTo />
      {/* --- */}

      {/* Places to Visit Carousel */}
      <ToVisit />
      {/* --- */}

      {/* Places to Eat Carousel */}
      <ToEat />
      {/* --- */}

      {/* Places to Stay Carousel */}
      <ToStay />
      {/* --- */}

      {/* Traveler Choice Section */}
      <div className="bg-[#004f32]">
        <div className="container mx-auto mmd:grid mmd:grid-cols-12 h-[400px] sm:h-[500px] mmd:h-[600px] overflow-hidden">
          <div className="col-span-3 text-center py-6 flex flex-col items-center justify-center p-4 md:p-2">
            <img src={botb} alt="" className="h-16 lg:h-20 mb-5 lg:mb-10" />
            <h2 className="text-white font-bold text-2xl md:text-[2.15em]">
              Travelers' Choice Best of the Best
            </h2>
            <button className="rounded-full bg-black hover:bg-gray-600 transition ease-out duration-200 text-white w-fit py-2 sm:py-3 px-3 sm:px-4 mt-5 lg:mt-14">
              <p className="font-semibold text-sm">See the winners</p>
            </button>
          </div>
          {/* Section Background Image - Displays only on Large devices, Like Desktop */}
          <div
            className="hidden mmd:block h-full col-span-9 bg-cover"
            style={{ backgroundImage: `url(${travelerChoiceBg})` }}
          />
          {/* --- */}

          {/* Section Background Image - Displays only on Small Devices, Mobile */}
          <div
            className="block mmd:hidden h-full bg-contain bg-top"
            style={{
              backgroundImage: `url(${travelerChoiceBgSM})`,
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* --- */}
        </div>
      </div>
      {/* --- */}
      {/* Trending in Travel Section */}

      {/* --- */}

      {/* Footer */}
      <Footer />
      {/* --- */}
    </>
  );
};

export default Home;
