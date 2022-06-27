import { useReducer } from 'react';
import { qualityKey } from '@/interface';

export interface VideoStateType<B = boolean, T = number> {
  /**
   * @description 是否显示控件
   */
  isControl: B;
  quality: qualityKey | undefined;
}

/**
 * @description 公共数据 - 变化的数据
 */
export const initialState = {
  isControl: false,
  quality: undefined
}

interface isControlActionType {
  type: 'isControl',
  data: VideoStateType['isControl']
}

interface qualityActionType {
  type: 'quality',
  data: VideoStateType['quality']
}

export type mergeAction = isControlActionType | qualityActionType;

export const useVideoState = () => {
  const reducer = (state: VideoStateType, action: mergeAction) => {
    switch (action.type) {
      case 'isControl':
        return { ...state, isControl: action.data }
      case 'quality':
        return { ...state, quality: action.data }
      default:
        return state;
    }
  };
  const [videoState, dispatch] = useReducer(reducer, initialState);
  return [videoState, dispatch];
}