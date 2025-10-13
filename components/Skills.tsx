"use client";

import { Card, CardBody, Progress } from "@heroui/react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Smart Contracts",
      icon: "⛓️",
      skills: [
        { name: "Solidity", level: 92 },
        { name: "Rust (Solana)", level: 85 },
        { name: "Hardhat / Foundry", level: 90 },
        { name: "Web3.js / Ethers.js", level: 88 },
      ],
    },
    {
      title: "AI / Machine Learning",
      icon: "🤖",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow / PyTorch", level: 90 },
        { name: "NLP & LLMs", level: 88 },
        { name: "Data Science", level: 87 },
      ],
    },
    {
      title: "Web3 & DeFi",
      icon: "🔐",
      skills: [
        { name: "DeFi Protocols", level: 90 },
        { name: "Smart Contract Security", level: 88 },
        { name: "Gas Optimization", level: 92 },
        { name: "TheGraph / Subgraphs", level: 85 },
      ],
    },
  ];

  const tools = [
    "Solidity",
    "Rust",
    "Python",
    "TensorFlow",
    "Hardhat",
    "Foundry",
    "Ethereum",
    "Solana",
    "Web3.js",
    "React",
    "TypeScript",
    "Node.js",
    "IPFS",
    "TheGraph",
    "OpenZeppelin",
    "Chainlink",
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black border-t border-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combining AI expertise with blockchain development for next-gen solutions
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <Card className="bg-gray-900/50 border border-gray-800 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/20 transition-all group">
                <CardBody className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl"
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">{category.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-base font-medium text-gray-300">
                            {skill.name}
                          </span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.1 + 0.3 }}
                            className="text-sm text-purple-400"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <Progress
                          value={skill.level}
                          size="sm"
                          className="max-w-full"
                          classNames={{
                            indicator: "bg-gradient-to-r from-purple-500 to-blue-500",
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
                whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full font-medium text-sm text-gray-300 hover:border-purple-500/30 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
