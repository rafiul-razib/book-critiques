import { Link } from "react-router-dom";
import heroImg from "../assets/images/pngwing 1.png";
const Hero = () => {
  return (
    <div>
      <div className="hero bg-[#1313130D] my-2 lg:my-7 rounded-2xl">
        <div className="hero-content flex-col-reverse lg:flex-row p-7 lg:p-14">
          <div className="text-center lg:text-start">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-56 lg:max-w-[526px] mb-8">
              Books to freshen up <br /> your bookshelf
            </h1>

            <Link to="/listed-books">
              <button className="btn bg-primary text-white">
                View The List
              </button>
            </Link>
          </div>
          <div className="max-w-40 lg:max-w-80">
            <img src={heroImg} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
