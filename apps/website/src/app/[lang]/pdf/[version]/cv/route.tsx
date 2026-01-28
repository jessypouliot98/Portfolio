import ReactPDF from "@react-pdf/renderer";
import { NextRequest } from "next/server";
import { CvPageA } from "@repo/cv/src/pages/CvPageA/CvPageA";
import { CvPageB } from "@repo/cv/src/pages/CvPageB/CvPageB";
import en from "@repo/cv/src/translations/en.json"
import fr from "@repo/cv/src/translations/fr.json"
import { registerFonts } from "@repo/cv/src/utils/registerFonts";

const VERSIONS = {
  a: CvPageA,
  b: CvPageB
}

type Params = {
  lang: string;
  version: string;
}

registerFonts();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<Params> }
) {
  const { lang, version } = await params;
  let contentDisposition: string | undefined;
  if (request.nextUrl.searchParams.get("download") === "1") {
    contentDisposition = `attachment; filename="cv_${lang}_jessypouliot.pdf"`
  }

  const CvPage = version in VERSIONS ? VERSIONS[version as keyof typeof VERSIONS] : VERSIONS.a;
  const t = lang === "fr" ? fr : en;

  const pdfStream = await ReactPDF.renderToStream(<CvPage t={t} />);
  return new Response(pdfStream as unknown as ReadableStream<unknown>, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": contentDisposition ?? "",
    }
  });
}