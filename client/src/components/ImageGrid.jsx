import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import useFetchImages from "@/hooks/useFetchImages";
import { getColorForCharacter } from "../constant/characterColors";

const ImageGrid = () => {
  const { data, loading, error } = useFetchImages();

  // Function to handle image download
  const handleDownload = async (imageUrl, prompt) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${prompt.replace(/\s+/g, "_")}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  // Skeleton loader component that matches the structure of our image cards
  const ImageSkeleton = () => (
    <div className="space-y-3">
      <Skeleton className="h-64 w-full rounded-lg" />
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <Skeleton className="h-8 w-8 rounded-md " />
      </div>
    </div>
  );

  // Generate an array for the skeleton placeholders based on grid size
  const skeletonCount = 8; // Number of skeleton items to show
  const skeletonArray = Array(skeletonCount).fill(null);

  // If there's an error, display it
  if (error) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500">Error loading images: {error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {loading
          ? // Show skeletons when loading
            skeletonArray.map((_, index) => (
              <ImageSkeleton key={`skeleton-${index}`} />
            ))
          : // Show actual content when loaded
            data.map((image) => (
              <div key={image._id} className="relative overflow-hidden group">
                <div>
                  <img
                    src={image?.imageUrl}
                    alt={image.prompt}
                    className="w-full h-64 object-cover rounded-lg shadow-none"
                    loading="lazy"
                  />
                </div>
                {/* Overlay on Hover */}
                <div className="absolute w-full h-40 translate-y-25 inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-3 text-white">
                  {/* Scrollable Prompt */}
                  <ScrollArea className="max-h-24">
                    <p className="text-sm font-semibold">{image.prompt}</p>
                  </ScrollArea>

                  {/* User & Download Section */}
                  <div className="flex justify-between items-center">
                    {/* User Info */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{image.userName}</span>
                      <div
                        className={`w-8 h-8 rounded-full ${getColorForCharacter(
                          image.userName
                        )} flex items-center justify-center text-white font-medium`}
                      >
                        {image.userName.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    {/* Download Button */}
                    <Button
                      variant="ghost"
                      className="text-white p-2"
                      onClick={() =>
                        handleDownload(image.imageUrl, image.prompt)
                      }
                    >
                      <Download className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

        {/* Show message if no images and not loading */}
        {!loading && data.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No images found.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGrid;
