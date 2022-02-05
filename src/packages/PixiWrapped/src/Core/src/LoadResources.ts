// node_modules
import { Loader as PixiLoader } from "pixi.js";

interface ICallbackProgressStatus {
  loading: boolean;
  progress: number;
  complete: boolean;
  error: { name: string; message: string }[] | undefined[];
}

interface ILoadResourcesProps {
  resources: { id: string; url: string }[];
  callbackProgress?: (status: ICallbackProgressStatus) => void;
}

const LoadResources = ({
  resources,
  callbackProgress,
}: ILoadResourcesProps) => {
  const resourcesLoader = new PixiLoader();

  var status = {
    loading: false,
    progress: 0,
    complete: false,
    error: new Array(),
  };

  resources.map((t) => {
    resourcesLoader.add(t.id, t.url); //, { crossOrigin: "use-credentials" });
  });

  resourcesLoader.onLoad.add((loader) => {
    if (callbackProgress) {
      status.loading = loader.loading;
      callbackProgress(status);
    }
  });

  resourcesLoader.onProgress.add((loader) => {
    if (callbackProgress) {
      status.progress = Math.round(loader.progress);
      callbackProgress(status);
    }
  });

  resourcesLoader.onComplete.add((loader) => {
    if (callbackProgress) {
      status.loading = loader.loading;
      status.complete = true;
      callbackProgress(status);
    }
  });

  resourcesLoader.onError.add((error) => {
    status.error.push({ name: error.name, message: error.message });
  });

  return resourcesLoader;
};

export default LoadResources;
