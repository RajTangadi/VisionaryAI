import ImageGrid from "@/components/ImageGrid";
import TypeAnimation1 from "@/components/TypeAnimation1";

const Home = () => {
  return (
    <>
      <div className="p-15 w-[75%] mx-auto">
        <div className="mt-10 mx-auto text-center">
          <TypeAnimation1 />
          <h1 className="text-2xl text-gray-500 text-center mt-5  font-semibold ">
            Bring your imagination to reality with just a few words. Explore
            endless possibilities—start creating now!
          </h1>
        </div>
        <div className="lg:mx-25">
          <h3 className="pt-5 pb-3 font-semibold">Search Image</h3>
          <input
            type="text"
            placeholder="Search Image"
            className="w-full bg-white text-black p-2"
          />
          <p className="font-semibold mt-4 text-lg text-gray-500">
            Showing result for{" "}
            <span className="text-black pl-1">Post image</span>{" "}
          </p>
        </div>
        <ImageGrid />
      </div>
    </>
  );
};

export default Home;
