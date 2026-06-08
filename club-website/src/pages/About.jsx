export default function About() {
    return (
      <main className="bg-white text-ewbBlue">
  
        <section className="bg-ewbBlue text-white">
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <p className="uppercase tracking-widest text-ewbGold text-sm font-semibold mb-4">
              Engineers Without Borders &middot; York University
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              We are a community of students working toward a more equitable world
              through engineering, leadership, and global development.
            </p>
          </div>
        </section>
  
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Who we are</h2>
          <div className="space-y-4 text-lg leading-relaxed text-ewbBlue/90">
            <p>
              The York University chapter of Engineers Without Borders is a
              student-led group passionate about using technical skills to create
              lasting social impact. We bring together students from all
              disciplines, not just engineering.
            </p>
            <p>
              Since our founding, we have run workshops, fundraisers, and advocacy
              campaigns focused on sustainable development and global citizenship.
            </p>
          </div>
        </section>
  
        <section className="bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">What we do</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-xl p-6 border-t-4 border-ewbBlue shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-ewbBlue/80">
                  Workshops and events that build awareness around global
                  development and ethical engineering.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-t-4 border-ewbGold shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Projects</h3>
                <p className="text-ewbBlue/80">
                  Hands-on initiatives where members apply their skills to
                  real-world community challenges.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-t-4 border-yorkRed shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Advocacy</h3>
                <p className="text-ewbBlue/80">
                  Campaigns that push for systemic change and a fairer, more
                  sustainable world.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="bg-ewbGold">
          <div className="max-w-5xl mx-auto px-6 py-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-ewbBlue mb-4">
              Want to get involved?
            </h2>
            <p className="text-ewbBlue/90 text-lg mb-8 max-w-xl mx-auto">
              Join us at our next meeting or reach out to learn how you can be part
              of the chapter.
            </p>
            <a href="/contact" className="inline-block bg-ewbBlue text-white font-semibold px-8 py-3 rounded-lg hover:bg-ewbBlue/90 transition-colors">
              Contact us
            </a>
          </div>
        </section>
  
      </main>
    );
  }