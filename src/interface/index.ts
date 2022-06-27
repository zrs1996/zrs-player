/**
 * 标清 360P SD
 * 高清 540P HD
 * 超清 720P FHD
 * 蓝光 1080P BD
 */
export type qualityName = 'SD' | 'HD' | 'FHD' | 'BD';
export type qualityKey = '360P' | '540P' | '720P' | '1080P';
export interface qualityAttributes<T = qualityName> {
  name: T;
  url: string;
}

export interface videoOption<S = string, B = boolean, N = number> {
  /**
   * @description video width
   */
  width?: N | S;
  /**
   * @description video height
   */
  height?: N | S;
  /**
  * @description video src
  */
   videoSrc?: S;
  /**
   * @description video cover
   */
  poster?: S;
  /**
   * @description video quality
   */
  quality?: qualityAttributes[];
  /**
   * @description video autoplay
   */
  autoPlay?: B;
}
export interface videoparameter {
  option: videoOption;
}