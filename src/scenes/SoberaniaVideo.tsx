import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {AnimatedBackground} from '../components/AnimatedBackground';
import {Caption} from '../components/Caption';
import {FlowNodes} from '../components/FlowNodes';
import {getCameraTransform} from '../animations/camera';
import {SceneTransition} from '../transitions/SceneTransition';
import {palette} from '../utils/palette';

const SceneCard: React.FC<{label: string; detail: string; accent?: string}> = ({label, detail, accent = palette.electricBlue}) => (
  <div style={{width: 860, margin: '0 auto', marginTop: 320, padding: '42px 48px', borderRadius: 32, background: '#0A162DCC', border: `1px solid ${accent}88`, boxShadow: `0 0 80px ${accent}55`}}>
    <div style={{fontSize: 62, color: palette.white, fontWeight: 800, fontFamily: 'Inter, sans-serif'}}>{label}</div>
    <div style={{fontSize: 36, color: palette.neonGreen, marginTop: 14, fontFamily: 'Inter, sans-serif'}}>{detail}</div>
  </div>
);

export const SoberaniaVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const camera = getCameraTransform(frame, fps);

  return (
    <AbsoluteFill style={{fontFamily: 'Inter, sans-serif', ...camera}}>
      <AnimatedBackground />
      <FlowNodes />

      <Sequence from={0} durationInFrames={120}>
        <Caption title="SoberanIA" subtitle="IA Generativa Brasileira" start={0} />
      </Sequence>
      <Sequence from={120} durationInFrames={120}><SceneCard label="Modelo treinado em português" detail="Adaptado ao contexto brasileiro" /></Sequence>
      <Sequence from={240} durationInFrames={120}><SceneCard label="Gov Chat" detail="Atendimento inteligente ao cidadão" accent={palette.neonGreen} /></Sequence>
      <Sequence from={360} durationInFrames={90}><SceneCard label="BO Fácil" detail="Boletins por voz ou texto" accent={palette.vibrantYellow} /></Sequence>
      <Sequence from={450} durationInFrames={90}><SceneCard label="Seduc AI" detail="Ensino personalizado" /></Sequence>
      <Sequence from={540} durationInFrames={90}><SceneCard label="Agentes SEI" detail="Triagem inteligente" accent={palette.neonGreen} /></Sequence>
      <Sequence from={630} durationInFrames={90}><SceneCard label="Gerador de TR" detail="Contratações públicas mais rápidas" /></Sequence>
      <Sequence from={720} durationInFrames={90}><SceneCard label="DevKit & APIs" detail="Integre novas soluções" accent={palette.vibrantYellow} /></Sequence>
      <Sequence from={810} durationInFrames={90}><Caption title="SoberanIA" subtitle="O futuro da IA pública brasileira" start={810} /></Sequence>

      <div style={{position: 'absolute', bottom: 90, width: '100%', textAlign: 'center', color: palette.white, fontSize: 30, opacity: 0.9}}>Soberania digital para o Brasil</div>
      <SceneTransition start={110} end={130} />
      <SceneTransition start={230} end={250} />
      <SceneTransition start={350} end={370} />
      <SceneTransition start={440} end={460} />
      <SceneTransition start={530} end={550} />
      <SceneTransition start={620} end={640} />
      <SceneTransition start={710} end={730} />
      <SceneTransition start={800} end={820} />
    </AbsoluteFill>
  );
};
