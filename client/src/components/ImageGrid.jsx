import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import useFetchImages from "@/hooks/useFetchImages";
import { getColorForCharacter } from "../constant/characterColors";

const ImageGrid = () => {
  const { data, loading, error } = useFetchImages();
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {data.map((image) => (
          <div key={image._id} className="relative overflow-hidden group">
            <div>
              <img
                src={image?.imageUrl}
                alt={image.prompt}
                className="w-full h-64 object-cover rounded-lg shadow-none "
              />
            </div>
            {/* Overlay on Hover */}

            <div className="absolute w-full h-40 translate-y-25   inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-3 text-white">
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
                <Button variant="ghost" className="text-white p-2">
                  <Download className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGrid;
