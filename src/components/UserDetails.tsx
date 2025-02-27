"use client";

export default function FormComponent() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold">Your details</h2>

      <form className="mt-4 space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-semibold">1️⃣ Personal Information</h3>
          <input type="text" placeholder="Full Name" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
          <input type="email" placeholder="Email Address" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
          <input type="text" placeholder="Phone Number (Optional)" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
          <input type="text" placeholder="Location (City, Country)" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
        </div>

        {/* Skills & Experience */}
        <div>
          <h3 className="text-lg font-semibold">2️⃣ Skills & Experience</h3>
          <input type="text" placeholder="Key Skills (e.g., JavaScript, Python, UI/UX)" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
          <input type="number" placeholder="Years of Experience" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
          <input type="text" placeholder="Current Job Title (Optional)" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
          <input type="text" placeholder="Education (Degree, University, Graduation Year)" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
        </div>

        {/* Job Preferences */}
        <div>
          <h3 className="text-lg font-semibold">3️⃣ Job Preferences</h3>
          <input type="text" placeholder="Preferred Job Roles (e.g., Frontend Developer, Data Analyst)" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
          <input type="text" placeholder="Job Type (Full-time, Part-time, Remote, Hybrid, Internship)" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
          <input type="text" placeholder="Preferred Industries (Tech, Finance, Healthcare, etc.)" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
          <input type="text" placeholder="Salary Expectations (Optional)" className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded" />
        </div>

        <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-lg w-full hover:bg-purple-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}
