export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        {/* Copyright & Name */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Logan Donnelly
          </p>
          {/* Links to Github and LinkedIn */}
          <div className="flex space-x-6">
            <a
                key="Github"
                href="https://github.com/LogesDon"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="Github"
            >
                Github
            </a>
            <a
                key="LinkedIn"
                href="https://www.linkedin.com/in/logandon07/"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                aria-label="LinkedIn"
            >
                LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}