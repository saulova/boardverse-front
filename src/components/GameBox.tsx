// node_module
import { useEffect, useRef, useState } from "react";

// packages
import Icons from "@src-path/packages/Icons";
import Utils from "@src-path/packages/Utils";

interface IGameBoxProps {
  url: string;
  spinning?: boolean;
}

const GameBox = ({ url, spinning }: IGameBoxProps) => {
  const image = useRef<HTMLImageElement>(null!);

  const maxWidth = 250;
  const maxHeight = 200;
  const length = 26;

  const [dimensions, setDimensions] = useState({
    width: maxWidth,
    height: maxHeight,
  });

  const pespective = (dimensions.width + dimensions.height + length) * 2;

  const [bgColor, setBgColor] = useState("#FFFFFF");

  const [loading, setLoading] = useState(true);

  // fix resize glitch
  const [imageUrl, setImageUrl] = useState(url);

  function limitImage(
    img: HTMLImageElement,
    maxWidth: number,
    maxHeight: number
  ) {
    if (img.naturalWidth >= img.naturalHeight) {
      return {
        width: maxWidth,
        height: (maxWidth * img.naturalHeight) / img.naturalWidth,
      };
    }

    return {
      width: (maxHeight * img.naturalWidth) / img.naturalHeight,
      height: maxHeight,
    };
  }

  useEffect(() => {
    setLoading(true);
    // fix resize glitch
    setImageUrl(url);
  }, [url]);

  useEffect(() => {
    const updateBox = () => {
      setDimensions(limitImage(image.current, maxWidth, maxHeight));
      setBgColor(Utils.GetMostFrequentlyColor({ image: image.current }));
      setLoading(false);
    };

    updateBox();

    image.current.onload = updateBox;
  }, []);
  return (
    <div className="flex flex-col m-auto">
      <span
        className={
          "z-20 mx-auto h-20 w-20 text-stone-600" + (!loading ? " hidden" : "")
        }
      >
        <Icons.Others.Loading />
      </span>

      <div
        className="z-20 mx-auto"
        style={{
          perspective: pespective + "px",
          perspectiveOrigin: "50% -100%",
          display: loading ? "none" : undefined,
        }}
      >
        <div
          className={spinning ? " animate-rotateBox" : undefined}
          style={{
            width: dimensions.width + "px",
            height: dimensions.height + "px",
            position: "relative",
            transformStyle: "preserve-3d",
          }}
        >
          {/* front */}
          <div
            className="absolute"
            style={{
              backgroundColor: bgColor,
              border: "1px solid rgba(0,0,0,0.1)",
              width: dimensions.width + "px",
              height: dimensions.height + "px",
              transform: "rotateY(0deg) translateZ(" + length / 2 + "px)",
            }}
          >
            <img
              ref={image}
              src={imageUrl}
              style={{
                width: dimensions.width,
                height: dimensions.height,
              }}
            />
          </div>
          {/* back */}
          <div
            className="absolute"
            style={{
              backgroundColor: bgColor,
              border: "1px solid rgba(0,0,0,0.1)",
              width: dimensions.width + "px",
              height: dimensions.height + "px",
              transform: "rotateY(180deg) translateZ(" + length / 2 + "px)",
            }}
          >
            <img
              ref={image}
              src={imageUrl}
              style={{
                width: dimensions.width,
                height: dimensions.height,
              }}
            />
          </div>
          {/* right */}
          <div
            className="absolute"
            style={{
              backgroundColor: bgColor,
              border: "1px solid rgba(0,0,0,0.1)",
              width: length + "px",
              height: dimensions.height + "px",
              left: dimensions.width / 2 - length / 2 + "px",
              transform:
                "rotateY(90deg) translateZ(" + dimensions.width / 2 + "px)",
            }}
          ></div>
          {/* left */}
          <div
            className="absolute"
            style={{
              backgroundColor: bgColor,
              border: "1px solid rgba(0,0,0,0.1)",
              width: length + "px",
              height: dimensions.height + "px",
              left: dimensions.width / 2 - length / 2 + "px",
              transform:
                "rotateY(-90deg) translateZ(" + dimensions.width / 2 + "px)",
            }}
          ></div>
          {/* top */}
          <div
            className="absolute"
            style={{
              backgroundColor: bgColor,
              border: "1px solid rgba(0,0,0,0.1)",
              width: dimensions.width + "px",
              height: length + "px",
              top: dimensions.height / 2 - length / 2 + "px",
              transform:
                "rotateX(90deg) translateZ(" + dimensions.height / 2 + "px)",
            }}
          ></div>
          {/* bottom */}
          <div
            className="absolute"
            style={{
              backgroundColor: bgColor,
              border: "1px solid rgba(0,0,0,0.1)",
              width: dimensions.width + "px",
              height: length + "px",
              top: dimensions.height / 2 - length / 2 + "px",
              transform:
                "rotateX(-90deg) translateZ(" + dimensions.height / 2 + "px)",
            }}
          ></div>
        </div>
      </div>
      <div
        className="relative z-0 opacity-50 bg-stone-400 blur-md"
        style={{
          width: dimensions.width * 1.5 + "px",
          height: dimensions.width / 1.5 + "px",
          borderRadius: "50%",
          marginTop: "-" + dimensions.width / 1.5 / 2 + "px",
        }}
      ></div>
    </div>
  );
};

export default GameBox;
