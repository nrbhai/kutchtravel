import { secretBirdingSite } from "../data/secret-birding-site";
import HiddenGemTemplate from "../../components/HiddenGemTemplate";

export default function SecretBirdingSitePage() {
  return <HiddenGemTemplate gem={secretBirdingSite} />;
}

export async function generateMetadata() {
  return {
    title: `${secretBirdingSite.title} - Hidden Gems | Kutch Travel`,
    description: secretBirdingSite.sections[0]?.content || secretBirdingSite.title,
  };
}