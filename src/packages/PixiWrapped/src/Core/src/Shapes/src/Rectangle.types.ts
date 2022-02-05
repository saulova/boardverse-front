// node_modules
import { Graphics as PixiGraphics } from "@pixi/graphics";

type gradientType = {
  /** from: { color: 3 bytes hex (e.g. 0xFFFFFF), offset: percentage (0-100) } */
  from: { color: number; offset: number };
  /** via: { color: 3 bytes hex (e.g. 0xFFFFFF), offset: percentage (0-100) } */
  via?: { color: number; offset: number };
  /** to: { color: 3 bytes hex (e.g. 0xFFFFFF), offset: percentage (0-100) } */
  to: { color: number; offset: number };
  /** angle: degrees */
  angle: number;
};

export interface RectangleProps {
  /** graphics: created PIXI.Graphics class from Pixi.js */
  graphics: PixiGraphics;
  /** color: 3 bytes hex (e.g. 0xFFFFFF) or (gradient) { from: { color: number, offset: number }, via(optional): { color: number, offset: number }, to: { color: number, offset: number } } */
  color?: number | gradientType;
  /** alpha(optional): opacity (0-1) */
  alpha?: number;
  /** x(optional): pixels (position) */
  x?: number;
  /** y(optional): pixels (position) */
  y?: number;
  /** width: pixels */
  width: number;
  /** height: pixels */
  height: number;
  /** cornerRadius(optional): pixels */
  cornerRadius?: number;
  /** border(optional): { width: pixels, color: 3 bytes hex (e.g. 0xFFFFFF), alpha?: opacity (0-1) } */
  border?: { width: number; color: number; alpha?: number };
}
