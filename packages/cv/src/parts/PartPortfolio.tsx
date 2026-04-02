import { CvTranslation } from "../translations/types";
import { SectionTitle } from "../components/SectionTitle";
import { View } from "@react-pdf/renderer";
import { tw } from "../utils/tailwind";
import { Section } from "../components/Section";
import { BulletList } from "../components/BulletList";
import { PortfolioCard } from "../components/PortfolioCard";

export type PartPortfolioProps = {
  t: CvTranslation;
}

export function PartPortfolio({ t }: PartPortfolioProps) {
  return (
    <Section>
      <SectionTitle>{t.portfolio.title}</SectionTitle>
      <View style={tw("gap-2")}>
        {t.portfolio.project.map((project, i) => (
          <PortfolioCard
            key={i}
            title={project.title}
            stackType={project.stackType}
            stack={project.stack}
            Details={(
              <BulletList
                content={project.content}
              />
            )}
          />
        ))}
      </View>
    </Section>
  )
}