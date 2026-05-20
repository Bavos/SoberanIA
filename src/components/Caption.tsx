import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {palette} from '../utils/palette';

export const Caption: React.FC<{title: string; subtitle?: string; start: number}> = ({title, subtitle, start}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = spring({frame: frame - start, fps, durationInFrames: 20});
  const y = interpolate(progress, [0, 1], [30, 0]);

  return (
    <div style={{position: 'absolute', left: 80, right: 80, bottom: 180, transform: `translateY(${y}px)`}}>
      <h1 style={{fontFamily: 'Inter, sans-serif', fontSize: 88, lineHeight: 1, margin: 0, color: palette.white, letterSpacing: -1.5, textShadow: `0 0 40px ${palette.electricBlue}`}}>{title}</h1>
      {subtitle ? <p style={{fontFamily: 'Inter, sans-serif', fontSize: 44, marginTop: 16, color: palette.neonGreen, fontWeight: 700}}>{subtitle}</p> : null}
    </div>
  );
};
