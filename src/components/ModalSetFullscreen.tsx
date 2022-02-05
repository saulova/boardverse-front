// node_modules
import { useEffect, useState } from "react";

// packages
import UIComponents from "@src-path/packages/UIComponents";

const ModalSetFullscreen = () => {
  const [show, setShow] = useState(false);

  const handleSetFullscreen = () => {
    if (document.fullscreenEnabled) {
      document.documentElement.requestFullscreen();
    }
  };

  const handleResizeFullscreen = () => {
    const isMobile = screen.width <= 640 || screen.height <= 420;

    const isFullscreenSize =
      screen.height == document.documentElement.clientHeight;

    setShow(() => {
      if (isMobile && document.fullscreenElement == null && !isFullscreenSize) {
        return true;
      }
      return false;
    });
  };

  useEffect(() => {
    if (typeof document != "undefined") {
      window.addEventListener("resize", handleResizeFullscreen);
      document.documentElement.addEventListener(
        "fullscreenchange",
        handleResizeFullscreen
      );
      handleResizeFullscreen();
    }
  });

  return (
    <UIComponents.Modal show={show}>
      <div className="w-40">
        <UIComponents.Container>
          <div className="flex flex-col mx-3 my-2">
            <img src="assets/ui/fullscreen.svg" className="w-20 m-auto mb-2" />
            <UIComponents.Button
              buttonColor="blue"
              buttonColorIntensity={600}
              onClick={handleSetFullscreen}
            >
              <p className="text-white">Fullscreen</p>
            </UIComponents.Button>
          </div>
        </UIComponents.Container>
      </div>
    </UIComponents.Modal>
  );
};

export default ModalSetFullscreen;
