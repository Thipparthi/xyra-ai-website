
export const metadata = {
    title: "Contact – XYRA AI",
    description: "Reach out to XYRA AI for demos, support, and collaborations.",
  };
  

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-indigo-400">Get in Touch</h1>
      <p className="mb-8 text-gray-300">
        Whether you're curious about features, a demo, or even press—we're ready to answer any and all questions.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 bg-white/10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-white/10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="How can we help you?"
              className="w-full px-4 py-2 bg-white/10 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-md text-white transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-indigo-400">Email</h2>
            <p className="text-gray-300">support@xyra-ai.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-indigo-400">Phone</h2>
            <p className="text-gray-300">+971 54 769 4886</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-indigo-400">Address</h2>
            <p className="text-gray-300">
              Abu Dhabi, UAE <br /> XYRA AI Private Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
