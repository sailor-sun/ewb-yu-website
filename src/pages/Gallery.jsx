import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg",
];

function Gallery() {
  // Split images into 3 columns so every column starts at the same height
  const columns = [[], [], []];

  images.forEach((image, index) => {
    columns[index % 3].push(image);
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Page Header */}
      <main>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-5">
                {column.map((image, imageIndex) => (
                  <div
                    key={image}
                    className="group relative overflow-hidden bg-gray-100"
                  >
                    <img
                      src={image}
                      alt={`EWB York University gallery ${imageIndex + 1}`}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                  </div>
                ))}
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