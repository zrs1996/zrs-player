import React, { memo, useContext, useRef, useMemo, useEffect, useState } from 'react';
import Controls from '../controls';
import { FlowContext } from '@/core/context';
import { useVideo } from '@/core/hook/useVideo';

import './index.scss';

const Controller = memo(() => {
  const reviceProps = useContext(FlowContext);
  const controllerRef = useRef<HTMLDivElement>(null);
  const { dispatch, videoState } = reviceProps;
  console.log('dispatch', dispatch);
  console.log('videoState', videoState);
  
  useVideo({
    videoElement: reviceProps.videoRef
  })

  /**
   * @description 显示操作控件
   */
  const showControl = (status: string) => {
    // set control show
  };

  /**
   * @description video点击播放事件
   */
  const handlePlay = () => {
    console.log('get video ref');
    
  };

  return (
    <div
      className='zrs_controller_wrap'
      onMouseEnter={() => showControl('enter')}
      onMouseLeave={() => showControl('leave')}
      onClick={handlePlay}
      ref={controllerRef}
    >
    <Controls />
    </div>
  )
});

export default Controller;
