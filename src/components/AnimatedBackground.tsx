import React from 'react';
import {AbsoluteFill, interpolate, random, useCurrentFrame} from 'remotion';
import {palette} from '../utils/palette';

export const AnimatedBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const gradientShift = interpolate(frame, [0, 900], [0, 360]);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 20% 20%, ${palette.electricBlue}40, transparent 45%), radial-gradient(circle at 80% 70%, ${palette.neonGreen}33, transparent 35%), linear-gradient(${gradientShift}deg, ${palette.black}, #0B1430 60%, #071D2A)`,
        overflow: 'hidden',
      }}
    >
      {Array.from({length: 70}).map((_, i) => {
        const x = random(`p-${i}`) * 1080;
        const y = (random(`q-${i}`) * 1920 + frame * (0.8 + random(`s-${i}`))) % 1920;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: 2 + random(`w-${i}`) * 4,
              height: 2 + random(`h-${i}`) * 4,
              borderRadius: '50%',
              background: i % 3 === 0 ? palette.neonGreen : palette.electricBlue,
              boxShadow: `0 0 14px ${palette.white}`,
              opacity: 0.5,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
