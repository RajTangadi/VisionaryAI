import ImageGrid from "@/components/ImageGrid";
import TypeAnimation1 from "@/components/TypeAnimation1";
import useFetchImages from "@/hooks/useFetchImages";
import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data,loading, error } = useFetchImages();

  // Update filtered data whenever search term or data changes
  useEffect(() => {
    handleSearch();
  }, [data, search]);

  const handleSearch = () => {
    if (!data) return;

    if (!search.trim()) {
      // If search is empty, show all images
      setFilteredData(data);
      return;
    }
    // Convert search term to lowercase for case-insensitive comparison
    const searchTerm = search.toLowerCase();

    // Filter data based on prompt or username containing the search term
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
                  ({filteredData?.length || 0}{" "}
                  {filteredData?.length === 1 ? "image" : "images"})
                </span>
              </>
            )}{" "}
          </p>
        </div>
        <ImageGrid data={filteredData} loading={loading} error={error}/>
      </div>
    </>
  );
};

export default Home;
