"use client";

import { Mail, Github, Linkedin, PhoneCall } from "lucide-react";
import ContactItem from "@/components/ContactItem";

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Contact
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Got a question or want to collaborate? Feel free to reach out.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 space-y-4">
        <ContactItem
          icon={<Mail className="w-5 h-5" />}
          label="Email"
          link="mailto:thatchanin.m@gmail.com"
          text="thatchanin.m@gmail.com"
        />
        <ContactItem
          icon={<Github className="w-5 h-5" />}
          label="GitHub"
          link="https://github.com/fasterrob"
          text="github.com/fasterrob"
        />
        <ContactItem
          icon={<Linkedin className="w-5 h-5" />}
          label="LinkedIn"
          link="https://www.linkedin.com/in/thatchanin-moonphon-6b6727289/"
          text="linkedin.com/in/thatchanin-moonphon-6b6727289/"
        />
        <ContactItem
          icon={<PhoneCall className="w-5 h-5" />}
          label="Phone"
          link="tel:+6695-940-9951"
          text="+66 95-940-9951"
        />
      </div>
    </section>
  );
}
