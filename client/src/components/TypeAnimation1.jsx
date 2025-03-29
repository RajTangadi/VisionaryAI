import { TypeAnimation } from "react-type-animation";

const TypeAnimation1 = () => {
  return (
    <div>
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
          background: "linear-gradient(to right, #1e3a8a, #2563eb, #3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeAnimation1;
