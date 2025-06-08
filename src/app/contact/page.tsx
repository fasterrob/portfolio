"use client";

import { Mail, Github, Linkedin, PhoneCall } from "lucide-react";
import ContactItem from "@/components/ContactItem";

export default function ContactPage() {
  return (
    <section className="h-full p-5 flex flex-col items-center justify-center space-y-5">
      <h1 className="text-3xl font-bold text-center">Contact Me</h1>
      <p className="text-center w-100 text-gray-600 dark:text-gray-400">
        I'm a recent IT graduate actively seeking internship or entry-level
        opportunities where I can contribute and grow. Feel free to reach out
        for job opportunities, collaboration, or any questions about my work!
      </p>
      <div className="flex p-5 gap-10">
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
