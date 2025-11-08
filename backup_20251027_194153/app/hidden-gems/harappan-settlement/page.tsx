import { harappanSettlement } from "../data/harappan-settlement";
import HiddenGemTemplate from "../../components/HiddenGemTemplate";

export default function HarappanSettlementPage() {
  return <HiddenGemTemplate gem={harappanSettlement} />;
}

export async function generateMetadata() {
  return {
    title: `${harappanSettlement.title} - Hidden Gems | Kutch Travel`,
    description: harappanSettlement.sections[0]?.content || harappanSettlement.title,
  };
}