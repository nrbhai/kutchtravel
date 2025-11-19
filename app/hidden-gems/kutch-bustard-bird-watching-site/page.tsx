import { secretBirdingSite } from "../data/kutch-bustard-bird-watching-site";
import HiddenGemTemplate from "../../components/HiddenGemTemplate";

export default function KutchBustardBirdWatchingSitePage() {
  return <HiddenGemTemplate gem={secretBirdingSite} />;
}

export async function generateMetadata() {
  return {
    title: `${secretBirdingSite.title} - Hidden Gems | Kutch Travel`,
    description: secretBirdingSite.sections[0]?.content || secretBirdingSite.title,
  };
}
