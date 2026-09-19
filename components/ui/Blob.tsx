import { blobShapes } from "./shapes";

type BlobProps = {
  shape?: number;
  className?: string;
};

/** Mancha de cor desfocada para criar atmosfera atrás do conteúdo. */
export function Blob({ shape = 0, className = "" }: BlobProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute blur-3xl ${className}`}
      style={{ borderRadius: blobShapes[shape % blobShapes.length] }}
    />
  );
}
