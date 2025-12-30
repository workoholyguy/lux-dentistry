/* eslint-disable @next/next/no-img-element */
"use client";

type Pair = {
  before: string;
  after: string;
  label: string;
};

const pairs: Pair[] = [
  { before: "/1_Before.png", after: "/1_After.PNG", label: "Case 1" },
  { before: "/2_Before.jpeg", after: "/2_After.jpeg", label: "Case 2" },
  { before: "/3_Before.jpeg", after: "/3_After.jpeg", label: "Case 3" },
];

export default function BeforeAfterCarousel() {
  const track = [...pairs, ...pairs];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Results</p>
          <h2 className="text-3xl font-semibold text-nearBlack md:text-4xl">Before &amp; After</h2>
          <p className="max-w-3xl text-base leading-7 text-charcoal">
            Real patient results shown with permission. Treatments planned for comfort, clarity, and
            long-term health.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-silver/60 bg-softBg p-5 shadow-sm">
          <div className="relative">
            <div className="flex w-max gap-4 animate-beforeAfter-scroll">
              {track.map((item, idx) => (
                <div
                  key={`${item.label}-${idx}`}
                  className="flex min-w-[360px] items-center gap-3 rounded-xl border border-silver/60 bg-white p-3 shadow-sm md:min-w-[420px]"
                >
                  <figure className="relative overflow-hidden rounded-lg border border-silver/60 bg-white">
                    <img
                      src={item.before}
                      alt="Before"
                      className="h-48 w-full object-cover md:h-56"
                      loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 rounded-full bg-nearBlack/70 px-3 py-1 text-xs font-semibold text-softBg">
                      Before
                    </figcaption>
                  </figure>
                  <div className="flex items-center justify-center px-2">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-navy text-navy"
                    >
                      →
                    </span>
                  </div>
                  <figure className="relative overflow-hidden rounded-lg border border-silver/60 bg-white">
                    <img
                      src={item.after}
                      alt="After"
                      className="h-48 w-full object-cover md:h-56"
                      loading="lazy"
                    />
                    <figcaption className="absolute bottom-2 left-2 rounded-full bg-nearBlack/70 px-3 py-1 text-xs font-semibold text-softBg">
                      After
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes beforeAfter-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-beforeAfter-scroll {
            animation: beforeAfter-scroll 24s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}

