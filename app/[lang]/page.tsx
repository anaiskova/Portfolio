import { notFound } from "next/navigation";
import { Site } from "@/components/Site";
import { dictionaries, isLang } from "@/content";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Site cv={dictionaries[lang]} />;
}
