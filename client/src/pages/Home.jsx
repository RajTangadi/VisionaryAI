import ImageGrid from "@/components/ImageGrid";
import TypeAnimation1 from "@/components/TypeAnimation1";
import useFetchImages from "@/hooks/useFetchImages";
import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data, loading, error } = useFetchImages();

  useEffect(() => {
    handleSearch();
  }, [data, search]);

  const handleSearch = () => {
    if (!data) return;

    if (!search.trim()) {
      setFilteredData(data);
      return;
    }
    const searchTerm = search.toLowerCase();
    const filtered = data?.filter(
      (item) =>
        (item.userName && item.userName.toLowerCase().includes(searchTerm)) ||
        (item.prompt && item.prompt.toLowerCase().includes(searchTerm))
    );

    setFilteredData(filtered);
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="p-5 w-full max-w-5xl mx-auto">
        <div className="mt-10 mx-auto text-center">
          {/* Show animation only on desktop and higher, else show text */}
          <div className="hidden lg:block">
            <TypeAnimation1 />
          </div>
          <div className="block lg:hidden text-center text-3xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Text To Image
            </span>{" "}
            Generator
          </div>
          <h1 className="text-xl md:text-2xl text-gray-500 text-center mt-5 font-semibold px-4">
            Bring your imagination to reality with just a few words. Explore
            endless possibilities—start creating now!
          </h1>
        </div>
        <div className="mt-8 px-4">
          <h3 className="pt-5 pb-3 font-semibold text-lg">Search Image</h3>
          <input
            type="text"
            placeholder="Search Image"
            className="w-full bg-white text-black p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={handleSearchInput}
          />
          <p className="font-semibold mt-4 text-lg text-gray-500">
            {search.trim() ? (
              <>
                Showing results for
                <span className="text-black pl-1">"{search}"</span>
                <span className="text-gray-400 pl-1">
                  ({filteredData?.length || 0}
                  {filteredData?.length === 1 ? " result" : " results"})
                </span>
              </>
            ) : (
              <>
                Showing all images
                <span className="text-gray-400 pl-1">
                  ({filteredData?.length || 0} {filteredData?.length === 1 ? "image" : "images"})
                </span>
              </>
            )}
          </p>
        </div>
        <ImageGrid data={filteredData} loading={loading} error={error} />
      </div>
    </>
  );
};

export default Home;
