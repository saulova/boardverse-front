// node_modules
import { useEffect, useState } from "react";

// packages
import UIComponents from "@src-path/packages/UIComponents";

const ModalLandscape = () => {
  const [show, setShow] = useState(false);

  const handleResizeLandscape = () => {
    const isMobile = screen.width <= 640 || screen.height <= 420;

    const isLandscape =
      document.documentElement.clientWidth >
      document.documentElement.clientHeight;

    setShow(() => {
      if (isMobile && !isLandscape) {
        return true;
      }
      return false;
    });
  };

  useEffect(() => {
    if (typeof document != "undefined") {
      window.addEventListener("resize", handleResizeLandscape);
      handleResizeLandscape();
    }
  });

  return (
    <UIComponents.Modal show={show}>
      <div className="w-40">
        <UIComponents.Container>
          <div className="flex flex-col mx-3 my-2">
            <img
              src="assets/ui/rotate-device.png"
              className="w-20 m-auto mb-2"
            />
            <p>Rotate your device</p>
          </div>
        </UIComponents.Container>
      </div>
    </UIComponents.Modal>
  );
};

export default ModalLandscape;
