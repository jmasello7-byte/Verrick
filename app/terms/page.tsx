import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for ${site.legalName}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
        Legal
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink">
        Terms of use
      </h1>
      <p className="mt-3 text-sm text-ink-subtle">
        Last updated: September 13, 2026 · {site.legalName}
      </p>

      <div className="mt-10 space-y-8 text-base leading-7 text-ink-muted">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Using this site
          </h2>
          <p className="mt-3">
            These terms apply to {site.url.replace("https://", "")}, operated
            by {site.legalName} ({site.jurisdiction}). By using the site, you
            agree to them. If you do not agree, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            What this site is
          </h2>
          <p className="mt-3">
            This website describes services offered by {site.legalName}. It is
            informational. Nothing on the site is a binding offer, a promise
            of results, legal advice, or a substitute for a written agreement.
            Project work, if any, is scoped separately in writing.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Acceptable use
          </h2>
          <p className="mt-3">
            Do not misuse the site. That includes attempting to disrupt it,
            scrape it in a way that burdens the service, or use its content
            to impersonate {site.legalName} or confuse this company with
            similarly named businesses.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Intellectual property
          </h2>
          <p className="mt-3">
            The name Verrick AI, the site design, and the text on these pages
            belong to {site.legalName} unless otherwise noted. You may not
            copy them for commercial use without permission.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Disclaimer
          </h2>
          <p className="mt-3">
            The site is provided “as is.” We make no warranty that it will be
            uninterrupted or error-free. To the fullest extent allowed by
            law, {site.legalName} is not liable for damages arising from your
            use of the site. Some jurisdictions do not allow certain
            limitations; in those cases, our liability is limited as much as
            the law permits.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Governing law
          </h2>
          <p className="mt-3">
            These terms are governed by the laws of the State of Illinois,
            without regard to conflict-of-law rules. Any dispute related to
            this site will be brought in courts located in Illinois, unless
            applicable law requires otherwise.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Changes
          </h2>
          <p className="mt-3">
            We may update these stub terms as the business or the site
            changes. The “last updated” date at the top will change when we
            do. Continued use after an update means you accept the revised
            terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Contact
          </h2>
          <p className="mt-3">
            Questions about these terms:{" "}
            <a
              href={site.mailto}
              className="font-semibold text-accent underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
            . {site.legalName}, {site.jurisdiction}.
          </p>
        </section>
      </div>
    </article>
  );
}
