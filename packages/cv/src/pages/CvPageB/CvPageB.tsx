import { Document, Link, Page, Text, View } from "@react-pdf/renderer";
import { tw } from "../../utils/tailwind";
import { translateVersion } from "../../translations/utils";
import { Translation } from "../../translations/types";
import { Section, SectionTitle } from "./components";

export type CvPageBProps = {
  t: Translation;
  version?: string
}

export function CvPageB({ t, version }: CvPageBProps) {
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
            <Section.Title>{translateVersion(t, "summary", version).title}</Section.Title>
          </Section>
          <Section>
            <Section.Title>{translateVersion(t, "experience", version).title}</Section.Title>
          </Section>
          <Section>
            <Section.Title>{translateVersion(t, "education", version).title}</Section.Title>
          </Section>
          <Section>
            <Section.Title>{translateVersion(t, "languages", version).title}</Section.Title>
          </Section>
          <Section>
            <Section.Title>{translateVersion(t, "strengths", version).title}</Section.Title>
          </Section>
        </View>
      </Page>
    </Document>
  );
}