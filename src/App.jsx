import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import CardsData from "./data/CardsData";
import { useLocation } from "react-router-dom";

const Cards = lazy(() => import("./components/Cards"));

function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <>
      <div>
        <Navbar />

        {/* Hero Section */}

        <div className="bg-[#1f2937] text-center text-white py-20 px-5 xl:px-30">
          <p className="header-font font-semibold text-4xl md:text-6xl ">
            STYLE FOR THE CITY
          </p>
          <p className="mt-6 mb-15">
            Discover the latest trends in urban fashion.
          </p>
          <p></p>

          <button className="bg-teal-600 text-white rounded-md px-6 py-3 cursor-pointer">
            SHOP NOW
          </button>
        </div>

        {/* Product Section */}

        <div className="py-20 md:py-25 lg:py-20 px-5 xl:px-30">
          <p
            id="product-section"
            className="header-font font-semibold text-4xl md:text-6xl text-center mb-10"
          >
            Featured Product
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-10 justify-center">
            {CardsData.map((item, index) => (
              <Suspense fallback={<div>Loading card...</div>}>
                <div key={index}>
                  <Cards
                    itemName={item.itemName}
                    img={item.image}
                    price={item.price}
                    itemDescription={item.itemDescription}
                  />
                </div>
              </Suspense>
            ))}
          </div>
        </div>

        <div className="bg-[#FF5A5F] py-10 px-5 xl:px-30 grid md:grid-cols-[60%_40%] gap-x-3 gap-y-13">
          <div className="order-2 md:order-1 flex flex-col items-center justify-center text-center">
            <p className="header-font font-bold text-4xl md:text-5xl text-white">
              JUXTA BOBYWEAR
            </p>
            <p className="my-6 header-font font-bold text-4xl md:text-5xl">
              For every Body
            </p>

            <button className="border rounded-md px-15 py-2 cursor-pointer">
              SHOP NOW
            </button>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <img
              src="Images/13455077_5258717-removebg 1.png"
              alt=""
              className="w-full max-w-[270px]"
            />
          </div>
        </div>

        {/* Newslater */}

        <div className="py-20 md:py-25 lg:py-20 px-5 xl:px-30 text-center">
          <p className="header-font font-bold text-4xl md:text-5xl ">
            JOIN OUR NEWSLETTER
          </p>
          <p className="my-7">
            Get the latest news from the Juxta regarding new product, exclusive
            specials, lifestyle and fashion trends
          </p>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              className="border border-[#FF5A5F] outline-0 p-2 w-full sm:w-[50%]"
            />

            <br />

            <button className="border rounded-md px-15 py-2 cursor-pointer bg-[#FF5A5F] text-white mt-3 mx-auto">
              SUBSCRIBE NOW
            </button>
          </form>
        </div>

        {/* Footer */}

        <Footer />
      </div>
    </>
  );
}

export default App;
