import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Game = dynamic<ReactNode>(
  () =>
    import("@src-path/components/Pages").then((Pages) => {
      return Pages.default.Game;
    }),
  {
    ssr: false,
  }
);

const Chess = () => {
  return (
    <>
      <style jsx>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <Game />
    </>
  );
};

export default Chess;
