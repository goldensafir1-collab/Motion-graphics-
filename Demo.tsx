import { AbsoluteFill, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_NUM, FONT_TEXT } from "../fonts";

export const demoSchema = {
  title: "کد ← ویدیو",
  lines: ["هر صحنه یک کامپوننت React است", "هر فریم یک عکس", "خروجی: MP4"],
  accent: "#ffcc33",
};
type Props = typeof demoSchema;

const Title: React.FC<{ text: string; accent: string }> = ({ text, accent }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: f, fps, config: { damping: 12 } });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{ fontFamily: FONT_NUM, fontSize: 150, color: accent, transform: `scale(${s})`, direction: "rtl" }}>
        {text}
      </div>
    </AbsoluteFill>
  );
};

const Line: React.FC<{ text: string }> = ({ text }) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const y = interpolate(f, [0, 12], [40, 0], { extrapolateRight: "clamp" });
  return (
    <div style={{ opacity: o, transform: `translateY(${y}px)`, fontFamily: FONT_TEXT, fontSize: 64, color: "white",
      direction: "rtl", textAlign: "center", margin: 24 }}>
      {text}
    </div>
  );
};

export const Demo: React.FC<Props> = ({ title, lines, accent }) => {
  const f = useCurrentFrame();
  const bg = interpolate(f, [0, 240], [0, 60]);
  return (
    <AbsoluteFill style={{ background: `linear-gradient(${bg + 140}deg, #101828, #3b1d5e)` }}>
      <Sequence durationInFrames={80}><Title text={title} accent={accent} /></Sequence>
      <Sequence from={80}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          {lines.map((l, i) => (
            <Sequence key={i} from={i * 30} layout="none"><Line text={l} /></Sequence>
          ))}
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
