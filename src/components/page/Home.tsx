import { BsArrowRight } from "react-icons/bs";
import { CiBandage } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { LuLeaf } from "react-icons/lu";
import { MdOutlineWaterDrop } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="main-content">
        <section className="banner">
          <div
            style={{
              backgroundImage: `url(
              https://res.cloudinary.com/larq/image/fetch/q_auto,f_auto/https://res.cloudinary.com/larq/images/f_auto,q_auto/v1709714526/Desktop_41341c9bd/Desktop_41341c9bd.jpg?_i=AA
            )`,
            }}
            className="w-full bg-cover bg-center bg-no-repeat text-white px-6 h-[calc(100vh-150px)] pt-32"
          >
            <div className="title">Drink briliantly</div>
            <div className="headline">
              <h2 className="text-2xl font-semibold pb-8">
                Take $20, give $20
              </h2>
            </div>
            <div className="description mb-4">
              Together with charity: water, let's bring an entire community in
              Malawi sustainable access to clean and safe drinking water.
            </div>
            <div className="flex items-center border rounded-full w-fit px-4 py-2 bg-white text-black">
              <button className="">Shop now</button>
              <BsArrowRight className="ml-4" />
            </div>
          </div>
        </section>

        <div className="brilliant px-6 mt-14">
          <h2 className="font-medium text-3xl my-2">Brilliant</h2>
          <div className="rating-star flex mb-4">
            <IoIosStar className="text-orange-600 text-xl mr-1" />
            <IoIosStar className="text-orange-600 text-xl mr-1" />
            <IoIosStar className="text-orange-600 text-xl mr-1" />
            <IoIosStar className="text-orange-600 text-xl mr-1" />
            <IoIosStar className="text-orange-600 text-xl mr-1" />
          </div>
          <div className="total_rating text-sm mb-8">based on ... rating</div>
        </div>

        <div className="flex gap-2 overflow-x-scroll w-full h-60 px-6 mb-10">
          <div className="card-box bg-slate-100 p-6 min-w-64 flex flex-col justify-between">
            <div>
              What's the Next Status Water Bottle? Three of our experts named
              the LARQ bottle as one to watch.
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/strategist.png"
                alt=""
              />
            </div>
          </div>
          <div className="card-box bg-slate-100 p-6 min-w-64 flex flex-col justify-between">
            <div>
              What's the Next Status Water Bottle? Three of our experts named
              the LARQ bottle as one to watch.
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/strategist.png"
                alt=""
              />
            </div>
          </div>
          <div className="card-box bg-slate-100 p-6 min-w-64 flex flex-col justify-between">
            <div>
              What's the Next Status Water Bottle? Three of our experts named
              the LARQ bottle as one to watch.
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_150/v1685705206/v3-images/media-block/blue/strategist.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr className="border border-black mx-6" />

        <div className="mt-5 px-6 mb-10">
          <div className="title font-medium text-3xl my-2 mt-14">Shop</div>
          <div className="purification">
            <img
              src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781791/Homepage-v3/Navigation/update/purification-big.jpg"
              alt=""
              className="rounded-xl mt-8"
            />
            <div className="text text-center mt-10">
              <h2 className="text-2xl font-medium">Purification</h2>
              <p className="underline my-4">Shop now</p>
            </div>
          </div>
          <div className="home">
            <img
              src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781790/Homepage-v3/Navigation/update/home-big.jpg"
              alt=""
              className="rounded-xl mt-8"
            />
            <div className="text text-center mt-10">
              <h2 className="text-2xl font-medium">Home</h2>
              <p className="underline my-4">Shop now</p>
            </div>
          </div>
          <div className="home">
            <img
              src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1692781790/Homepage-v3/Navigation/update/drinkware-big-us.jpg"
              alt=""
              className="rounded-xl mt-8"
            />
            <div className="text text-center mt-10">
              <h2 className="text-2xl font-medium">Drinkware</h2>
              <p className="underline my-4">Shop now</p>
            </div>
          </div>
        </div>

        <div className="article bg-gradient-to-tr from-pink-50 to-white p-16 flex flex-col justify-between h-fit text-center items-center">
          <div className="mb-12 flex flex-col items-center">
            <CiBandage className="text-5xl scale-x-[-1] text-red-400 mb-4" />
            <div className="card-title font-bold mb-4">Say yes to refills</div>
            <div className="card-description">
              Save money and make single-use water bottles a thing of the past.
            </div>
          </div>
          <div className="flex flex-col items-center mb-16">
            <MdOutlineWaterDrop className="text-5xl scale-x-[-1] text-red-400 mb-4" />
            <div className="card-title font-bold mb-4">A smart way yo sip</div>
            <div className="card-description">
              PureVis™ and Nano Zero technology improves water quality for a
              brilliant hydration experience on the go.
            </div>
          </div>
          <div className="flex flex-col items-center mb-16">
            <LuLeaf className="text-4xl scale-x-[-1] text-red-400 mb-4" />
            <div className="card-title font-bold mb-4">
              Hydrate with purpose
            </div>
            <div className="card-description ">
              A portion of proceeds supports environmental and clean water
              projects worldwide.
            </div>
          </div>
        </div>

        <div className="now-trending mb-10">
          <h2 className="title px-6 font-medium text-3xl my-2">Now Trending</h2>
          <div className="flex gap-2 overflow-x-scroll w-full px-6 mb-10">
            <div className="card-box bg-slate-100 p-6 min-w-80 flex flex-col justify-between">
              <div>
                <img
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1710408035/SKU/SPA/v3/SET-3XSWIGM.png"
                  alt="bottle image"
                />
              </div>
              <div className="now-trending-text flex flex-col justify-between items-center text-center h-44 pb-20">
                <h3 className="font-medium">Swig&nbsp;Squad</h3>
                <div className="flex justify-between w-28">
                  <p>23 oz</p> <span>34 oz</span>
                </div>
                <div className="flex">
                  <p className="line-through pr-1">$119.85</p>
                  <p>$99</p>
                </div>
              </div>
            </div>
            <div className="card-box bg-slate-100 p-6 min-w-80 flex flex-col justify-between">
              <div>
                <img
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/w_900/v1710408035/SKU/SPA/v3/SET-FLIP-UVC-STRAW-M-OB.png"
                  alt="bottle image"
                />
              </div>
              <div className="now-trending-text flex flex-col justify-between items-center text-center h-44 pb-20">
                <h3 className="font-medium">Swig&nbsp;Squad</h3>
                <div className="flex justify-between w-28">
                  <p>23 oz</p> <span>34 oz</span>
                </div>
                <div className="flex">
                  <p className="line-through pr-1">$119.85</p>
                  <p>$99</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="px-6 mb-10 border-black" />

        <div className="learn-more mb-6">
          <div
            className="w-full bg-cover bg-center bg-no-repeat text-white min-h-96 h-svh"
            style={{
              backgroundImage: `linear-gradient(60deg, rgba(10,30,110,0.7),rgba(255,255,255,0),rgba(255,255,255,0)) ,url(https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684953088/Homepage-v3/our_mission_mobile.jpg)`,
            }}
          >
            <div className=" text-white px-6 pt-40">
              <div className="title mb-4">Our mission</div>
              <div className="headline mb-10 font-semibold text-3xl">
                Drink briilliantly
              </div>
              <div className="description leading-8 opacity-90 mb-6">
                We make it easy to opt for the healthier and more sustainable
                hydration choice, anytime and anywhere.
              </div>
              <div className=" ">
                <button className="flex items-center bg-white border rounded-full px-4 py-2 text-black">
                  Learn more <BsArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="magazine">
          <div className="mb-10 px-6">
            <h2 className="title font-semibold text-2xl mb-4">basq magazine</h2>
            <p className="description mb-8">
              Take a peek at our online magazine where we cover everything from
              water to travel and weliness.
            </p>
            <button className="flex items-center border rounded-full px-4 py-2 font-semibold">
              Explore basq <BsArrowRight className="ml-4" />
            </button>
          </div>

          <div className="flex gap-2 overflow-x-scroll w-full px-6 mb-10">
            <div className="card-box min-w-72 flex flex-col">
              <div>
                <img
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876841/Homepage-v3/larq_pitcher_on_table.png"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div className="description pb-8 mt-4">
                <div className="card_title font-medium">
                  I'm a nutritionist,and I only use filtered warer.Here's why.
                </div>
                <div className="card_link">
                  <Link to={"/"} className="underline">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-box min-w-72 flex flex-col">
              <div>
                <img
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876841/Homepage-v3/larq_pitcher_on_table.png"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div className="description pb-8 mt-4">
                <div className="card_title font-medium">
                  I'm a nutritionist,and I only use filtered warer.Here's why.
                </div>
                <div className="card_link">
                  <Link to={"/"} className="underline">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="card-box min-w-72 flex flex-col">
              <div>
                <img
                  src="https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876841/Homepage-v3/larq_pitcher_on_table.png"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div className="description pb-8 mt-4">
                <div className="card_title font-medium">
                  How clean is New York Tap Water?
                </div>
                <div className="card_link">
                  <Link to={"/"} className="underline">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
