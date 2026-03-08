const heroHighlights = [
  {
    title: "Universal Fit",
    body: "Adaptive side-panel flexibility",
  },
  {
    title: "Precision Core",
    body: "Targeted day-use absorbency",
  },
  {
    title: "Skin Comfort",
    body: "Breathable, calmer feel",
  },
  {
    title: "Reduced Plastic",
    body: "Designed to use less material",
  },
];

const philosophyCards = [
  {
    title: "Precision-zoned core",
    body: "Absorbency is concentrated where it is actually needed, helping reduce unnecessary bulk while supporting dependable day-use performance.",
  },
  {
    title: "Universal Fit – Medium",
    body: "Flexible side panels and an adaptive fit range are designed to support a broad range of adult body shapes without overcomplicating early product selection.",
  },
  {
    title: "Calm, discreet presentation",
    body: "Soft tones, quiet packaging, and clear information create a more respectful personal care experience from the very first opening.",
  },
  {
    title: "Reduced-plastic intention",
    body: "Material use is being refined carefully to lower plastic content while maintaining structure, comfort, and performance expectations.",
  },
];

const consumerAudienceCards = [
  {
    title: "Post-surgery recovery",
    body: "For adults seeking a more discreet and dependable recovery essential during temporary transitions.",
  },
  {
    title: "Older adults at home",
    body: "For daily comfort, gentle support, and dignity-led design that feels less clinical in everyday life.",
  },
  {
    title: "Caregivers choosing thoughtfully",
    body: "For people looking for practical performance, a calmer experience, and more responsible material choices.",
  },
];

const clinicFeatureCards = [
  "Targeted absorbency through precision core placement",
  "Breathable design focused on calmer skin comfort",
  "Structured feedback process with limited discounted trial allocation",
  "Suitable for post-surgery recovery and older adults needing day-use support",
];

const packagingFeatureItems = [
  "Precision-zoned absorbent core",
  "Breathable outer layer",
  "Adaptive side panels",
  "Reduced-plastic design",
];

const technicalSpecCards = [
  {
    title: "Core Structure",
    items: [
      "Fluff pulp + SAP absorbent core",
      "Precision-zoned SAP distribution",
      "Target absorbency: day-use level",
      "Reduced bulk profile",
    ],
  },
  {
    title: "Top Sheet",
    items: [
      "Soft breathable nonwoven",
      "Skin-friendly surface feel",
      "Fast liquid acquisition layer",
      "Low rewet performance target",
    ],
  },
  {
    title: "Back Sheet",
    items: [
      "Breathable PE film",
      "Soft neutral outer colour",
      "Reduced gauge plastic film",
      "Target: 15–20% plastic reduction",
    ],
  },
  {
    title: "Fit & Structure",
    items: [
      "Flexible elastic side panels",
      "Universal Medium fit range",
      "Secure leg cuffs",
      "Comfort waistband tension",
    ],
  },
];

const roadmapPhases = [
  {
    eyebrow: "Phase 1",
    title: "Founding Edition",
    items: [
      "Size: Universal Fit – Medium",
      "Product: Recovery Brief",
      "Use case: post-surgery & daily reassurance",
      "Production: 5,000–10,000 units pilot",
    ],
  },
  {
    eyebrow: "Phase 2",
    title: "Expanded Fit",
    items: [
      "Add Size: Large",
      "Refined fit ranges",
      "Improved packaging",
      "Higher production volumes",
    ],
  },
  {
    eyebrow: "Phase 3",
    title: "Product Extensions",
    items: [
      "Night / higher absorbency version",
      "Additional size options",
      "Colour or eco print editions",
      "Subscription packaging options",
    ],
  },
];


const trustPoints = [
  "Performance-engineered recovery brief",
  "Designed for calm, discreet everyday use",
  "EU manufacturing direction with Poland shortlisted",
  "Structured for consumer and clinical early access",
];

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body: string;
  className?: string;
};

type InfoCardProps = {
  title: string;
  body: string;
  className?: string;
};

type BulletListCardProps = {
  title: string;
  items: string[];
  className?: string;
};

const faqs = [
  {
    question: "Who is Serenity designed for?",
    answer:
      "Serenity is being designed for post-surgery recovery, older adults seeking discreet daily reassurance, and caregivers looking for a calmer, more considered personal care option.",
  },
  {
    question: "What makes the product different?",
    answer:
      "The focus is on discreet performance, breathable comfort, adaptive fit, and a more thoughtful use of materials rather than bulky, clinical presentation.",
  },
  {
    question: "What stage is the product at?",
    answer:
      "Serenity is currently preparing for a Founding Edition pilot and structured early access period for both consumers and selected clinical recovery partners.",
  },
];

function SectionHeader({ eyebrow, title, body, className = "max-w-3xl mb-10" }: SectionHeaderProps) {
  return (
    <div className={className}>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-stone-600">{body}</p>
    </div>
  );
}

function InfoCard({ title, body, className = "rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm" }: InfoCardProps) {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-600">{body}</p>
    </div>
  );
}

function BulletListCard({ title, items, className = "rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm" }: BulletListCardProps) {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-stone-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-stone-50 to-stone-100">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-1.5 text-sm tracking-wide text-stone-600 shadow-sm">
              Founding Access Programme · Clinical & Consumer Early Release
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Discreet performance essentials, thoughtfully engineered for recovery.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              A premium recovery brief designed to support comfort, confidence, and dignity during physical transitions — with adaptive fit, targeted absorbency, and a calmer experience for both everyday users and clinical recovery settings.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#consumer"
                className="rounded-2xl bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Consumer early access
              </a>
              <a
                href="#clinic"
                className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-center text-sm font-medium text-stone-800 shadow-sm transition hover:bg-stone-100"
              >
                Clinical trial partners
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 text-sm text-stone-600 sm:grid-cols-4">
              {heroHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                  <p className="font-medium text-stone-900">{item.title}</p>
                  <p className="mt-1">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/50">
              <div className="rounded-[1.5rem] bg-stone-100 p-8">
                <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-8">
                  <div className="mx-auto max-w-sm">
                    <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-stone-500">
                      <span>Founding Edition</span>
                      <span>Universal Fit – Medium</span>
                    </div>
                    <div className="rounded-[1.75rem] border border-stone-200 bg-white px-8 py-12 text-center shadow-sm">
                      <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-stone-200" />
                      <div className="text-center">
                        <p className="text-xs uppercase tracking-[0.35em] text-stone-400">Serenity</p>
                        <p className="mt-2 text-sm font-medium text-stone-600">Confidence, engineered.</p>
                      </div>
                      <h2 className="mt-3 text-2xl font-semibold text-stone-900">Recovery Brief</h2>
                      <p className="mt-4 text-sm leading-6 text-stone-600">
                        Discreet confidence, thoughtfully designed for recovery, comfort, and dependable daytime support.
                      </p>
                      <div className="mt-6 grid grid-cols-2 gap-3 text-left text-xs text-stone-600">
                        <div className="rounded-xl bg-stone-50 p-3">Breathable outer layer</div>
                        <div className="rounded-xl bg-stone-50 p-3">Skin-conscious feel</div>
                        <div className="rounded-xl bg-stone-50 p-3">Reduced-plastic design</div>
                        <div className="rounded-xl bg-stone-50 p-3">Adaptive side panels</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductPhilosophySection() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Product philosophy"
        title="Designed to feel personal, not clinical."
        body="We are building a calmer kind of product experience — one that prioritises discreet design, dependable performance, and a more thoughtful use of materials for both home use and recovery-focused care settings."
        className="mb-10 max-w-2xl"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {philosophyCards.map((item) => (
          <InfoCard key={item.title} title={item.title} body={item.body} />
        ))}
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div id="consumer" className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-7 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">For consumers & caregivers</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
              Created for recovery, transition, and daily reassurance.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Designed for adults in post-surgery recovery, older adults at home, and caregivers seeking a calmer, more considered personal care experience.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {consumerAudienceCards.map((item) => (
                <InfoCard
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  className="rounded-[1.25rem] bg-white p-5"
                />
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-stone-200 bg-white p-5">
              <p className="text-sm font-medium text-stone-900">Founding Access Programme</p>
              <ul className="mt-3 space-y-3 text-sm text-stone-600">
                <li>• Priority access to the first production batch</li>
                <li>• Founding Edition pricing in exchange for structured feedback</li>
                <li>• Opportunity to help refine fit, comfort, and overall experience</li>
              </ul>
            </div>
          </div>

          <div id="clinic" className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">For clinics & recovery partners</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
              A performance-engineered recovery product for structured early trial.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              We are inviting a small number of recovery-focused clinics and specialist partners to participate in a limited trial programme centred on comfort, absorbency performance, fit stability, and real-world recovery use.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {clinicFeatureCards.map((item) => (
                <div key={item} className="rounded-[1.25rem] bg-stone-50 p-5 text-sm leading-7 text-stone-700">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
              <p className="text-sm font-medium text-stone-900">Clinical partner programme includes</p>
              <ul className="mt-3 space-y-3 text-sm text-stone-600">
                <li>• Limited discounted trial allocation</li>
                <li>• Structured performance and comfort reporting</li>
                <li>• Early access to product refinement updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-stone-200 bg-white/70">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-6 text-sm text-stone-600 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {trustPoints.map((point) => (
          <div key={point} className="rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-sm">
            {point}
          </div>
        ))}
      </div>
    </section>
  );
}

function PackagingSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Packaging concept"
        title="Serenity Founding Edition box"
        body="A calm, premium box designed to sit comfortably in both a clinic and a home. The layout avoids bright medical styling and instead uses understated wellness cues."
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="flex justify-center">
          <div className="rounded-3xl bg-stone-200 p-8 shadow-inner">
            <div className="flex h-80 w-64 flex-col items-center justify-between rounded-2xl bg-[#E8E5E0] p-8 shadow-xl">
              <div className="text-center">
                <div className="mx-auto mb-4 h-8 w-5 rounded-full bg-[#8FAF9A]" />
                <h3 className="text-2xl font-semibold tracking-tight text-[#2F3432]">Serenity</h3>
                <p className="mt-1 text-xs text-stone-600">Confidence, engineered.</p>
              </div>

              <div className="text-center">
                <p className="text-sm font-medium text-stone-700">Recovery Brief</p>
                <p className="text-xs text-stone-500">Founding Edition</p>
                <p className="text-xs text-stone-500">Universal Fit — Medium</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] text-stone-600">
                <div className="rounded-md bg-white px-2 py-1">Breathable</div>
                <div className="rounded-md bg-white px-2 py-1">Soft feel</div>
                <div className="rounded-md bg-white px-2 py-1">Reduced plastic</div>
                <div className="rounded-md bg-white px-2 py-1">Adaptive fit</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <InfoCard
            title="Colour system"
            body="Warm stone packaging with sage accents creates a fresher, calmer look. Mineral-grey typography replaces harsh black for a more premium tone."
            className="rounded-2xl border border-stone-200 bg-white p-6"
          />
          <InfoCard
            title="Shelf presence"
            body="The minimalist front panel helps Serenity stand apart from bright, busy medical packaging by signalling a more considered personal care experience."
            className="rounded-2xl border border-stone-200 bg-white p-6"
          />
          <InfoCard
            title="Premium cues"
            body="Large spacing, restrained iconography, and quiet language create a look closer to premium wellness than traditional incontinence packaging."
            className="rounded-2xl border border-stone-200 bg-white p-6"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <BulletListCard
          title="Front panel"
          items={[
            "Serenity logo",
            "Confidence, engineered.",
            "Recovery Brief",
            "Founding Edition",
            "Universal Fit — Medium",
          ]}
        />
        <BulletListCard title="Side panel" items={packagingFeatureItems} />
        <InfoCard
          title="Back panel"
          body="Serenity is designed for recovery, reassurance, and everyday dignity. Thoughtfully engineered to provide dependable support while maintaining comfort and discretion."
        />
      </div>
    </section>
  );
}

function TechnicalSpecSection() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Technical specification"
          title="Serenity Recovery Brief – Pilot Production Specification"
          body="An early production brief focused on dependable daytime absorbency, breathable comfort, and reduced material use while maintaining structure and discretion."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {technicalSpecCards.map((card) => (
            <BulletListCard key={card.title} title={card.title} items={card.items} />
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-stone-200 bg-stone-50 p-8">
          <h3 className="text-xl font-semibold text-stone-900">Pilot Production Targets</h3>
          <div className="mt-4 grid gap-4 text-sm text-stone-700 sm:grid-cols-2">
            <div>Initial pilot quantity: 5,000 – 10,000 units</div>
            <div>Launch size: Universal Fit – Medium</div>
            <div>Target plastic reduction: 15–20%</div>
            <div>Manufacturing region: EU (Poland)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Product architecture"
        title="Serenity product size roadmap"
        body="A simplified first launch that expands only when demand and fit feedback justify it. This keeps the brand operationally calm while protecting margin and clarity."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {roadmapPhases.map((phase) => (
          <div key={phase.title} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">{phase.eyebrow}</p>
            <h3 className="mt-3 text-lg font-semibold text-stone-900">{phase.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[1.75rem] border border-stone-200 bg-stone-50 p-8">
        <h3 className="text-xl font-semibold text-stone-900">Architecture strategy</h3>
        <p className="mt-4 text-sm text-stone-700">
          Starting with a single universal size reduces manufacturing complexity, speeds up validation, and helps Serenity prove performance before broadening the line.
        </p>
      </div>
    </section>
  );
}

function FounderNoteSection() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Why Serenity exists</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          Built for a calmer experience in recovery and everyday dignity.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600">
          Serenity is being created around a simple belief: products used during physical transitions should feel more respectful, more discreet, and more thoughtfully designed. Performance matters, but so does the experience of living with the product.
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Questions"
        title="Early answers about Serenity"
        body="A few essentials for people considering early access or clinical participation."
        className="max-w-2xl mb-10"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {faqs.map((item) => (
          <InfoCard key={item.question} title={item.question} body={item.answer} />
        ))}
      </div>
    </section>
  );
}

function FinalCTASection() {
function FinalCTASection() {
  return (
    <section className="border-t border-stone-200 bg-stone-100">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
              Serenity Founding Access
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">
              Join the first users shaping Serenity.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              We are inviting a limited number of early users and recovery clinics
              to help refine the Serenity Recovery Brief before full production.
              Join the Founding Access Programme to receive early product access
              and updates.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#consumer"
                className="rounded-2xl bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Consumer early access
              </a>
              <a
                href="#clinic"
                className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-center text-sm font-medium text-stone-800 shadow-sm transition hover:bg-stone-100"
              >
                Clinical partnership
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-stone-900">
              Founding Access Waitlist
            </p>
            <p className="mt-1 text-xs text-stone-500">
              Limited to the first 500 participants
            </p>

            <form
              action="https://formspree.io/f/xlgpdyeb"
              method="POST"
              className="mt-4 space-y-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-stone-300 px-4 py-2 text-sm"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-stone-300 px-4 py-2 text-sm"
              />

              <select
                name="interest"
                className="w-full rounded-xl border border-stone-300 px-4 py-2 text-sm"
              >
                <option>I am interested as...</option>
                <option>Consumer / Caregiver</option>
                <option>Clinic / Medical professional</option>
                <option>Distributor / Partner</option>
              </select>

              <input
                type="hidden"
                name="_next"
                value="https://serenity-site-ruby.vercel.app/thanks"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Join Founding Access
              </button>

              <p className="text-[11px] text-stone-400">
                We&apos;ll only use your email to send Serenity updates and early
                access information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RecoveryBrandLandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <HeroSection />
      <TrustStrip />
      <ProductPhilosophySection />
      <AudienceSection />
      <FounderNoteSection />
      <PackagingSection />
      <TechnicalSpecSection />
      <RoadmapSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}