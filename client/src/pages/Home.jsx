import ImageGrid from "@/components/ImageGrid";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div className="p-15 w-[#400px]">
        <div className="mt-10 mx-auto text-center">
          <TypeAnimation
            sequence={[
              "Dream it, type it, see it!",
              1000,
              "What’s on your mind? Let AI paint it!",
              1000,
              "Unlock the artist in you with just words..",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2rem",
              display: "inline-block",
              background:
                "linear-gradient(to right, #1e3a8a, #2563eb, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            repeat={Infinity}
          />
          <h1 className="text-2xl text-gray-500 text-center mt-5  font-semibold ">
            Bring your imagination to reality with just a few words. Explore
            endless possibilities—start creating now!
          </h1>
        </div>
        <div className="lg:mx-25 mt-10">
          <h3 className="pt-5 pb-3 font-semibold">Search Image</h3>
          <input
            type="text"
            placeholder="Search Image"
            className="w-full bg-white text-black p-2"
          />
          <p className="font-semibold mt-10 text-lg text-gray-500">Showing result for <span className="text-black pl-1">Post image</span> </p>
        </div>
        <ImageGrid />
      </div>
    </>
  );
};

export default Home;
