import { mirrorLake } from "../data/mirror-lake";
import HiddenGemTemplate from "../../components/HiddenGemTemplate";

export default function MirrorLakePage() {
  return <HiddenGemTemplate gem={mirrorLake} />;
}

export async function generateMetadata() {
  return {
    title: `${mirrorLake.title} - Hidden Gems | Kutch Travel`,
    description: mirrorLake.sections[0]?.content || mirrorLake.title,
  };
}