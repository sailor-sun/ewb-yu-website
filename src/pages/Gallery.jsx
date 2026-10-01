import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = Object.values(
  import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

function Gallery() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-york-red mb-5">
              EWB × York U.
            </p>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              Gallery
            </h1>

            <p className="mt-8 text-lg md:text-xl font-serif italic text-gray-600 max-w-xl leading-relaxed">
              A look into the people, events, and moments that make our
              community.
            </p>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
            {images.map((image, index) => (
              <div
                key={image}
                className="group relative overflow-hidden bg-gray-100 mb-5 break-inside-avoid"
              >
                <img
                  src={image}
                  alt={`EWB York University gallery ${index + 1}`}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Gallery;