"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-32"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-46 h-46 md:w-64 md:h-64 relative rounded-full overflow-hidden border-2 border-gray-800">
              <Image
                src="/avatar.png"
                alt="Akbar Wijaya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-8 flex-1">
            <div className="space-y-4">
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                Hi Everyone, Im
              </p>
              <h1 className="text-5xl md:text-6xl font-medium leading-tight text-white">
                Akbar Wijaya
              </h1>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              I transitioned from machine learning engineering to smart contract development,
              bringing analytical rigor and optimization thinking to blockchain architecture.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-800 text-white font-medium hover:border-gray-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
