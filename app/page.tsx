import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">
      {/* NAVIGATION */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-[#f7f7f5]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="font-semibold">
            Katarina Uremović
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-600 md:flex">
            <a href="#about" className="transition hover:text-black">
              About
            </a>

            <a
              href="#personal-projects"
              className="transition hover:text-black"
            >
              Personal Projects
            </a>

            <a
              href="#university-projects"
              className="transition hover:text-black"
            >
              University Projects
            </a>

            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
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
            I enjoy exploring different areas of IT, learning new technologies and applying them to practical projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#personal-projects"
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
            alt="Katarina Uremović"
            width={400}
            height={500}
            className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
            priority
          />
        </div>
      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-24 md:px-10"
      >
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              About Me
            </p>

            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Curious about technology.
              <br />
              Ready to apply my knowledge in practice.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-gray-600">
              I am a Bachelor of Informatics currently pursuing a Master's degree
              focused on databases and knowledge bases. Through my studies, I have
              gained a foundation in software development, databases and other areas
              of information technology.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Alongside my studies, I started working on personal projects inspired
              by real business needs. These projects gave me the opportunity to
              apply my knowledge in practice and explore how technology can be used
              to solve real problems, improve existing processes and support
              everyday business activities.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Working on practical projects strengthened my motivation to take the
              next step toward professional work in IT. I am interested in applying
              my knowledge in a professional environment, gaining hands-on
              experience and contributing to real projects.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              I am open to different opportunities within IT that match my current
              knowledge and skills, where I can continue learning, contribute to a
              team and further develop my technical experience.
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
                  "WPF",
                  ".NET",
                  "Python",
                  "Kotlin",
                  "JavaScript",
                  "TypeScript",
                  "PHP",
                  "React",
                  "Next.js",
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

            {/* DATABASES & BACKEND */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                Databases & Backend
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "PostgreSQL",
                  "MySQL",
                  "SQLite",
                  "SQL",
                  "PostGIS",
                  "JSONB",
                  "Supabase",
                  "Firebase",
                  "Cloud Firestore",
                  "PL/pgSQL",
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

            {/* TESTING & QA */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                Testing & QA
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Unit Testing",
                  "Integration Testing",
                  "UI Testing",
                  "JUnit 4",
                  "Mockito",
                  "Espresso",
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

            {/* WEB & APIs */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                Web & APIs
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "REST APIs",
                  "HTTP",
                  "JSON",
                  "Webhooks",
                  "WordPress",
                  "WPForms",
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
                  "Android Studio",
                  "Figma",
                  "Vercel",
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

      {/* PERSONAL PROJECTS */}
      <section
        id="personal-projects"
        className="mx-auto max-w-6xl px-6 py-24 md:px-10"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Selected Work
        </p>

        <h2 className="text-4xl font-semibold md:text-5xl">
          Personal Projects
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          Projects inspired by real business needs, developed to explore how technology can solve practical problems and improve existing processes.
        </p>

        <div className="mt-12 space-y-8">
          {/* PERSONAL PROJECT 1 */}
          <article className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm font-medium text-gray-400">
                  01 — WEB APPLICATION
                </p>

                <h3 className="mt-3 text-3xl font-semibold">
                  Quote Management Web Application
                </h3>

                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  Web application for creating, managing and finalizing
                  customer quotes.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">The Project</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    The application centralizes the quote creation process and
                    helps keep customer information, quote items, pricing and
                    quote statuses organized in one place.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Technical Approach</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    I built the application with Next.js and TypeScript,
                    connected it to a PostgreSQL database through Supabase and
                    implemented authentication and Row Level Security to
                    protect user data. Quotes can also be generated as PDF
                    documents.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Key Features</h4>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Authentication",
                    "Customer Management",
                    "Quote Creation",
                    "Quote Items",
                    "Status Tracking",
                    "PDF Generation",
                    "Database Integration",
                    "Row Level Security",
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700"
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
                  Authentication · Row Level Security · React PDF · Git ·
                  GitHub · Vercel
                </p>
              </div>

              <div>
                <h4 className="mb-5 font-semibold">Application Preview</h4>

                <div className="flex flex-wrap items-start justify-center gap-4">
                  {[
                    {
                      src: "/projekt1_1.png",
                      alt: "Quote management application dashboard",
                    },
                    {
                      src: "/projekt1_2.png",
                      alt: "Quote management application",
                    },
                    {
                      src: "/projekt1_4.png",
                      alt: "Quote details",
                    },
                  ].map((image) => (
                    <div
                      key={image.src}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1400}
                        height={900}
                        className="h-64 w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* PERSONAL PROJECT 2 */}
          <article className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm font-medium text-gray-400">
                  02 — AI AUTOMATION
                </p>

                <h3 className="mt-3 text-3xl font-semibold">
                  AI Lead-to-Quote Automation
                </h3>

                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  AI-powered workflow that transforms unstructured customer
                  inquiries into structured data and prepares quote drafts for
                  human review.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">The Project</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    The workflow automates the processing of customer inquiries
                    that would otherwise require manual extraction of product
                    information, dimensions, quantities and contact details
                    before preparing a quote.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Technical Approach</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    Customer inquiries are received from a WordPress form
                    through a webhook and processed in n8n. AI extracts
                    structured information, the output is validated and stored
                    in Supabase, while uncertain or missing information remains
                    available for human review.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Key Features</h4>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Customer Inquiry",
                    "Webhook Integration",
                    "AI Extraction",
                    "Structured Outputs",
                    "Data Validation",
                    "Database Storage",
                    "Human Review",
                    "Quote Draft",
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Technologies</h4>

                <p className="mt-3 leading-7 text-gray-600">
                  n8n · OpenAI / LLM · Structured Outputs · WordPress ·
                  WPForms · PHP · Webhooks · HTTP · JSON · Supabase ·
                  PostgreSQL · Next.js · TypeScript
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold">Application Preview</h4>

                <p className="mb-6 max-w-3xl leading-7 text-gray-600">
                  From a customer inquiry submitted on the website to AI processing and a
                  prefilled quote ready for human review.
                </p>

                <div className="flex flex-wrap items-start justify-center gap-4">
                  {[
                    {
                      src: "/projekt2_wordpress.png",
                      alt: "Customer inquiry submitted through WordPress",
                    },
                    {
                      src: "/projekt2_workflow.png",
                      alt: "n8n AI automation workflow",
                    },
                    {
                      src: "/projekt2_3.png",
                      alt: "Prefilled quote generated from the customer inquiry",
                    },
                  ].map((image) => (
                    <div
                      key={image.src}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1400}
                        height={900}
                        className="h-64 w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* PERSONAL PROJECT 3 */}
          <article className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm font-medium text-gray-400">
                  03 — WORDPRESS WEBSITE
                </p>

                <h3 className="mt-3 text-3xl font-semibold">
                  WordPress Business Website
                </h3>

                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  Responsive business website created for a joinery business
                  to present the company, its products and provide customers
                  with an easy way to submit inquiries.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">The Project</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    The website provides customers with information about the
                    business and its product offering, together with a contact
                    form for submitting customer inquiries.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Technical Approach</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    I built the website using WordPress and WPForms and later
                    connected the inquiry form to the AI Lead-to-Quote
                    Automation through webhooks, allowing submitted inquiries
                    to enter the automated processing workflow.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Key Features</h4>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Responsive Website",
                    "Business Presentation",
                    "Product Presentation",
                    "Customer Inquiry Form",
                    "WPForms",
                    "Webhook Integration",
                    "AI Workflow Integration",
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Technologies</h4>

                <p className="mt-3 leading-7 text-gray-600">
                  WordPress · WPForms · PHP · Webhooks · CyberFolks Hosting
                </p>
              </div>

              <div>
                <h4 className="mb-5 font-semibold">Application Preview</h4>

                <div className="flex flex-wrap items-start justify-center gap-4">
                  {[
                    {
                      src: "/projekt3_1.png",
                      alt: "WordPress business website homepage",
                    },
                    {
                      src: "/projekt3_2.png",
                      alt: "Product offering on the WordPress website",
                    },
                    {
                      src: "/projekt2_wordpress.png",
                      alt: "Customer inquiry form",
                    },
                  ].map((image) => (
                    <div
                      key={image.src}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={800}
                        className="h-64 w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* UNIVERSITY PROJECTS */}
      <section
        id="university-projects"
        className="mx-auto max-w-6xl px-6 py-24 md:px-10"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Academic Work
        </p>

        <h2 className="text-4xl font-semibold md:text-5xl">
          University Projects
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          Selected projects developed during my studies, focused on applying
          software engineering concepts and technologies in practice.
        </p>

        <div className="mt-12 space-y-8">
          {/* UNIVERSITY PROJECT 1 — GLAMOFFICE */}
          <article className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm font-medium text-gray-400">
                  01 — C# DESKTOP APPLICATION
                </p>
                <h3 className="mt-3 text-3xl font-semibold">
                  GlamOffice Software
                </h3>
                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  Three-tier desktop application developed in a four-member university team to support beauty salon operations.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">The Project</h4>
                  <p className="mt-3 leading-7 text-gray-600">
                    The application supports beauty salon management, including services, clients, appointments and customer communication.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">My Contribution</h4>
                  <p className="mt-3 leading-7 text-gray-600">
                    I worked on CRUD functionality for salon services, customer reviews and employee ratings, and promotional emails for customers.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Technical Approach</h4>
                <p className="mt-3 leading-7 text-gray-600">
                  Developed using C# and WPF within the .NET ecosystem, following a three-tier architecture. The team worked with SQLite and MySQL databases and used Git for version control and collaboration.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Key Features</h4>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Service Management (CRUD)",
                    "Customer Reviews",
                    "Employee Ratings",
                    "Promotional Emails",
                    "Three-Tier Architecture",
                    "Database Integration",
                    "Team Collaboration",
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Technologies</h4>
                <p className="mt-3 leading-7 text-gray-600">
                  C# · WPF · .NET · SQLite · MySQL · Git · GitHub
                </p>
              </div>
            </div>
          </article>

          {/* UNIVERSITY PROJECT 2 — SMARTZONE */}
          <article className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm font-medium text-gray-400">
                  02 — BACHELOR THESIS
                </p>

                <h3 className="mt-3 text-3xl font-semibold">
                  SmartZone — Android Application & Software Testing
                </h3>

                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  Android application developed as part of my bachelor thesis,
                  with a focus on systematic software testing and quality
                  assurance.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">The Project</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    SmartZone is an Android application designed to support
                    users in organizing their learning activities. Users can
                    create personalized Study Zones, manage notes and
                    documents, plan tasks and reminders, and manage their user
                    profile.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Technical Approach</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    The application was developed in Kotlin with Firebase
                    Authentication and Cloud Firestore. The thesis focused on
                    systematic software testing using unit tests with JUnit
                    and Mockito, Firebase integration tests and UI tests with
                    Espresso.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Key Features</h4>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "User Authentication",
                    "Study Zones",
                    "Notes & Documents",
                    "Planner & Reminders",
                    "User Profile",
                    "Unit Testing",
                    "Integration Testing",
                    "UI Testing",
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Technologies</h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Kotlin · Android Studio · Firebase Authentication · Cloud
                  Firestore · AlarmManager · JUnit 4 · Mockito ·
                  Mockito-Kotlin · Espresso
                </p>
              </div>

              <div>
                <h4 className="mb-5 font-semibold">Application Preview</h4>

                <div className="flex flex-wrap items-start justify-center gap-4">
                  {[
                    {
                      src: "/smartzone_zones.png",
                      alt: "SmartZone Study Zones screen",
                    },
                    {
                      src: "/smartzone_zone_details.png",
                      alt: "SmartZone Study Zone details",
                    },
                    {
                      src: "/smartzone_planner.png",
                      alt: "SmartZone planner and reminders",
                    },
                  ].map((image) => (
                    <div
                      key={image.src}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={900}
                        height={1200}
                        className="h-64 w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* UNIVERSITY PROJECT 3 */}
          <article className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm font-medium text-gray-400">
                  03 — DATABASE & WEB APPLICATION
                </p>

                <h3 className="mt-3 text-3xl font-semibold">
                  Restaurant Recommendation Web Application
                </h3>

                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  Crowdsourced restaurant recommendation web application
                  combining relational, spatial, temporal and semi-structured
                  data within a PostgreSQL database.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">The Project</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    The application allows users to discover restaurants, add
                    new locations and share reviews. Restaurants can be
                    searched and ranked based on location, ratings and recent
                    activity.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Technical Approach</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    PostgreSQL is used as the main database, PostGIS handles
                    geographic locations and distance-based queries, while
                    JSONB stores flexible restaurant attributes. Spatial GiST
                    and JSONB GIN indexes improve query performance, while
                    triggers maintain aggregated restaurant statistics.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Key Features</h4>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "User Authentication",
                    "Restaurant Management",
                    "Restaurant Reviews",
                    "Spatial Search",
                    "Distance Calculation",
                    "JSONB Filtering",
                    "Trending Restaurants",
                    "Automatic Statistics",
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Technologies</h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Python · Flask · PostgreSQL · PostGIS · JSONB · SQL ·
                  PL/pgSQL · psycopg · Bootstrap
                </p>
              </div>

              <div>
                <h4 className="mb-5 font-semibold">Application Preview</h4>

                <div className="flex flex-wrap items-start justify-center gap-4">
                  {[
                    {
                      src: "/restaurant_add.png",
                      alt: "Adding a restaurant with additional attributes",
                    },
                    {
                      src: "/restaurant_search.png",
                      alt: "Spatial restaurant search with JSONB filters",
                    },
                    {
                      src: "/restaurant_trending.png",
                      alt: "Trending restaurants based on recent activity",
                    },
                  ].map((image) => (
                    <div
                      key={image.src}
                      className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={800}
                        className="h-64 w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* UNIVERSITY PROJECT 4 */}
          <article className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm font-medium text-gray-400">
                  04 — EXPERT SYSTEM
                </p>

                <h3 className="mt-3 text-3xl font-semibold">
                  Creditworthiness Assessment Expert System
                </h3>

                <p className="mt-3 max-w-3xl text-lg text-gray-600">
                  Rule-based expert system for creditworthiness assessment
                  developed using declarative programming, logical reasoning
                  and F-logic.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">The Project</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    The system models clients, loan applications and bank
                    policies to evaluate creditworthiness. Based on financial
                    data and predefined business rules, it determines whether
                    a loan application should be approved, conditionally
                    approved or rejected.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Technical Approach</h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    The system represents domain knowledge through facts and
                    declarative rules rather than a traditional procedural
                    algorithm. Flora-2 and F-logic are used to model the domain
                    and perform logical reasoning, with the schema, reasoning
                    rules and test data organized into separate modules.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Key Features</h4>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Creditworthiness Assessment",
                    "Rule-Based Reasoning",
                    "Financial Indicators",
                    "DSTI Calculation",
                    "Business Rule Validation",
                    "Credit Classification",
                    "Decision Explanation",
                    "Test Queries",
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Technologies</h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Flora-2 · F-logic · XSB Prolog · Declarative Programming ·
                  Logic Programming · Ubuntu Linux
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-24 md:px-10"
      >
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Let's connect
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