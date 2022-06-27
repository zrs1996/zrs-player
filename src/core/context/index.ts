import React from 'react';
import { VideoStateType, mergeAction, initialState } from '@/core/context/redux';

/**
 * @description 公共数据 - 永不改变
 */
export interface contextType {
  videoRef: HTMLVideoElement | null;
  videoState: VideoStateType,
  dispatch?: React.Dispatch<mergeAction>
};


export const defaultValue = {
  videoRef: null,
  videoState: initialState,
};
export const FlowContext = React.createContext<contextType>(defaultValue);