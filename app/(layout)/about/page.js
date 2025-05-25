// ssg
function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our platform! We are dedicated to providing the best
          services and user experience.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our goal is to build a community where users can connect, share, and
          enjoy content in a seamless and enjoyable way.
        </p>
        <p className="text-lg text-gray-700">
          {`Feel free to explore and reach out to us for more information. We're here to help!`}
        </p>
      </div>
    </div>
  );
}

export default About;
