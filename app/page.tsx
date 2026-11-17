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
