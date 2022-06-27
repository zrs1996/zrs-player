import React, {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useMemo,
  useImperativeHandle,
} from 'react';
import { createRoot } from 'react-dom/client';
import ZrsPlayer from '@/core/index';

const AppCompent = () => {

  return (
    <>
      <ZrsPlayer />
    </>
  );
};
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<AppCompent />);