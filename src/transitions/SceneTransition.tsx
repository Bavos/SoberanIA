import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const SceneTransition: React.FC<{start: number; end: number}> = ({start, end}) => {
  const frame = useCurrentFrame();
  const opacity = frame < start ? 1 : frame > end ? 1 : interpolate(frame, [start, (start + end) / 2, end], [1, 0, 1]);
  return <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(130deg, #00A3FF44, #00F98D22, #000)', opacity, pointerEvents: 'none'}} />;
};
