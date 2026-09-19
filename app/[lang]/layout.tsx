import { HtmlLang } from "@/components/HtmlLang";
import { dictionaries, isLang } from "@/content";

/** Declara o idioma certo em /pt (o layout principal usa o inglês por defeito). */
export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      {isLang(lang) && <HtmlLang lang={dictionaries[lang].htmlLang} />}
      {children}
    </>
  );
}
