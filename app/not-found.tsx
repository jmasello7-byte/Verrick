import Link from "next/link";
import { CtaLink } from "@/components/cta-link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink">
        That page is not here
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-7 text-ink-muted">
        The link may be outdated, or the page may have moved. You can go back
        to the homepage or send a note if you were looking for something
        specific.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-base font-semibold text-white hover:bg-accent-hover"
        >
          Back to home
        </Link>
        <CtaLink variant="secondary" />
      </div>
    </div>
  );
}
