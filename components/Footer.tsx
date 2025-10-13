export default function Footer() {
  return (
    <footer className="border-t border-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Akbar Wijaya. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/akbarwijayaa" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/akbarwijayaa" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:akbarwijayaok@gmail.com" className="text-sm text-gray-500 hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
