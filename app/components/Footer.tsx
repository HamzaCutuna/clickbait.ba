import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Clickbait
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
              Vaš partner za online prisustvo. Gradimo moderne web stranice koje donose rezultate.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold text-white mb-6">Brze veze</h4>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 transform">
                Početna
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 transform">
                Blog
              </Link>
              <Link href="/kontakt" className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 transform">
                Kontakt
              </Link>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold text-white mb-6">Kontakt</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-400">hcutuna@gmail.com</p>
              <p className="text-gray-400">+387 61 496 745</p>
            </div>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href="https://www.linkedin.com/in/hamza-cutuna" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <span className="text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">in</span>
              </a>
              <a 
                href="https://www.facebook.com/clickbait.ba/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">f</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 <span className="text-emerald-400 font-semibold">Clickbait</span>. Sva prava zadržana.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 