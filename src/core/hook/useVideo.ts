import { useRef, useMemo, useEffect, DependencyList } from 'react';
interface Props {
  videoElement: HTMLVideoElement | null,
}

export const useVideo = (props: Props, dep: DependencyList = []) => {
  const { videoElement } = props;
  const videoRef = useRef<HTMLVideoElement>(videoElement || null);
  console.log('videoRef', videoRef);
};