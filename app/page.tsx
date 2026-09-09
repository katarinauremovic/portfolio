import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-[#f7f7f5]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="font-semibold">
            Katarina Uremović
          </a>

          <div className="flex gap-5 text-sm text-gray-600">
            <a href="#about" className="transition hover:text-black">
              About
            </a>

            <a href="#projects" className="transition hover:text-black">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10">

        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Portfolio
          </p>

          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Katarina Uremović
          </h1>

          <p className="mt-3 text-lg font-medium text-gray-500">
            univ. bacc. inf.
          </p>

          <h2 className="mt-8 max-w-xl text-2xl font-medium leading-snug md:text-3xl">
            Turning real-world problems into practical digital solutions.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
            I enjoy building useful solutions by combining software,
            automation and AI.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium transition hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/moja_slika.png"
            alt="Ime Prezime"
            width={400}
            height={500}
            className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
            priority
          />
        </div>
      </section>
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24 md:px-10"
      >
        {/* ABOUT ME */}
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              About Me
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Curious about technology.
              <br />
              Focused on practical solutions.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-gray-600">
              I am a Bachelor of Informatics currently pursuing a Master's degree
              focused on databases and knowledge bases. My background includes
              software development, databases and building digital solutions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Recently, I have been exploring AI and automation through hands-on
              projects, combining web applications, databases, APIs and automation
              workflows to build useful end-to-end solutions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              I enjoy learning new technologies by applying them to real-world
              problems, especially where technology can reduce repetitive work,
              improve existing processes and support people in their everyday work.
            </p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="mt-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Skills & Technologies
          </p>

          <h2 className="text-3xl font-semibold md:text-4xl">
            Technologies I have worked with
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {/* DEVELOPMENT */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                Development
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "C#",
                  ".NET",
                  "TypeScript",
                  "JavaScript",
                  "Next.js",
                  "React",
                  "PHP",
                  "Kotlin",
                  "Python",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DATA & BACKEND */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                Data & Backend
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "PostgreSQL",
                  "SQL",
                  "Supabase",
                  "REST APIs",
                  "HTTP",
                  "JSON",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & AUTOMATION */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                AI & Automation
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "n8n",
                  "OpenAI / LLM",
                  "Webhooks",
                  "Structured Outputs",
                  "Workflow Automation",
                  "Human-in-the-Loop",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* TOOLS & PLATFORMS */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                Tools & Platforms
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Git",
                  "GitHub",
                  "WordPress",
                  "WPForms",
                  "Figma",
                  "Vercel",
                  "CyberFolks",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-24 md:px-10"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Selected Work
        </p>

        <h2 className="text-4xl font-semibold md:text-5xl">
          Featured Projects
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          A selection of projects where I explored practical solutions for real
          business processes using software, automation and AI.
        </p>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-medium text-gray-400">01 — WEB APPLICATION</p>

              <h3 className="mt-3 text-3xl font-semibold">
                Quote Management Web Application
              </h3>

              <p className="mt-3 max-w-2xl text-lg text-gray-600">
                Web application for creating, managing and finalizing customer quotes.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-semibold">The Problem</h4>
                <p className="mt-3 leading-7 text-gray-600">
                  Small businesses often manage customer quotes manually, which can
                  make it difficult to keep customer information, quote items, pricing
                  and quote statuses organized.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">The Solution</h4>
                <p className="mt-3 leading-7 text-gray-600">
                  I built a web application that centralizes the quote creation and
                  management process. Users can create quotes, add multiple items,
                  calculate totals, edit drafts and finalize completed quotes.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Key Features</h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Quote Management",
                  "Multiple Quote Items",
                  "Automatic Totals",
                  "Quote Numbering",
                  "DRAFT → FINAL Workflow",
                  "PDF Generation",
                  "Authentication",
                  "Row Level Security",
                  "Responsive Design",
                  "PWA",
                ].map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Technologies</h4>

              <p className="mt-3 leading-7 text-gray-600">
                Next.js · TypeScript · Tailwind CSS · Supabase · PostgreSQL ·
                Supabase Auth · Row Level Security · React PDF · Git · GitHub · Vercel
              </p>
            </div>

            <div>
              <h4 className="mb-5 font-semibold">Application Preview</h4>

              <div className="flex flex-wrap items-start justify-center gap-4">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <Image
                    src="/projekt1_1.png"
                    alt="Quote management application dashboard"
                    width={1200}
                    height={800}
                    className="h-64 w-auto object-contain"
                  />
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <Image
                    src="/projekt1_2.png"
                    alt="Customer quote detail view"
                    width={1200}
                    height={800}
                    className="h-64 w-auto object-contain"
                  />
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <Image
                    src="/projekt1_4.png"
                    alt="New quote creation form"
                    width={1200}
                    height={800}
                    className="h-64 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-medium text-gray-400">
                02 — AI AUTOMATION
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                AI Lead-to-Quote Automation
              </h3>

              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                End-to-end AI workflow that transforms unstructured website inquiries
                into structured, human-reviewed quote drafts.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-semibold">The Problem</h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Customer inquiries submitted through a website often contain
                  important quote information in unstructured natural language.
                  Manually reading each inquiry, identifying products, dimensions and
                  quantities, and transferring that information into a quote is
                  repetitive and time-consuming.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">The Solution</h4>

                <p className="mt-3 leading-7 text-gray-600">
                  I built an AI-powered automation workflow that connects a WordPress
                  contact form with n8n, OpenAI, Supabase and my quote management
                  application. AI extracts structured information from customer
                  messages, while validation logic identifies incomplete data and
                  sends it for human review.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Workflow</h4>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                {[
                  "WordPress Form",
                  "Webhook",
                  "n8n",
                  "AI Extraction",
                  "Validation",
                  "Supabase",
                  "Human Review",
                  "Quote Draft",
                ].map((step, index, array) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
                      {step}
                    </span>

                    {index < array.length - 1 && (
                      <span className="text-gray-400">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                Human-in-the-Loop
              </p>

              <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                AI is used to extract information and reduce repetitive manual work,
                but it does not invent missing data or determine prices. Incomplete
                information is flagged for human review, and pricing remains under
                human control.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Key Features</h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "AI Information Extraction",
                  "Structured Output",
                  "Multi-Item Inquiries",
                  "Automated Validation",
                  "NEW / NEEDS_REVIEW",
                  "Human-in-the-Loop",
                  "Supabase Integration",
                  "Quote Prefill",
                  "Human-Controlled Pricing",
                ].map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Technologies</h4>

              <p className="mt-3 leading-7 text-gray-600">
                n8n · OpenAI / LLM · Structured Outputs · WordPress · WPForms · PHP ·
                Webhooks · HTTP · JSON · Supabase · PostgreSQL · Next.js · TypeScript
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold">Automation in Action</h4>

              <p className="mb-6 max-w-3xl leading-7 text-gray-600">
                From a customer inquiry submitted on the website to AI extraction,
                validation, human review and a prefilled quote draft.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="mb-3 text-sm font-medium text-gray-500">
                    01 — Customer inquiry
                  </p>

                  <div className="flex justify-center overflow-hidden rounded-xl border border-gray-200 bg-white p-2">
                    <Image
                      src="/projekt2_wordpress.png"
                      alt="Customer inquiry submitted through the WordPress website"
                      width={1200}
                      height={800}
                      className="h-72 w-auto max-w-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-medium text-gray-500">
                    02 — AI processing and validation in n8n
                  </p>

                  <div className="flex justify-center overflow-hidden rounded-xl border border-gray-200 bg-white p-2">
                    <Image
                      src="/projekt2_workflow.png"
                      alt="n8n AI automation workflow"
                      width={1600}
                      height={900}
                      className="h-72 w-auto max-w-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-medium text-gray-500">
                    03 — Human review
                  </p>

                  <div className="flex flex-wrap items-start justify-center gap-4">
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2">
                      <Image
                        src="/projekt2_1.png"
                        alt="Inquiry flagged for human review"
                        width={1000}
                        height={800}
                        className="h-64 w-auto max-w-full object-contain"
                      />
                    </div>

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2">
                      <Image
                        src="/projekt2_2.png"
                        alt="AI extracted inquiry items with missing data marked for review"
                        width={1000}
                        height={800}
                        className="h-64 w-auto max-w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-medium text-gray-500">
                    04 — Prefilled quote with human-controlled pricing
                  </p>

                  <div className="flex flex-wrap items-start justify-center gap-4">
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2">
                      <Image
                        src="/projekt2_3.png"
                        alt="Quote form automatically prefilled from customer inquiry"
                        width={1000}
                        height={800}
                        className="h-64 w-auto max-w-full object-contain"
                      />
                    </div>

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2">
                      <Image
                        src="/projekt2_4.png"
                        alt="Missing dimensions and pricing left for human input"
                        width={1000}
                        height={800}
                        className="h-64 w-auto max-w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-medium text-gray-400">
                03 — WORDPRESS WEBSITE
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                WordPress Business Website
              </h3>

              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Responsive business website created for a joinery business to present
                the company, its products and provide customers with an easy way to
                submit inquiries.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-semibold">The Website</h4>

                <p className="mt-3 leading-7 text-gray-600">
                  The website provides customers with information about the business
                  and its product offering, together with a contact form for submitting
                  customer inquiries.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">AI Integration</h4>

                <p className="mt-3 leading-7 text-gray-600">
                  The inquiry form was later connected to my AI Lead-to-Quote
                  Automation, allowing submitted customer messages to automatically
                  enter the AI processing, validation and quote preparation workflow.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Website Preview</h4>

              <div className="mt-5 flex flex-wrap items-start justify-center gap-4">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <Image
                    src="/projekt3_1.png"
                    alt="WordPress business website homepage"
                    width={1200}
                    height={800}
                    className="h-64 w-auto max-w-full object-contain"
                  />
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <Image
                    src="/projekt3_2.png"
                    alt="Product offering on the WordPress business website"
                    width={1200}
                    height={800}
                    className="h-64 w-auto max-w-full object-contain"
                  />
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <Image
                    src="/projekt2_wordpress.png"
                    alt="Customer inquiry form integrated with the AI automation"
                    width={1200}
                    height={800}
                    className="h-64 w-auto max-w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Technologies</h4>

              <p className="mt-3 leading-7 text-gray-600">
                WordPress · WPForms · PHP · Webhooks · CyberFolks Hosting
              </p>
            </div>
          </div>
        </div>

      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-24 md:px-10"
      >
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Interested in working together or learning more about my projects?
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Feel free to contact me or explore my work on GitHub and LinkedIn.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:kuremovic309@gmail.com"
              className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Email Me
            </a>

            <a
              href="https://github.com/katarinauremovic"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium transition hover:bg-gray-50"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/katarina-uremovi%C4%87/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium transition hover:bg-gray-50"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <footer className="mt-12 flex flex-col gap-2 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Katarina Uremović</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </footer>
      </section>
    </main>
  );
}