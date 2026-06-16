import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for RankPredictor, including how we handle cookies, analytics, and advertising data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

function Section({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="space-y-3 border-2 border-slate-600 bg-slate-900/70 p-5 md:p-6">
      <h2 className="inline-block bg-cyan-300 px-2 py-1 text-xl font-bold uppercase tracking-wider text-slate-950">
        {title}
      </h2>
      <div className="space-y-3 font-bold leading-relaxed text-slate-200">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950/90 px-6 pb-14">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="border-4 border-slate-600 bg-slate-950/90 p-6 shadow-[8px_8px_0px_#64748b]">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
            RankPredictor
          </p>
          <h1 className="text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl font-bold leading-relaxed text-slate-200">
            This page explains what data RankPredictor uses, why cookies are
            involved, and how you can control optional tracking.
          </p>
        </header>

        <div className="space-y-6">
          <Section title="Overview">
            <p>
              RankPredictor provides exam rank calculators and related tools.
              The site uses essential functionality plus optional analytics and
              advertising services.
            </p>
            <p>
              For optional cookies and similar storage, you can choose whether
              to allow them through the consent modal shown on first visit.
            </p>
          </Section>

          <Section title="Data We Collect">
            <p>
              We do not ask for account registration on the public pages.
              Depending on how you use the site, we may process:
            </p>
            <ul className="space-y-2 border-2 border-slate-600 bg-slate-950/70 p-4">
              <li>• page views and basic usage metrics</li>
              <li>• browser and device signals needed for site operation</li>
              <li>• submitted inputs used by rank calculators</li>
              <li>• consent preferences stored locally in your browser</li>
            </ul>
          </Section>

          <Section title="Cookies & Local Storage">
            <p>
              Essential storage is used to keep the site working and to remember
              your consent choice. Optional cookies may be used for analytics or
              advertising if you approve them.
            </p>
            <p>
              You can reject optional cookies and still use the core
              calculators.
            </p>
          </Section>

          <Section title="Analytics & Advertising">
            <p>
              RankPredictor uses Google Analytics and Google AdSense. When you
              accept optional cookies, these services may set cookies or use
              similar technologies to measure traffic and serve ads.
            </p>
            <p>
              If you reject optional cookies, we keep those categories disabled
              unless a legal or technical requirement applies.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>
              Some pages load resources from Google and other external services.
              Their own privacy policies govern their processing. We recommend
              reviewing those policies if you want the details.
            </p>
          </Section>

          <Section title="Your Choices">
            <p>
              You can change your consent choice at any time using the cookie
              preferences control on the site. You can also clear browser data
              through your browser settings.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              For privacy questions, contact the RankPredictor team through the
              site or the contact details listed on the home page.
            </p>
            <p>
              Return to the{" "}
              <Link href="/" className="text-yellow-300 underline">
                home page
              </Link>
              .
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
