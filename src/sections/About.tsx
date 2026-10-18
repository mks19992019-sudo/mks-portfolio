export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-gray-100"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-start">
          {/* Left — heading */}
          <div>
            <h2
              id="about-heading"
              className="text-2xl font-bold text-gray-950 tracking-tight"
            >
              How I approach engineering
            </h2>
          </div>

          {/* Right — body */}
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              I approach AI as an engineering problem, not just a model integration exercise.
              I focus on understanding system behavior, evaluating performance, and building
              applications that solve practical problems. My work spans machine learning models
              and LLM-based applications, with an emphasis on reliability and real-world
              usefulness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
