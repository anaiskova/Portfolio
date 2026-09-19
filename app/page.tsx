import { Site } from "@/components/Site";
import { en } from "@/content/en";

/** Versão em inglês, no endereço principal (/). */
export default function Home() {
  return <Site cv={en} />;
}
