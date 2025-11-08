import { flamingoCaves } from "../data/flamingo-caves";
import HiddenGemTemplate from "../../components/HiddenGemTemplate";

export default function FlamingoCavesPage() {
  return <HiddenGemTemplate gem={flamingoCaves} />;
}

export async function generateMetadata() {
  return {
    title: `${flamingoCaves.title} - Hidden Gems | Kutch Travel`,
    description: flamingoCaves.sections[0]?.content || flamingoCaves.title,
  };
}