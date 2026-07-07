import { processSteps } from "@/data/processSteps";

export default function TermsProcess() {
  return (
    <section id="process" className="bg-[#1F1F1F] px-4 py-16 text-white md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-4 py-2 text-xs font-black text-[#FD7C03]">
            How it works
          </p>
          <h2 className="text-3xl font-black md:text-5xl">
            Proses mudah untuk pelanggan.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-3xl border border-white/15 bg-white/5 p-6"
            >
              <p className="text-sm font-black text-[#FD7C03]">{step.number}</p>
              <h3 className="mt-8 text-xl font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
