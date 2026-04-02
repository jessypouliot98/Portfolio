import { SectionTitle } from "../components/SectionTitle";
import { Text, View } from "@react-pdf/renderer";
import { tw } from "../utils/tailwind";
import { StrengthCard } from "../components/StrengthCard";
import { Section } from "../components/Section";
import { CvTranslation } from "../translations/types";

export function PartStrengths({ t }: { t: CvTranslation }) {
  return (
    <Section>
      <SectionTitle>{t.strengths.title}</SectionTitle>
      <View style={tw("gap-2")}>
        {t.strengths.list.map(({ title, description }) => (
          <StrengthCard
            key={title}
            strength={title}
            Details={(
              <Text>{description}</Text>
            )}
          />
        ))}
      </View>
    </Section>
  )
}