// packages
import Game from "@src-path/components/Game";

interface IAppProps {
  assets: { id: string; url: string }[];
}

const propsExample: IAppProps = {
  assets: [
    {
      id: "ui-1",
      url: "http://192.168.100.6:3000/assets/ui/joy01.png",
    },
    {
      id: "ui-2",
      url: "http://192.168.100.6:3000/assets/ui/joy02.png",
    },
    {
      id: "1",
      url: "http://192.168.100.6:3000/chess/chess_board.png",
    },
    {
      id: "2",
      url: "http://192.168.100.6:3000/chess/chess_bishop_blue.png",
    },
    {
      id: "3",
      url: "http://192.168.100.6:3000/chess/chess_king_blue.png",
    },
    {
      id: "4",
      url: "http://192.168.100.6:3000/chess/chess_knight_blue.png",
    },
    {
      id: "5",
      url: "http://192.168.100.6:3000/chess/chess_pawn_blue.png",
    },
    {
      id: "6",
      url: "http://192.168.100.6:3000/chess/chess_queen_blue.png",
    },
    {
      id: "7",
      url: "http://192.168.100.6:3000/chess/chess_rook_blue.png",
    },
    {
      id: "8",
      url: "http://192.168.100.6:3000/chess/chess_bishop_red.png",
    },
    {
      id: "9",
      url: "http://192.168.100.6:3000/chess/chess_king_red.png",
    },
    {
      id: "10",
      url: "http://192.168.100.6:3000/chess/chess_knight_red.png",
    },
    {
      id: "11",
      url: "http://192.168.100.6:3000/chess/chess_pawn_red.png",
    },
    {
      id: "12",
      url: "http://192.168.100.6:3000/chess/chess_queen_red.png",
    },
    {
      id: "13",
      url: "http://192.168.100.6:3000/chess/chess_rook_red.png",
    },
  ],
};

const Board = () => {
  return (
    <>
      <Game.App assets={propsExample.assets} />
    </>
  );
};

export default Board;
