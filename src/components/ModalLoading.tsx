// packages
import UIComponents from "@src-path/packages/UIComponents";
import Icons from "@src-path/packages/Icons";

interface IModalLoadingProps {
  show: boolean;
  progress: number;
}

const ModalLoading = ({ show, progress }: IModalLoadingProps) => {
  return (
    <UIComponents.Modal show={show}>
      <div className="w-40">
        <UIComponents.Container>
          <div className="flex flex-col mx-3 my-2 text-lg text-center font-oswald text-slate-700">
            Loading
            <div className="flex">
              <Icons.Others.Loading />
              <span className="absolute -translate-x-1/2 left-1/2 top-1/2">
                {progress}%
              </span>
            </div>
          </div>
        </UIComponents.Container>
      </div>
    </UIComponents.Modal>
  );
};

export default ModalLoading;
