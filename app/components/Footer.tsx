export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="text-2xl">🐱</span>
              <span className="text-xl font-black text-teal-400">Pattnip</span>
            </div>
            <p className="text-gray-400 text-sm">Hecho con amor, para ti 💚</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {['🧶 Amigurumis', '🎮 Personajes', '🫧 Jabones', '🎨 Arcilla'].map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>© 2025 Pattnip</p>
            <p className="text-gray-600 text-xs mt-1">Productos artesanales únicos</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
