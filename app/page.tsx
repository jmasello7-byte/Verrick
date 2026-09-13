import { CtaLink } from "@/components/cta-link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(4,120,87,0.10),transparent_42%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            {site.legalName}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {site.oneLiner}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted sm:text-xl">
            {site.elevator}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink />
            <a
              href="#how-we-work"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-semibold text-ink-muted hover:text-ink"
            >
              See how we work
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        aria-labelledby="services-heading"
        className="border-t border-line"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2
              id="services-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Three ways we can help
            </h2>
            <p className="mt-4 text-lg leading-7 text-ink-muted">
              Clear work. No extra layers. Pick the problem that is costing you
              the most time.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {site.pillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className="rounded-2xl border border-line bg-panel p-6 shadow-[0_1px_0_rgba(20,32,27,0.04)] sm:p-8"
              >
                <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-ink-muted">
                  {pillar.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="who-its-for"
        aria-labelledby="who-heading"
        className="border-t border-line bg-panel"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2
              id="who-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              Who it’s for
            </h2>
            <p className="mt-4 text-lg leading-7 text-ink-muted">
              Businesses that need a practical partner — not a louder pitch.
            </p>
          </div>
          <ul className="space-y-4">
            <li className="rounded-2xl border border-line bg-canvas px-5 py-5">
              <p className="font-semibold text-ink">
                Operators tired of repeating the same work
              </p>
              <p className="mt-2 leading-7 text-ink-muted">
                If the same tasks keep landing on the same people, we look for
                the parts that can be automated without taking judgment away
                from the humans who should keep it.
              </p>
            </li>
            <li className="rounded-2xl border border-line bg-canvas px-5 py-5">
              <p className="font-semibold text-ink">
                Teams held together by workarounds
              </p>
              <p className="mt-2 leading-7 text-ink-muted">
                Spreadsheets, inboxes, and one-off tools can carry a business
                only so far. Custom software is for when those patches start
                costing more than they save.
              </p>
            </li>
            <li className="rounded-2xl border border-line bg-canvas px-5 py-5">
              <p className="font-semibold text-ink">
                Companies that need a clearer website
              </p>
              <p className="mt-2 leading-7 text-ink-muted">
                If a visitor cannot tell what you do or what to do next, the
                site is not doing its job. We build pages that explain you
                plainly and make the next step obvious.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="how-we-work"
        aria-labelledby="process-heading"
        className="border-t border-line"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <h2
              id="process-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            >
              How we work
            </h2>
            <p className="mt-4 text-lg leading-7 text-ink-muted">
              Discover → Scope → Build → Launch → Iterate. A short path from
              the problem to something you can use.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {site.process.map((step, index) => (
              <li
                key={step.name}
                className="relative rounded-2xl border border-line bg-panel p-5"
              >
                <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-ink">
                  {step.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="cta-heading"
        className="border-t border-line bg-ink text-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2
            id="cta-heading"
            className="max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Ready to talk through the work?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
            Send a short note about what is getting in the way. We will reply
            and, if it is a fit, book a discovery call.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaLink variant="inverse" />
            <a
              href={site.mailto}
              className="text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
