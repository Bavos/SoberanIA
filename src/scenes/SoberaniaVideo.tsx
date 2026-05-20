import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
} from 'remotion';
import {AnimatedBackground} from '../components/AnimatedBackground';
import {FlowNodes} from '../components/FlowNodes';
import {SceneTransition} from '../transitions/SceneTransition';
import {palette} from '../utils/palette';

const scenes = [
  {
    title: 'SoberanIA',
    subtitle: 'IA GENERATIVA BRASILEIRA',
    detail: 'O FUTURO DA GESTÃO PÚBLICA',
    accent: palette.neonGreen,
  },
  {
    title: 'SOBERANIA DIGITAL',
    subtitle: 'Modelo Soberano 1',
    detail: 'Treinado em português e adaptado ao Brasil',
    accent: palette.electricBlue,
  },
  {
    title: '6 FERRAMENTAS',
    subtitle: 'PARA TRANSFORMAR',
    detail: 'A GESTÃO PÚBLICA',
    accent: palette.vibrantYellow,
  },
  {
    title: '1. GOV CHAT',
    subtitle: 'ATENDIMENTO INTELIGENTE',
    detail: 'AO CIDADÃO',
    accent: palette.neonGreen,
  },
  {
    title: '2. BO FÁCIL',
    subtitle: 'REGISTRO POR VOZ',
    detail: 'OU TEXTO',
    accent: palette.electricBlue,
  },
  {
    title: '3. SEDUC AI',
    subtitle: 'EDUCAÇÃO PERSONALIZADA',
    detail: 'COM IA',
    accent: '#A05DFF',
  },
  {
    title: '4. AGENTES SEI',
    subtitle: 'INTELIGÊNCIA PARA',
    detail: 'PROCESSOS ADMINISTRATIVOS',
    accent: '#38F6DB',
  },
  {
    title: '5. GERADOR DE TR',
    subtitle: 'TERMOS DE REFERÊNCIA',
    detail: 'EM SEGUNDOS',
    accent: '#FF9A00',
  },
  {
    title: '6. DEVKIT & APIs',
    subtitle: 'INTEGRE, CRIE',
    detail: 'TRANSFORME',
    accent: palette.neonGreen,
  },
  {
    title: 'SoberanIA',
    subtitle: 'O FUTURO DA IA PÚBLICA',
    detail: 'É BRASILEIRO',
    accent: palette.vibrantYellow,
  },
];

const textPalette = {
  pureWhite: '#FFFFFF',
  softYellow: '#FFD84D',
  iceWhite: '#F3F5F7',
  secondaryLight: '#EAEAEA',
  secondaryMuted: '#D9D9D9',
  secondarySoft: '#CFCFCF',
};

const FullFrameScene: React.FC<(typeof scenes)[number] & {index: number}> = ({title, subtitle, detail, accent, index}) => {
  const frame = useCurrentFrame();
  const tick = frame + index * 17;
  const hudShift = interpolate((tick % 120), [0, 120], [0, 1]);

  return (
    <AbsoluteFill>
      <AnimatedBackground />

      <div style={{position: 'absolute', inset: -120, background: `radial-gradient(circle at 50% 52%, ${accent}33, transparent 42%)`, filter: 'blur(12px)'}} />

      <FlowNodes />

      {Array.from({length: 26}).map((_, i) => {
        const y = ((i * 170 + tick * (1.2 + (i % 5) * 0.3)) % 2300) - 180;
        const x = (i * 89) % 1080;
        return <div key={i} style={{position: 'absolute', left: x, top: y, width: 2, height: 160, background: `${accent}66`, boxShadow: `0 0 22px ${accent}`}} />;
      })}

      <div style={{position: 'absolute', inset: 22, border: `1px solid ${accent}88`, boxShadow: `inset 0 0 60px ${accent}44`, borderRadius: 24}} />
      <div style={{position: 'absolute', left: 42, right: 42, top: 72, bottom: 72, border: `1px solid ${palette.electricBlue}55`, borderRadius: 18}} />

      <div style={{position: 'absolute', top: 90, left: 70, right: 70, textAlign: 'center'}}>
        <div style={{fontSize: 28, color: textPalette.softYellow, letterSpacing: 3, fontWeight: 800}}>{`${index * 3}s - ${index * 3 + 3}s`}</div>
        <h1 style={{fontSize: 118, lineHeight: 0.95, margin: '20px 0 0', color: textPalette.pureWhite, textTransform: 'uppercase', textShadow: '0 2px 10px rgba(0,0,0,0.75)'}}>
          {title === 'SoberanIA' ? (
            <>
              <span style={{color: textPalette.pureWhite}}>Soberan</span>
              <span style={{color: palette.neonGreen}}>IA</span>
            </>
          ) : (
            title
          )}
        </h1>
        <h2 style={{fontSize: 58, margin: '16px 0 0', color: textPalette.iceWhite, lineHeight: 1, textShadow: '0 2px 8px rgba(0,0,0,0.65)'}}>{subtitle}</h2>
      </div>

      <div style={{position: 'absolute', left: 90, right: 90, top: 540, height: 860, borderRadius: 44, background: 'linear-gradient(165deg, #061321DD, #070A12EE)', border: `2px solid ${accent}AA`, boxShadow: `0 0 80px ${accent}99, inset 0 0 45px ${accent}55`}}>
        <div style={{position: 'absolute', inset: 26, borderRadius: 30, border: `1px solid ${palette.white}33`}} />
        <div style={{position: 'absolute', left: 50, right: 50, top: 70, fontSize: 64, color: textPalette.secondaryLight, fontWeight: 800, textAlign: 'center', textShadow: '0 2px 8px rgba(0,0,0,0.7)'}}>{detail}</div>

        {Array.from({length: 6}).map((_, i) => (
          <div key={i} style={{position: 'absolute', left: 56, right: 56, top: 200 + i * 98, height: 72, borderRadius: 16, border: `1px solid ${accent}AA`, background: '#0B1220CC', boxShadow: `0 0 24px ${accent}55`}} />
        ))}

        <div style={{position: 'absolute', left: '50%', top: '50%', transform: `translate(-50%, -50%) scale(${1 + 0.04 * Math.sin(tick / 10)})`, width: 430, height: 430, borderRadius: '50%', border: `3px solid ${accent}`, boxShadow: `0 0 80px ${accent}`}} />
      </div>

      <div style={{position: 'absolute', left: 30, right: 30, bottom: 42, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16}}>
        {['TECNOLOGIA', 'AGILIDADE', 'IMPACTO'].map((item) => (
          <div key={item} style={{padding: '20px 14px', borderRadius: 14, border: `1px solid ${accent}AA`, textAlign: 'center', color: textPalette.secondaryMuted, fontSize: 32, fontWeight: 700, background: '#060D19CC', textShadow: '0 1px 4px rgba(0,0,0,0.7)'}}>{item}</div>
        ))}
      </div>

      <div style={{position: 'absolute', inset: 0, background: `linear-gradient(0deg, ${accent}22, transparent 18%, transparent 82%, ${palette.electricBlue}22)`, mixBlendMode: 'screen', opacity: 0.9}} />
      <div style={{position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(90deg, transparent 0 38px, ${palette.white}0F 38px 39px)`, opacity: 0.2 + 0.1 * hudShift}} />
    </AbsoluteFill>
  );
};

export const SoberaniaVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{fontFamily: 'Inter, sans-serif', backgroundColor: palette.black, overflow: 'hidden'}}>
      {scenes.map((scene, index) => (
        <Sequence key={scene.title + index} from={index * 90} durationInFrames={90}>
          <FullFrameScene {...scene} index={index} />
        </Sequence>
      ))}

      {[80, 170, 260, 350, 440, 530, 620, 710, 800].map((start) => (
        <SceneTransition key={start} start={start} end={start + 16} />
      ))}
    </AbsoluteFill>
  );
};
