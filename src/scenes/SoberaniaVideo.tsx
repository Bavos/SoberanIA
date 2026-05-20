import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {scenes} from '../data/scenes';

const FRAMES_PER_SCENE = 90;

export const SoberaniaVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const sceneIndex = Math.min(
    scenes.length - 1,
    Math.floor(frame / FRAMES_PER_SCENE),
  );
  const scene = scenes[sceneIndex];
  const localFrame = frame % FRAMES_PER_SCENE;

  const opacity = interpolate(localFrame, [0, 12, 78, 89], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        background: '#030712',
        color: '#f8fafc',
        fontFamily: 'Inter, system-ui, sans-serif',
        padding: 80,
        justifyContent: 'space-between',
        opacity,
      }}
    >
      <div>
        <p style={{color: scene.accent, fontWeight: 700, letterSpacing: 4}}>
          {scene.subtitle}
        </p>
        <h1 style={{fontSize: 96, lineHeight: 1.05, margin: '20px 0'}}>{scene.title}</h1>
        <p style={{fontSize: 42, lineHeight: 1.3, maxWidth: 900}}>{scene.detail}</p>
      </div>

      <ul style={{fontSize: 44, lineHeight: 1.4, margin: 0, paddingLeft: 40}}>
        {scene.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <p
        style={{
          color: scene.accent,
          fontSize: 30,
          letterSpacing: 3,
          fontWeight: 700,
        }}
      >
        {scene.footer}
      </p>
    </AbsoluteFill>
  );
};
