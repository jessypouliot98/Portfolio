import { CvTranslation } from "../translations/types";
import { SectionTitle } from "../components/SectionTitle";
import { View } from "@react-pdf/renderer";
import { tw } from "../utils/tailwind";
import { ExperienceCard } from "../components/ExperienceCard";
import { Section } from "../components/Section";
import { BulletList } from "../components/BulletList";

export type PartExperienceAProps = {
  t: CvTranslation;
}

export function PartExperienceA({ t }: PartExperienceAProps) {
  return (
    <Section>
      <SectionTitle>{t.experience.title}</SectionTitle>
      <View style={tw("gap-2")}>
        {t.experience.job.map((job, i) => (
          <ExperienceCard
            key={i}
            stack={job.stack}
            job={job.title}
            company={job.company}
            location={job.location}
            from={job.from}
            to={job.to}
            Details={(
              <BulletList
                content={job.contentB}
              />
            )}
          />
        ))}
      </View>
    </Section>
  )
}