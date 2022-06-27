import React, {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useMemo,
  useImperativeHandle,
} from "react";
import { videoparameter } from "@/interface";
import Controller from './controller';
import './index.scss';

const AppCompent = (props: videoparameter) => {
  const { option } = props;
  const { videoSrc, width, height, poster, autoPlay } = option;
  /**
   * @description 视频对象
   */
  const videoRef = useRef<HTMLVideoElement>(null);

  const returnVideoSource = useMemo(() => {
    return (
      <>
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc} type="video/ogg" />
        <source src={videoSrc} type="video/webm" />
      </>
    );
  }, [videoSrc]);

  return (
    <div id='zrs_player'>
      <video
        ref={videoRef}
        width={width}
        height={height}
        autoPlay={autoPlay}
        src={videoSrc}
        poster={poster || undefined}
        id="zrs_player_video"
        className="zrs_player"
      >
        {returnVideoSource}
      </video>
      <Controller />
    </div>
  );
};
export default AppCompent;
