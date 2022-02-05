export interface GradientTextureProps {
  /** width: pixels */
  width: number;
  /** height: pixels */
  height: number;
  /** angle: degrees */
  angle: number;
  /** from: { color: 3 bytes hex (e.g. 0xFFFFFF), offset: percentage (0-100) } */
  from: { color: number; offset: number };
  /** via: { color: 3 bytes hex (e.g. 0xFFFFFF), offset: percentage (0-100) } */
  via?: { color: number; offset: number };
  /** to: { color: 3 bytes hex (e.g. 0xFFFFFF), offset: percentage (0-100) } */
  to: { color: number; offset: number };
}
