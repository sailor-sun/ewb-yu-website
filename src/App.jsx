import React from 'react';

function App() {
  return (
    <div className="min-h-screen">
      
      {/* --- NAV BAR: DARK BLUE --- */}
      <nav className="bg-ewb-blue sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo-EWB.png" alt="EWB Logo" className="h-16 w-16 p-1 bg-white rounded-full" />
            <div className="text-white">
              <h1 className="font-bold text-xl leading-tight">EWB</h1>
              <p className="text-xs uppercase tracking-widest text-gray-300">York University</p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-white font-medium">
            <a href="#about" className="hover:text-ewb-gold transition-colors">About Us</a>
            <a href="#events" className="text-ewb-gold">Events</a>
            <a href="#join" className="hover:text-ewb-gold transition-colors">Join</a>
            <a href="#contact" className="hover:text-ewb-gold transition-colors">Contact</a>
          </div>

          <button className="bg-york-red text-white px-6 py-2 rounded-md font-bold hover:scale-105 transition-transform">
            Donate
          </button>
        </div>
      </nav>

      {/* --- MISSION SECTION (About Us) --- */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-york-red font-bold uppercase tracking-widest mb-4">Our Mission</h2>
          <p className="text-3xl md:text-4xl font-bold text-ewb-blue leading-snug">
            We believe in engineering a world where everyone has the opportunity to thrive.
          </p>
          <div className="mt-8 h-1 w-24 bg-ewb-gold mx-auto"></div>
        </div>
      </section>

      {/* --- EVENTS SECTION --- */}
      <section id="events" className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-extrabold text-ewb-blue">Upcoming Events</h2>
              <p className="text-gray-500 mt-2">Join the chapter at Lassonde</p>
            </div>
            <button className="text-ewb-blue font-bold border-b-2 border-ewb-blue pb-1">View All</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
               <div className="h-48 bg-gray-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="p-6">
                 <span className="text-lassonde-teal font-bold text-xs">CAMPAIGN</span>
                 <h3 className="text-xl font-bold mt-2 text-ewb-blue">Flip the Switch</h3>
                 <p className="text-gray-600 mt-3 text-sm leading-relaxed">Sustainable energy advocacy right here on campus.</p>
                 <button className="mt-6 text-york-red font-bold text-sm">LEARN MORE →</button>
               </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
               <div className="h-48 bg-gray-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="p-6">
                 <span className="text-lassonde-plum font-bold text-xs">CONFERENCE</span>
                 <h3 className="text-xl font-bold mt-2 text-ewb-blue">xChange 2026</h3>
                 <p className="text-gray-600 mt-3 text-sm leading-relaxed">Connecting engineers with global social impact goals.</p>
                 <button className="mt-6 text-york-red font-bold text-sm">LEARN MORE →</button>
               </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
               <div className="h-48 bg-gray-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="p-6">
                 <span className="text-ewb-gold font-bold text-xs">FUNDRAISER</span>
                 <h3 className="text-xl font-bold mt-2 text-ewb-blue">Lego Night</h3>
                 <p className="text-gray-600 mt-3 text-sm leading-relaxed">Building community and raising funds for development.</p>
                 <button className="mt-6 text-york-red font-bold text-sm">LEARN MORE →</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-ewb-blue py-12 text-center border-t border-white/10">
        <p className="text-gray-400 text-sm">© 2026 EWB York University. Engineered for Change.</p>
      </footer>

    </div>
  );
}

export default App;