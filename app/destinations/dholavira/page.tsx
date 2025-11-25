import DestinationTemplate from "@/app/components/DestinationTemplate";
import { dholavira } from "@/app/destinations/data/dholavira";

export const metadata = {
  title: dholavira.title,
  description: dholavira.sections[0].content,
};

export default function DholaviraPage() {
  return (
    <DestinationTemplate
      title={dholavira.title}
      description={
        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-amber-600 first-letter:mr-3 first-letter:float-left">
            {dholavira.sections[0].content}
          </p>
          <p>
            {dholavira.sections[1].content}
          </p>
          <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 my-8">
            <h3 className="text-xl font-bold text-amber-800 mb-2">Did You Know?</h3>
            <p className="text-amber-900">
              Dholavira is locally known as <strong>Kotada Timba</strong> (meaning "large fort"). It contains one of the world's earliest water conservation systems, with 16 reservoirs and elaborate channels.
            </p>
          </div>
          <p>
            The site is divided into three parts: the Citadel, the Middle Town, and the Lower Town. The Citadel, where the rulers lived, is protected by formidable stone fortifications. The most intriguing discovery is the "Signboard" containing ten large Indus script characters, which remains undeciphered to this day.
          </p>
        </div>
      }
      image={dholavira.image}
      facts={dholavira.facts}
      mapUrl={dholavira.mapUrl}
      gallery={dholavira.gallery}
    />
  );
}
