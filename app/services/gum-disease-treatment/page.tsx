export const metadata = {
  title: "Gum Disease Treatment | Lux Dentistry",
  description: "Comprehensive gum disease treatment including scaling, root planing, and periodontal therapy to restore gum health.",
};

const gumDiseaseStages = [
  {
    stage: "Gingivitis",
    description: "Early stage with gum inflammation and bleeding",
    symptoms: "Red, swollen gums that bleed easily",
    treatment: "Professional cleaning and improved oral hygiene",
    reversibility: "Fully reversible"
  },
  {
    stage: "Periodontitis (Mild)",
    description: "Gums pull away from teeth, forming pockets",
    symptoms: "Persistent bad breath, gum recession, tooth mobility",
    treatment: "Deep cleaning (scaling and root planing)",
    reversibility: "Partially reversible with treatment"
  },
  {
    stage: "Periodontitis (Moderate)",
    description: "Infection spreads to supporting bone",
    symptoms: "Increased pocket depth, bone loss, tooth shifting",
    treatment: "Surgical intervention may be needed",
    reversibility: "Bone loss is permanent but progression can be stopped"
  },
  {
    stage: "Advanced Periodontitis",
    description: "Severe bone loss and potential tooth loss",
    symptoms: "Loose teeth, severe pain, abscesses",
    treatment: "Complex surgical procedures, possible tooth extraction",
    reversibility: "Cannot be fully reversed"
  }
];

const treatmentOptions = [
  {
    name: "Non-Surgical Treatment",
    description: "Scaling and root planing to remove plaque and tartar",
    indications: "Early to moderate gum disease",
    procedure: "Deep cleaning below gumline",
    frequency: "Every 3-4 months initially"
  },
  {
    name: "Surgical Treatment",
    description: "Procedures to access and clean deep pockets",
    indications: "Moderate to advanced gum disease",
    procedure: "Flap surgery, bone grafting, gum grafting",
    frequency: "As needed based on severity"
  },
  {
    name: "Laser Therapy",
    description: "Advanced laser treatment for gum disease",
    indications: "Various stages of gum disease",
    procedure: "Laser removal of infected tissue",
    frequency: "Part of comprehensive treatment plan"
  },
  {
    name: "Maintenance Therapy",
    description: "Ongoing care to prevent recurrence",
    indications: "After active treatment",
    procedure: "Regular professional cleanings",
    frequency: "Every 3-4 months"
  }
];

const riskFactors = [
  "Poor oral hygiene",
  "Smoking or tobacco use",
  "Diabetes",
  "Hormonal changes (pregnancy, menopause)",
  "Medications that cause dry mouth",
  "Genetic predisposition",
  "Stress and poor nutrition",
  "Certain medical conditions"
];

const preventionTips = [
  "Brush twice daily for 2 minutes each time",
  "Floss daily or use interdental cleaners",
  "Use antimicrobial mouthwash",
  "Visit dentist every 6 months for check-ups",
  "Eat a balanced diet with adequate vitamin C",
  "Quit smoking and limit alcohol",
  "Manage stress and maintain overall health",
  "Replace toothbrush every 3 months"
];

export default function GumDiseaseTreatmentPage() {
  return (
    <div className="bg-softBg text-charcoal">
      {/* HERO */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slateBlue to-navy">
          <div className="absolute inset-0 bg-nearBlack/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-6">
              <h1 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Protect your gums and preserve your teeth.
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Comprehensive gum disease treatment to restore oral health and prevent tooth loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">Periodontal Care</p>
            <h2 className="mt-2 text-3xl font-semibold text-nearBlack md:text-4xl">
              Gum disease affects more than just your gums.
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal">
              Gum disease (periodontal disease) is a serious infection that damages the gums
              and bone supporting your teeth. If left untreated, it can lead to tooth loss
              and has been linked to other health issues like heart disease and diabetes.
              Early detection and treatment are crucial for preserving your oral health.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for gum disease */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">🦷</div>
                  <p className="text-sm">Gum Disease Treatment Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUM DISEASE STAGES */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Stages of Gum Disease</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Gum disease progresses through stages, with early detection being key to successful treatment.
            </p>
          </div>

          <div className="space-y-6">
            {gumDiseaseStages.map((stage, index) => (
              <div
                key={stage.stage}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-nearBlack">{stage.stage}</h3>
                    <p className="text-sm text-gold">{stage.reversibility}</p>
                  </div>
                </div>
                <p className="text-sm text-charcoal">{stage.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Symptoms:</div>
                    <p className="text-sm text-charcoal">{stage.symptoms}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Treatment:</div>
                    <p className="text-sm text-charcoal">{stage.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISK FACTORS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Risk factors for gum disease.
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Understanding your risk factors helps us create a personalized prevention and
              treatment plan. Many risk factors can be modified to improve gum health.
            </p>
            <div className="space-y-3">
              {riskFactors.map((factor) => (
                <div
                  key={factor}
                  className="flex items-center gap-3 rounded-lg bg-white p-3 border border-silver/60"
                >
                  <div className="h-2 w-2 rounded-full bg-red-500 flex-shrink-0"></div>
                  <span className="text-sm text-charcoal">{factor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for risk factors */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚠️</div>
                  <p className="text-sm">Gum Disease Risk Factors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Treatment Options</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Treatment depends on the stage of gum disease and is designed to eliminate infection and prevent progression.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {treatmentOptions.map((treatment) => (
              <div
                key={treatment.name}
                className="flex flex-col gap-4 rounded-xl border border-silver/60 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-nearBlack">{treatment.name}</h3>
                <p className="text-sm text-charcoal">{treatment.description}</p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Indications:</div>
                    <p className="text-charcoal">{treatment.indications}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Procedure:</div>
                    <p className="text-charcoal">{treatment.procedure}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gold uppercase tracking-wide mb-1">Frequency:</div>
                    <p className="text-charcoal">{treatment.frequency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS WITH PLACEHOLDER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-nearBlack">The Treatment Process</h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
            Comprehensive gum disease treatment focuses on eliminating infection and restoring gum health.
          </p>
        </div>

        {/* Process steps with image/video placeholders */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Assessment</h3>
            <p className="text-sm text-charcoal mb-4">Thorough examination and diagnosis</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">🔍</div>
                <p className="text-xs">Assessment Image</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Treatment</h3>
            <p className="text-sm text-charcoal mb-4">Active treatment to eliminate infection</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">🧹</div>
                <p className="text-xs">Treatment Process Video</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mx-auto w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-nearBlack mb-2">Maintenance</h3>
            <p className="text-sm text-charcoal mb-4">Ongoing care to prevent recurrence</p>
            {/* Image/Video placeholder */}
            <div className="mx-auto w-full max-w-xs h-32 rounded-lg bg-silver/20 border border-silver/60 flex items-center justify-center">
              <div className="text-center text-silver">
                <div className="text-2xl mb-1">🏥</div>
                <p className="text-xs">Maintenance Animation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREVENTION */}
      <section className="bg-white/60 border-y border-silver/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-nearBlack">Preventing Gum Disease</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-charcoal">
              Prevention is always better than treatment. These habits protect your gum health.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {preventionTips.map((tip) => (
              <div
                key={tip}
                className="flex items-start gap-3 rounded-lg bg-white p-4 border border-silver/60"
              >
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                <span className="text-sm text-charcoal">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEMIC HEALTH CONNECTION */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-xl border border-silver/60 bg-silver/20">
            <div className="relative aspect-[4/3] w-full">
              {/* Image placeholder for systemic health */}
              <div className="flex h-full items-center justify-center bg-silver/30 text-silver">
                <div className="text-center">
                  <div className="text-4xl mb-2">❤️</div>
                  <p className="text-sm">Gum Health & Overall Health</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-semibold text-nearBlack">
              Gum disease affects your whole body.
            </h2>
            <p className="mb-6 text-base leading-7 text-charcoal">
              Research shows that gum disease is linked to several systemic health conditions.
              Treating gum disease may improve your overall health outcomes.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-red-500"></div>
                <span className="text-sm">Heart disease and stroke risk</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-red-500"></div>
                <span className="text-sm">Diabetes complications</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-red-500"></div>
                <span className="text-sm">Respiratory infections</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-2 w-2 rounded-full bg-red-500"></div>
                <span className="text-sm">Pregnancy complications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-navy text-softBg">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Don&apos;t let gum disease progress.
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg leading-7 text-silver">
            Early detection and treatment can save your teeth and improve your overall health. Schedule a gum evaluation today.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-nearBlack transition hover:bg-goldSoft"
          >
            Schedule Gum Evaluation
          </a>
        </div>
      </section>
    </div>
  );
}
