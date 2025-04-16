"use client";

import { useRef, useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      console.log("Form ref is null!");
      return;
    }

    emailjs
      .sendForm(
        "service_fyb4ocu",
        "template_wsiifzn",
        form.current,
        "Ce75P7q6o9ynEUnyY"
      )
      .then(
        () => {
          setMessageSent(true);
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h3 className="md:text-4xl font-extrabold mb-6 flex items-center justify-center gap-2">
          <FaEnvelope className="text-blue-400" />
          Get In Touch
        </h3>
        <p className="text-gray-300 text-lg">
          I'd love to hear from you! Whether you have a question or just want to say hi.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mt-12" data-aos="fade-up">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-gray-800 p-10 rounded-2xl shadow-xl border border-gray-700"
        >
          <h4 className="md:text-2xl font-bold text-white flex items-center gap-2">
            <FaPaperPlane className="text-green-400 text-sm md:text-xl" />
            Send a Message
          </h4>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full text-sm md:text-xl px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full text-sm md:text-xl px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className="w-full text-sm md:text-xl px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>

          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 mx-auto cursor-pointer"
          >
            <FaPaperPlane className="text-sm md:text-xl" />
            <span className="text-sm md:text-xl">Send Message</span>
          </button>

          {messageSent && (
            <p className="text-green-400 text-sm md:text-xl md:mt-4 text-center font-semibold">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
