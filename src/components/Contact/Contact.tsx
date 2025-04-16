"use client";

import { useRef, useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  // Initialize AOS only on the client to prevent hydration mismatch
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
        <h3 className="text-4xl font-extrabold mb-6">Get In Touch</h3>
      </div>

      <div className="max-w-2xl mx-auto mt-12" data-aos="fade-up">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <h4 className="text-2xl font-bold mb-4 text-white">Send a Message</h4>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Send
          </button>

          {messageSent && (
            <p className="text-green-400 mt-4">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
}
