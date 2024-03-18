import { BsArrowRight } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

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

        <div className="article bg-gradient-to-tr from-pink-50 to-white p-16 flex flex-col justify-between h-screen text-center">
          <div>
            .<div className="card-title font-bold mb-4">Say yes to refills</div>
            <div className="card-description">
              Save money and make single-use water bottles a thing of the past.
            </div>
          </div>
          <div>
            <div className="card-title font-bold mb-4">A smart way yo sip</div>
            <div className="card-description">
              PureVis™ and Nano Zero technology improves water quality for a
              brilliant hydration experience on the go.
            </div>
          </div>
          <div>
            <div className="card-title font-bold mb-4">
              Hydrate with purpose
            </div>
            <div className="card-description ">
              A portion of proceeds supports environmental and clean water
              projects worldwide.
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
