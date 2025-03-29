import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const images = [
  {
    id: 1,
    url: "https://plus.unsplash.com/premium_photo-1673002094195-f18084be89ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3Vuc2V0fGVufDB8fDB8fHww",
    prompt: "A beautiful sunset over the mountains with vivid colors",
    user: "John Doe",
    profile: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1561344640-2453889cde5b?q=80&w=667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prompt: "Cyberpunk cityscape with neon lights and futuristic cars",
    user: "Alice Smith",
    profile: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    url: "https://plus.unsplash.com/premium_photo-1661954483883-edd65eac3577?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prompt: "Serene Japanese zen garden with stone pathway",
    user: "Emily Wong",
    profile: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1636364821321-20906f618151?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV3ZHJvcCUyMG9uJTIwYSUyMGxlYWZ8ZW58MHx8MHx8fDA%3D",
    prompt: "Detailed macro photograph of a dewdrop on a leaf",
    user: "Michael Chen",
    profile: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1517088455889-bfa75135412c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3klMjBJY2VsYW5kaWMlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
    prompt: "Northern lights dancing over a snowy Icelandic landscape",
    user: "Sarah Johnson",
    profile: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVjaGFuaWNhbCUyMGNsb2Nrd29yayUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    prompt: "Steampunk-inspired mechanical clockwork design",
    user: "David Rodriguez",
    profile: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    url: "https://plus.unsplash.com/premium_photo-1661841439995-1706237c83dc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5kZXJ3YXRlciUyMGNvcmFsfGVufDB8fDB8fHww",
    prompt: "Vibrant underwater coral reef ecosystem",
    user: "Emma Thompson",
    profile: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 8,
    url: "https://plus.unsplash.com/premium_photo-1673264933213-78ca4ca8c91d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5jaWVudCUyMHJlZHdvb2QlMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D",
    prompt: "Misty morning in an ancient redwood forest",
    user: "Robert Kim",
    profile: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 9,
    url: "https://plus.unsplash.com/premium_photo-1664304301965-3f6495191ab4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvbXB0JTNBJTIwJTIyU3VycmVhbCUyMGRlc2VydCUyMGxhbmRzY2FwZSUyMHdpdGglMjBnZW9tZXRyaWMlMjBzYW5kJTIwZm9ybWF0aW9ucyUyMiUyQ3xlbnwwfHwwfHx8MA%3D%3D",
    prompt: "Surreal desert landscape with geometric sand formations",
    user: "Olivia Martinez",
    profile: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1572197316318-2fb744caf405?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaHJvb20lMjBmb3Jlc3QlMjBhdCUyMG5pZ2h0fGVufDB8fDB8fHww",
    prompt: "Bioluminescent mushroom forest at night",
    user: "James Lee",
    profile: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww",
    prompt: "Intricate mandala art with fractal-like patterns",
    user: "Sophie Anderson",
    profile: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 12,
    url: "https://plus.unsplash.com/premium_photo-1681746821359-04441a9724de?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJiYW4lMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D",
    prompt: "Minimalist abstract representation of urban architecture",
    user: "Alex Patel",
    profile: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1708299861944-7e03057f9891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFuY2lhbiUyMHRlbXBlbHxlbnwwfHwwfHx8MA%3D%3D",
    prompt: "Traditional Japanese tea ceremony in a historic temple",
    user: "Isabella Garcia",
    profile: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZ1dHVyaXN0aWMlMjBzcGFjZSUyMHN0YXRpb258ZW58MHx8MHx8fDA%3D",
    prompt: "Futuristic space station orbiting a distant planet",
    user: "Ryan O'Connor",
    profile: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1506528388886-73c3a762ae8a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prompt: "Dreamlike watercolor landscape of rolling hills",
    user: "Natalie Kim",
    profile: "https://randomuser.me/api/portraits/women/15.jpg",
  },
];

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {images.map((image) => (
        <div key={image.id} className="relative overflow-hidden group">
          <div>
            <img
              src={image.url}
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
                <span className="text-sm">{image.user}</span>
                <img
                  src={image.profile}
                  alt={image.user}
                  className="w-8 h-8 rounded-full border border-white"
                />
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
  );
};

export default ImageGrid;
