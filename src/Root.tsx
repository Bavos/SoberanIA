import {Composition} from 'remotion';
import {SoberaniaVideo} from './scenes/SoberaniaVideo';

export const Root: React.FC = () => {
  return (
    <Composition
      id="SoberaniaVertical"
      component={SoberaniaVideo}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
