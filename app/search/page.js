// Inside your SearchBar.jsx or SearchBar.js
export default function SearchBar({ C, searchQuery, setSearchQuery, searchCity, setSearchCity }) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl md:rounded-full p-2 shadow-xl gap-2">
        
        {/* Input 1: Keyword */}
        <div className="relative w-full flex items-center border-b md:border-b-0 md:border-r border-gray-100 p-2">
          <Search className="absolute left-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Local vloggers..."
            className="w-full pl-10 pr-4 py-2 outline-none text-gray-700 bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Input 2: City */}
        <div className="relative w-full flex items-center p-2">
          <MapPin className="absolute left-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="City or area"
            className="w-full pl-10 pr-4 py-2 outline-none text-gray-700 bg-transparent"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
        </div>

        {/* Action Button */}
        <button 
          className="w-full md:w-auto px-8 py-3 rounded-xl md:rounded-full font-bold text-white transition-all hover:scale-105"
          style={{ background: '#397754' }}
        >
          Search
        </button>
      </div>
    </div>
  );
}