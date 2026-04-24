import ReactPDF from "@react-pdf/renderer";
import { NextRequest } from "next/server";
import { en } from "@repo/cv/src/translations/en";
import { CvPageB } from "@repo/cv/src/pages/CvPageB/CvPageB";
import { registerFonts } from "@repo/cv/src/utils/registerFonts";
import { translateVersion } from "@repo/cv/src/translations/utils";

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
  if (lang !== "en") {
    return new Response("Not Found", { status: 404 });
  }
  const t = en
  const fileName = translateVersion(t, "fileName", version);
  let contentDisposition: string | undefined;
  if (request.nextUrl.searchParams.get("download") === "1") {
    contentDisposition = `attachment; filename="${fileName}.pdf"`
  }


  const pdfStream = await ReactPDF.renderToStream(
    <CvPageB
      t={t}
      version={version}
    />
  );
  return new Response(pdfStream as unknown as ReadableStream<unknown>, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": contentDisposition ?? "",
    }
  });
}