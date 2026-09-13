import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy policy for ${site.legalName}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
        Legal
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-ink">
        Privacy policy
      </h1>
      <p className="mt-3 text-sm text-ink-subtle">
        Last updated: September 13, 2026 · {site.legalName}
      </p>

      <div className="mt-10 space-y-8 text-base leading-7 text-ink-muted">
        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Who we are
          </h2>
          <p className="mt-3">
            This website is operated by {site.legalName}, an Illinois limited
            liability company. This page describes how we handle information
            when you visit {site.url.replace("https://", "")} or email us.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            What this site collects
          </h2>
          <p className="mt-3">
            This is a marketing website. We do not ask you to create an
            account, and we do not sell products through this site. If you
            email us, we receive whatever you choose to send — typically your
            name, email address, and the contents of your message — so we can
            reply.
          </p>
          <p className="mt-3">
            Our hosting provider may keep standard server logs such as IP
            address, browser type, and pages requested. Those logs are used to
            operate and secure the site, not to build marketing profiles.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            How we use information
          </h2>
          <p className="mt-3">
            We use contact details you send us to respond to inquiries,
            discuss potential work, and keep a record of that conversation.
            We do not sell personal information. We do not share it except
            with service providers who help us operate email or hosting, or
            when the law requires it.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Cookies and analytics
          </h2>
          <p className="mt-3">
            This site does not set advertising cookies. If we later add a
            simple analytics tool, we will update this page to say so.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            How long we keep it
          </h2>
          <p className="mt-3">
            Email correspondence is kept as long as it is useful for the
            conversation or as required for legal or accounting reasons.
            Server logs are retained according to our host’s standard
            practice.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Your choices
          </h2>
          <p className="mt-3">
            You can email us to ask what we have, to correct it, or to ask us
            to delete it, subject to any legal duty to keep records. This
            stub policy will be expanded if our practices change.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Contact
          </h2>
          <p className="mt-3">
            Questions about this policy:{" "}
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
