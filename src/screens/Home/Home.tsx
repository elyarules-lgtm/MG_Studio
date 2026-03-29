import { useState, useEffect, useRef } from 'react';

export const Home = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const classes = [
    {
      name: "Pole Dance",
      description: "Learn spins, tricks and graceful combos while building full-body power and confidence."
    },
    {
      name: "Aerial Hoop",
      description: "Master elegant poses and dynamic movements on the hoop, developing strength and grace."
    },
    {
      name: "Aerial Hammock",
      description: "Experience the freedom of flying with silk hammocks, perfect for all levels."
    },
    {
      name: "Stretching",
      description: "Improve your flexibility and mobility with guided stretching sessions."
    },
    {
      name: "Dance Fitness",
      description: "Get your cardio in with fun, energetic dance workouts that boost mood and fitness."
    },
    {
      name: "Yoga",
      description: "Connect mind and body through mindful movement and breathing practices."
    },
    {
      name: "Pole Dance Advanced",
      description: "Take your pole skills to the next level with advanced tricks and combinations."
    },
    {
      name: "Aerial Silk",
      description: "Soar through the air with flowing silk, building strength and artistry."
    },
    {
      name: "Flexibility Training",
      description: "Deep stretching and mobility work to increase your range of motion."
    },
    {
      name: "Contemporary Dance",
      description: "Express yourself through fluid, modern dance movements and techniques."
    },
    {
      name: "Strength Conditioning",
      description: "Build functional strength with exercises designed for dancers and athletes."
    },
    {
      name: "Community Classes",
      description: "Join our community for fun, welcoming group classes for all levels."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const extendedClasses = [...classes, ...classes, ...classes];

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + extendedClasses.length) % extendedClasses.length);
  };

  const handleTransitionEnd = () => {
    if (currentSlide >= classes.length * 2) {
      setCurrentSlide(classes.length);
    } else if (currentSlide < classes.length) {
      setCurrentSlide(currentSlide + classes.length);
    }
  };

  const getCardScale = (index: number) => {
    const centerIndex = Math.floor(cardsPerView / 2);
    const distance = Math.abs(index % cardsPerView - centerIndex);
    return distance === 0 ? 1.1 : 0.9;
  };

  return (
    <div className="bg-white w-full">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <img
              src="/logo_mg.svg"
              alt="MGold Studio"
              className="h-12 w-auto"
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="https://mobifitness.ru/widget/demo/rasp/508250"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#6071E5] font-medium transition-colors text-sm"
              >
                Schedule
              </a>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-700 hover:text-[#6071E5] font-medium transition-colors text-sm flex items-center gap-1"
                >
                  Our Classes
                  <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                    {classes.map((cls, index) => (
                      <a
                        key={index}
                        href="#classes"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-[#838EFA]/10 hover:to-[#6071E5]/10 hover:text-[#6071E5] transition-colors text-sm"
                      >
                        {cls.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#location"
                onClick={(e) => {
                  e.preventDefault();
                  const locationSection = document.getElementById('location');
                  locationSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-700 hover:text-[#6071E5] font-medium transition-colors text-sm"
              >
                Contacts
              </a>
            </div>

            <a
              href="https://mobifitness.ru/widget/demo/rasp/508250"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#838EFA] to-[#6071E5] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f2ff] via-white to-white z-0" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#838EFA] rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#6071E5] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-[#7080E5] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#838EFA] to-[#6071E5] bg-clip-text text-transparent">
              Find Your Strength
            </span>
            <br />
            <span className="text-gray-800">in Motion</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pole dance, aerial arts, stretching & dance fitness in the heart of Larnaca
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://mobifitness.ru/widget/demo/rasp/508250"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#838EFA] to-[#6071E5] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 text-lg w-full sm:w-auto"
            >
              Book a Class
            </a>
            <a
              href="https://mobifitness.ru/widget/demo/rasp/508250"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6071E5] hover:text-[#4a5ab8] font-medium text-lg transition-colors underline underline-offset-4"
            >
              View Schedule
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-12">
              <span className="font-bold text-gray-900">MGold Studio</span> in Larnaca is a space for anyone who wants to feel strong, flexible and confident through movement. We offer pole dance, aerial hoop and hammocks, stretching, yoga and dance fitness classes in a safe and supportive environment, for complete beginners and advanced students alike.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center">
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#838EFA] to-[#6071E5] bg-clip-text text-transparent mb-3">
                  10+
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Different Dance Styles</h3>
                <p className="text-gray-600 text-sm mt-2">Explore diverse movement disciplines</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#838EFA] to-[#6071E5] bg-clip-text text-transparent mb-3">
                  50+
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Classes Per Week</h3>
                <p className="text-gray-600 text-sm mt-2">Flexible scheduling for everyone</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#838EFA] to-[#6071E5] bg-clip-text text-transparent mb-3">
                  100+
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Happy Participants</h3>
                <p className="text-gray-600 text-sm mt-2">Join our thriving community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0f2ff] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#838EFA] to-[#6071E5] bg-clip-text text-transparent">
            What We Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#838EFA] to-[#6071E5] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Joyful Movement</h3>
              <p className="text-gray-600 leading-relaxed">
                Training as a highlight of the day, not a punishment. We believe movement should bring joy, energy and excitement to your life.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#838EFA] to-[#6071E5] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supportive Community</h3>
              <p className="text-gray-600 leading-relaxed">
                All levels welcome, friendly coaches and students. We create a warm, inclusive space where everyone can grow at their own pace.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-[#838EFA] to-[#6071E5] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strength & Confidence</h3>
              <p className="text-gray-600 leading-relaxed">
                Build real strength, flexibility and self-confidence. Discover what your body is capable of and feel empowered every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section with Infinite Slider */}
      <section id="classes" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#838EFA] to-[#6071E5] bg-clip-text text-transparent">
            Our Classes
          </h2>

          <div className="relative group">
            {/* Slider Container */}
            <div className="overflow-hidden">
              <div
                className="flex gap-8 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
                  transitionDuration: currentSlide !== Math.floor(currentSlide) ? '0ms' : '500ms'
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedClasses.map((cls, index) => {
                  const displayIndex = index % classes.length;
                  const cardPosition = index % cardsPerView;
                  const scale = getCardScale(cardPosition);

                  return (
                    <div
                      key={index}
                      className="flex-shrink-0"
                      style={{ width: `${100 / cardsPerView}%` }}
                    >
                      <div
                        className="transform transition-all duration-500 ease-out mx-2 h-full"
                        style={{
                          scale: scale
                        }}
                      >
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                          <div className="aspect-[4/5] bg-gradient-to-br from-[#838EFA]/20 to-[#6071E5]/20 relative overflow-hidden">
                            <img
                              src="/image.png"
                              alt={cls.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                          </div>
                          <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{cls.name}</h3>
                            <p className="text-gray-600 mb-4 flex-grow">
                              {cls.description}
                            </p>
                            <a
                              href="https://mobifitness.ru/widget/demo/rasp/508250"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-gradient-to-r from-[#838EFA] to-[#6071E5] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all"
                            >
                              Book This Class
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-gradient-to-r from-[#838EFA] to-[#6071E5] text-white p-3 rounded-full hover:shadow-lg transition-all -ml-6 hover:scale-110 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-gradient-to-r from-[#838EFA] to-[#6071E5] text-white p-3 rounded-full hover:shadow-lg transition-all -mr-6 hover:scale-110 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: classes.length }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(classes.length + i)}
                  className={`h-3 rounded-full transition-all ${
                    Math.floor(currentSlide % classes.length) === i
                      ? 'bg-gradient-to-r from-[#838EFA] to-[#6071E5] w-8'
                      : 'bg-gray-300 w-3'
                  }`}
                  aria-label={`Go to class ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Location Section */}
      <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f0f2ff] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#838EFA] to-[#6071E5] bg-clip-text text-transparent">
            Find Us in Larnaca
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Studio</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#6071E5] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">MGold Dance Studio</p>
                    <p className="text-gray-600">Larnaca, Cyprus</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#6071E5] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Contact us on Instagram</p>
                    <a
                      href="https://www.instagram.com/mgold.studio.cy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6071E5] hover:text-[#4a5ab8] underline"
                    >
                      @mgold.studio.cy
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/MGold+dance+studio/@34.9242702,33.626029,16z/data=!4m10!1m2!2m1!1spole+dance!3m6!1s0x14de29006ff80e67:0x2a17eca2645f61fd!8m2!3d34.9242461!4d33.6262057!15sCgpwb2xlIGRhbmNlWgwiCnBvbGUgZGFuY2WSAQpkYW5jZV9oYWxsmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4YU1XRXhaRU5SZWtaUlpHdG9jbUZHU2xCa1YwNUxWR3hDUjFkclJSQULgAQD6AQQIPBA3!16s%2Fg%2F11ynzy6knd?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#838EFA] to-[#6071E5] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all w-full text-center"
              >
                Get Directions
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5789!2d33.626029!3d34.9242461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de29006ff80e67%3A0x2a17eca2645f61fd!2sMGold%20dance%20studio!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <img
            src="/logo_mg.svg"
            alt="MGold Studio"
            className="h-12 w-auto mx-auto mb-4"
          />
          <p className="text-gray-400 mb-6">
            Find Your Strength in Motion
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/mgold.studio.cy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#838EFA] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 MGold Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
