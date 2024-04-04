import Frame from "../DesktopWindows/AppFrame/Frame";
import Education from "./Education";
import Introduction from "./Introduction";
import SkillsAbillities from "./SkillsAbillities";

export default function AboutPage() {
  return (
    <Frame>
      <Introduction />
      <SkillsAbillities />
      <Education />
    </Frame>
  );
}
