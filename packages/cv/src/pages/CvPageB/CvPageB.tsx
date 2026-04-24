import { Document, Link, Page, Text, View } from "@react-pdf/renderer";
import { tw } from "../../utils/tailwind";
import { translateVersion } from "../../translations/utils";
import { BaseTranslation } from "../../translations/types";
import { Section } from "./components";
import { BulletList } from "../../components/BulletList";

export type CvPageBProps = {
  t: BaseTranslation;
  version?: string
}

export function CvPageB({ t, version }: CvPageBProps) {
  const summary = translateVersion(t, "summary", version);
  const experience = translateVersion(t, "experience", version);
  const education = translateVersion(t, "education", version);
  const languages = translateVersion(t, "languages", version);
  return (
    <Document>
      <Page
        size="LETTER"
        style={tw("font-sans text-base leading-tight")}
      >
        <View style={tw("bg-gray-900 p-4 gap-2 text-white flex-col items-center justify-center")}>
          <View style={tw("flex-col items-center")}>
            <Text style={tw("text-3xl leading-tight uppercase font-extrabold")}>{translateVersion(t, "title", version)}</Text>
            <Text style={tw("text-xl leading-tight uppercase font-light text-blue-400")}>{translateVersion(t, "subtitle", version)}</Text>
          </View>
          <View style={tw("w-full flex-row justify-center gap-2")}>
            {translateVersion(t, "contact", version).items.map((contact) => (
              <View key={contact.label} style={tw("text-sm flex-col text-white p-2 bg-gray-800 rounded")}>
                <Text style={tw("text-blue-400")}>{t.contact.type[contact.type]}</Text>
                <Link
                  href={contact.url}
                  style={tw("text-white")}
                >
                  {contact.label}
                </Link>
              </View>
            ))}
          </View>
        </View>
        <View style={tw("p-4 gap-4 flex-col justify-center")}>
          <Section>
            <Section.Title>{summary.title}</Section.Title>
            <Text style={tw("text-sm mx-auto text-justify")}>{summary.content}</Text>
          </Section>
          <Section>
            <Section.Title>{experience.title}</Section.Title>
            <View>
              {experience.items.map((item, i) => (
                <View key={i} style={tw("flex-row gap-2")}>
                  <View style={tw("w-1/3 py-2 flex-col gap-1 text-right")}>
                    <Text style={tw("text-xs")}>{[item.from, item.to].join(" - ")}</Text>
                    <Text style={tw("text-xs")}>{item.location}</Text>
                    <Text style={tw("text-xs")}>{summary.locationType[item.locationType]}</Text>
                  </View>
                  <View style={tw("w-px h-full bg-gray-200")}/>
                  <View style={tw("w-full py-2 gap-1")}>
                    <Text style={tw("font-medium")}>{item.title}</Text>
                    <Text style={tw("text-xs leading-tight font-light text-blue-700")}>{item.company}</Text>
                    <View style={tw("text-xs leading-tight")}>
                      <BulletList content={item.content}/>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </Section>
          <Section>
            <Section.Title>{education.title}</Section.Title>
            {education.items.map((item) => (
              <View key={item.certification}>
                <Text>{item.school}</Text>
                <Text>{item.certification}</Text>
                <Text>{item.completedOn}</Text>
                <BulletList content={item.content} />
              </View>
            ))}
          </Section>
          <Section>
            <Section.Title>{languages.title}</Section.Title>
            <View style={tw("flex-col gap-1 w-1/4")}>
              {languages.items.map((item) => (
                <View key={item.label} style={tw("flex-row gap-1 px-2 py-1 rounded bg-gray-100 justify-between")}>
                  <Text style={tw("font-medium")}>{item.label}</Text>
                  <Text style={tw("text-blue-600")}>{item.capacity}</Text>
                </View>
              ))}
            </View>
          </Section>
          <Section>
            <Section.Title>{translateVersion(t, "strengths", version).title}</Section.Title>
            
          </Section>
        </View>
      </Page>
    </Document>
  );
}