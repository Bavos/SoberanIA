import {interpolate, spring} from 'remotion';

export const getCameraTransform = (frame: number, fps: number) => {
  const drift = interpolate(frame, [0, 900], [1.08, 1], {extrapolateRight: 'clamp'});
  const sway = interpolate(frame, [0, 900], [-30, 20]);
  const introPop = spring({frame, fps, durationInFrames: 36, config: {damping: 12}});

  return {
    transform: `translateY(${sway}px) scale(${drift + introPop * 0.04})`,
  };
};
