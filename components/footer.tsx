import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm space-y-3">
          <Wordmark size="sm" />
          <p className="text-sm leading-6 text-ink-muted">{site.oneLiner}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-ink-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <span className="hidden text-line sm:inline" aria-hidden="true">
            ·
          </span>
          <Link href="/terms" className="hover:text-ink">
            Terms
          </Link>
          <span className="hidden text-line sm:inline" aria-hidden="true">
            ·
          </span>
          <a href={site.mailto} className="hover:text-ink">
            Contact
          </a>
          <span className="hidden text-line sm:inline" aria-hidden="true">
            ·
          </span>
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <span className="hidden text-line sm:inline" aria-hidden="true">
            ·
          </span>
          <p>{site.jurisdiction}</p>
        </div>
      </div>
    </footer>
  );
}
