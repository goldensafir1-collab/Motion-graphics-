import "./index.css";
import "./fonts";
import { Composition } from "remotion";
import { Demo, demoSchema } from "./demo/Demo";

// Every video = one <Composition>. Add yours below (import it, give it an id, size, fps and length).
export const RemotionRoot: React.FC = () => (
  <>
    {/* Vertical reel 1080x1920, 30fps, 8 s */}
    <Composition id="Demo" component={Demo} width={1080} height={1920} fps={30} durationInFrames={240}
      defaultProps={demoSchema} />
    {/* Same scene, horizontal 1920x1080 (YouTube) */}
    <Composition id="Demo-Wide" component={Demo} width={1920} height={1080} fps={30} durationInFrames={240}
      defaultProps={demoSchema} />
    {/* your videos */}
  </>
);
