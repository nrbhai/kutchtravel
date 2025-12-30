import { chadvaRakhal } from "../data/chadva-rakhal";
import HiddenGemTemplate from "../../components/HiddenGemTemplate";

export default function ChadvaRakhalPage() {
  return <HiddenGemTemplate gem={chadvaRakhal} />;
}

export async function generateMetadata() {
  return {
    title: `${chadvaRakhal.title} - Hidden Gems | Kutch Travel`,
    description: chadvaRakhal.sections[0]?.content || chadvaRakhal.title,
  };
}
