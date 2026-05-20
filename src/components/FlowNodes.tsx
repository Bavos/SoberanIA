import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {palette} from '../utils/palette';

export const FlowNodes: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <>
      {[160, 320, 480, 700, 880].map((x, idx) => {
        const y = 420 + idx * 220;
        const pulse = interpolate((frame + idx * 6) % 60, [0, 30, 60], [0.5, 1, 0.5]);
        return <div key={x} style={{position: 'absolute', left: x, top: y, width: 26, height: 26, borderRadius: 13, background: palette.vibrantYellow, boxShadow: `0 0 ${30 * pulse}px ${palette.vibrantYellow}`}} />;
      })}
    </>
  );
};
