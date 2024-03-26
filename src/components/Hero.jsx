import heroImg from "../assets/images/pngwing 1.png";
const Hero = () => {
  return (
    <div>
      <div className="hero bg-[#1313130D] my-7 rounded-2xl max-w-[82%] mx-auto">
        <div className="hero-content flex-col lg:flex-row p-14">
          <div>
            <h1 className="text-5xl font-bold max-w-[526px] mb-8">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn bg-primary text-white">View The List</button>
          </div>
          <div className="max-w-80">
            <img src={heroImg} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
