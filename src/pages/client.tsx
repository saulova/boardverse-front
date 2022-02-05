// packages
import GameBox from "@src-path/components/GameBox";
import ModalLandscape from "@src-path/components/ModalLandscape";
import ModalSetFullscreen from "@src-path/components/ModalSetFullscreen";
import Icons from "@src-path/packages/Icons";
import UIComponents from "@src-path/packages/UIComponents";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-w-screen min-h-screen bg-[url('/assets/ui/bg-ui.png')] bg-[length:300px_300px]">
        <span className="absolute left-0 flex w-10 h-10 mt-2 ml-2 text-slate-700">
          <Icons.HeroIcons.Outline.User />
        </span>
        <span className="absolute right-0 flex flex-row mt-2 mr-2 text-slate-700">
          <span className="mr-2 w-7 h-7">
            <Icons.HeroIcons.Solid.ChatAlt />
          </span>
          <span className="w-7 h-7">
            <Icons.HeroIcons.Solid.Cog />
          </span>
        </span>

        <div className="flex min-h-screen">
          <div className="flex flex-row m-auto">
            <div className="w-20 h-20 my-auto mr-5 text-stone-600">
              <Icons.HeroIcons.Solid.ChevronLeft />
            </div>
            <div className="flex w-96 h-52">
              <GameBox url="chess/chess_box.png" spinning={true} />
            </div>
            <div className="w-20 h-20 my-auto ml-5 text-stone-600">
              <Icons.HeroIcons.Solid.ChevronRight />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 flex mx-auto mb-2 mr-3 text-slate-700">
            <div className="flex h-16 w-44">
              <UIComponents.Button
                buttonColor="blue"
                buttonColorIntensity={700}
              >
                <p className="m-auto font-sans font-extrabold text-white">
                  Start Game
                </p>
              </UIComponents.Button>
            </div>
          </div>
        </div>
      </div>
      <ModalSetFullscreen />
      <ModalLandscape />
    </>
  );
};

export default Home;
