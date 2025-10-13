"use client";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-medium mb-6 text-white">About</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I spent 4 years building machine learning models and AI systems before transitioning
                to smart contract development in 2024.
              </p>
              <p>
                The shift felt natural—both fields demand mathematical precision, optimization thinking,
                and systems-level understanding. Now I apply that analytical background to DeFi protocol development.
              </p>
              <p>
                I focus on writing clean, auditable Solidity code with emphasis on gas optimization
                and security. Every contract I ship is thoroughly tested and documented.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-gray-800 pl-4">
                  <p className="text-white font-medium">Smart Contract Engineer</p>
                  <p className="text-sm text-gray-500">2024 - Present</p>
                </div>
                <div className="border-l-2 border-gray-800 pl-4">
                  <p className="text-white font-medium">Machine Learning Engineer</p>
                  <p className="text-sm text-gray-500">2021 - 2025</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Solidity", "Foundry", "Python", "TensorFlow", "Typescript", "Javascript", "Express.js", "Nest.js", "Security Audits"].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm border border-gray-800 text-gray-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
