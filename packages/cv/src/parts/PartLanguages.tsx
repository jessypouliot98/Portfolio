import { CvTranslation } from "../translations/types";
import { SectionTitle } from "../components/SectionTitle";
import { View } from "@react-pdf/renderer";
import { LanguageCard } from "../components/LanguageCard";
import { Section } from "../components/Section";
import { tw } from "../utils/tailwind";

export function PartLanguages({ t }: { t: CvTranslation }) {
  return (
    <Section>
      <SectionTitle>{t.languages.title}</SectionTitle>
      <View style={tw("gap-2")}>
        {t.languages.list.map(({ language, capacity }) => (
          <LanguageCard
            key={language}
            language={language}
            capacity={capacity}
          />
        ))}
      </View>
    </Section>
  )
}