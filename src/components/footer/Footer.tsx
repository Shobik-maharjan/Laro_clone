import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-emerald-50 px-6 pb-40">
        <div className="title">
          <h3 className="font-semibold text-2xl mb-3">Become an insider</h3>
        </div>
        <div className="subtitle mb-8">
          <p>
            Receive exclusive offers, hydration news, and more when you
            subscribe.
          </p>
        </div>
        <div className="contact">
          <div className="relative flex items-center mb-8">
            <input
              type="text"
              className="p-4 rounded-full w-full "
              placeholder="email"
            />
            <div className="bg-emerald-50 p-2 rounded-full absolute right-4">
              <BsArrowRight />
            </div>
          </div>
          <div className="flex justify-center gap-4 mb-20">
            <div className="social-media bg-white p-2 rounded-full w-fit">
              <FaFacebookF className="text-xl" />
            </div>
            <div className="social-media bg-white p-2 rounded-full w-fit">
              <FaInstagram className="text-xl" />
            </div>
            <div className="social-media bg-white p-2 rounded-full w-fit">
              <FaYoutube className="text-xl" />
            </div>
            <div className="social-media bg-white p-2 rounded-full w-fit">
              <FaTwitter className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
