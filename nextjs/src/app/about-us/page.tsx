
export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NewsHub</h1>
          <p className="text-xl opacity-90">
            Delivering trusted news and information to communities worldwide
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                At NewsHub, we believe that access to accurate, timely, and
                unbiased news is fundamental to a well-informed society. Our
                mission is to provide comprehensive coverage of local, national,
                and international events that shape our world.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2020, we have grown to become a trusted source for
                millions of readers who rely on us for breaking news, in-depth
                analysis, and thoughtful commentary on the issues that matter
                most.
              </p>
              <p className="text-lg text-gray-600">
                Our team of experienced journalists and editors work around the
                clock to ensure that you receive the most accurate and
                up-to-date information possible.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold">NewsHub Newsroom</h3>
                  <p className="text-lg opacity-90">
                    Where stories come to life
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Accuracy</h3>
                <p className="text-gray-600">
                  We verify every story through multiple sources and
                  fact-checking processes to ensure accuracy.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Impartiality</h3>
                <p className="text-gray-600">
                  We present news without bias, allowing readers to form their
                  own informed opinions.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Timeliness</h3>
                <p className="text-gray-600">
                  We deliver breaking news as it happens while maintaining our
                  commitment to accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              NewsHub is committed to serving our readers with the highest
              standards of journalism. We believe in transparency,
              accountability, and the public's right to know. Our editorial
              independence ensures that we can report on important issues
              without external influence, making us a trusted voice in today's
              media landscape.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
