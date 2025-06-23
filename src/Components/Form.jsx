import { useState } from "react";
import { supabase } from "../lib/supabaseClient"; 

export default function Form() {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setSubmitted(false);

      const { error } = await supabase.from("messages").insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
      ]);

      setLoading(false);

      if (error) {
        alert("Something went wrong. Please try again.")
        console.log(error);
      } else {
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", message: ""})
      }
    };

    return (
      <div className="h-fit py-5 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Fill out the form below and I will get back to you within 24 hours.
          </p>
  
          <form className="space-y-6 bg-white shadow-md p-8 rounded-xl" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Dark"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  placeholder="Knight"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your message..."
                onChange={handleChange}
                value={formData.message}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="text-green-600 font-medium text-center mt-4">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }
  