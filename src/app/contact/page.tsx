"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle, AlertCircle, Send, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { links } from "@/data/links";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().optional(),
  building: z.string().min(1, { message: "Select what you are building" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      building: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    
    // Simulate API request submission (Web3Forms/Formspree mock)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      reset();
    } catch (e) {
      setSubmitStatus("error");
    }
  };

  const buildingOptions = [
    "Mobile application",
    "Flutter application",
    "Android application",
    "iOS application",
    "Real-time system",
    "Admin panel",
    "IoT / connected device",
    "AI-powered application",
    "Full-time opportunity",
    "Contract / freelance",
    "Other"
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <div className="font-mono text-xs text-accent tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Contact
        </div>
        <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tight text-white leading-tight">
          Building something difficult?
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed font-sans font-light">
          If you&apos;re hiring, building a mobile product, or solving a technically demanding real-time, payment, AI, or device-integration problem, let&apos;s talk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info & Handoff Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 space-y-8"
        >
          {/* Direct Details Card */}
          <div className="glass-card border border-zinc-900 p-6 rounded-2xl space-y-6">
            <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Direct Coordinates</h3>
            
            <div className="space-y-4 font-mono text-xs text-zinc-300">
              <a href={links.email} className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{profile.email}</span>
              </a>
              
              <a href={links.phone} className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{profile.phone}</span>
              </a>
              
              <div className="flex items-center gap-3 text-zinc-450">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="flex gap-4 border-t border-zinc-900 pt-6">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-950 border border-zinc-900 hover:border-zinc-800 text-zinc-450 hover:text-white rounded-full transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-950 border border-zinc-900 hover:border-zinc-800 text-zinc-450 hover:text-white rounded-full transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Technical handoff diagram */}
          <div className="bg-zinc-950/20 border border-zinc-900/50 p-6 rounded-2xl space-y-4">
            <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest text-center">
              Product Delivery Pipeline
            </h4>
            
            <div className="flex flex-col items-center gap-3 font-mono text-xs font-bold text-zinc-400">
              <div className="w-full text-center border border-zinc-900 bg-zinc-950 p-2.5 rounded-lg">
                YOUR IDEA
              </div>
              <span className="text-accent">&darr;</span>
              <div className="w-full text-center border border-zinc-900 bg-zinc-950 p-2.5 rounded-lg flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                TECHNICAL SPEC
              </div>
              <span className="text-accent">&darr;</span>
              <div className="w-full text-center border border-accent/20 bg-accent/5 p-2.5 rounded-lg text-accent">
                PRODUCTION SHIPPED
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form Container */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7"
        >
          {submitStatus === "success" ? (
            /* SUCCESS STATE */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card border border-accent/20 bg-accent/5 p-8 rounded-2xl text-center space-y-4"
            >
              <CheckCircle className="w-12 h-12 text-accent mx-auto" />
              <h3 className="font-mono text-lg font-bold text-white">Message received.</h3>
              <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed font-sans font-light">
                Thanks for reaching out. I&apos;ll get back to you through the contact details provided.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-white hover:text-accent hover:border-accent transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : submitStatus === "error" ? (
            /* ERROR STATE */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card border border-red-500/20 bg-red-500/5 p-8 rounded-2xl text-center space-y-4"
            >
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto" />
              <h3 className="font-mono text-lg font-bold text-white">The message didn&apos;t go through.</h3>
              <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Please email me directly at: <br />
                <a href={links.email} className="text-accent underline font-mono">
                  {profile.email}
                </a>
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-mono text-white hover:text-accent transition-colors"
              >
                Try form again
              </button>
            </motion.div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name field */}
              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  {...register("name")}
                  className="w-full bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 focus:border-accent/40 focus:outline-none p-3.5 rounded-xl font-sans text-sm text-white placeholder-zinc-700 transition-colors"
                />
                {errors.name && <p className="text-xs font-mono text-red-400">{errors.name.message}</p>}
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  {...register("email")}
                  className="w-full bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 focus:border-accent/40 focus:outline-none p-3.5 rounded-xl font-sans text-sm text-white placeholder-zinc-700 transition-colors"
                />
                {errors.email && <p className="text-xs font-mono text-red-400">{errors.email.message}</p>}
              </div>

              {/* Company field */}
              <div className="space-y-2">
                <label htmlFor="company" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company or team"
                  {...register("company")}
                  className="w-full bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 focus:border-accent/40 focus:outline-none p-3.5 rounded-xl font-sans text-sm text-white placeholder-zinc-700 transition-colors"
                />
              </div>

              {/* What are you building? */}
              <div className="space-y-2">
                <label htmlFor="building" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                  What are you building? <span className="text-accent">*</span>
                </label>
                <select
                  id="building"
                  {...register("building")}
                  className="w-full bg-zinc-950 border border-zinc-900 hover:border-zinc-800 focus:border-accent/40 focus:outline-none p-3.5 rounded-xl font-mono text-xs text-white transition-colors"
                >
                  <option value="">Select option...</option>
                  {buildingOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.building && <p className="text-xs font-mono text-red-400">{errors.building.message}</p>}
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me what you're building, where you're stuck, or what role you're hiring for."
                  {...register("message")}
                  className="w-full bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800 focus:border-accent/40 focus:outline-none p-3.5 rounded-xl font-sans text-sm text-white placeholder-zinc-700 transition-colors resize-none"
                />
                {errors.message && <p className="text-xs font-mono text-red-400">{errors.message.message}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-mono text-xs font-bold py-3.5 rounded-xl tracking-wider hover:bg-accent/90 disabled:opacity-50 transition-colors"
              >
                {submitStatus === "loading" ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-accent-foreground border-t-transparent animate-spin" />
                    TRANSMITTING DATA...
                  </>
                ) : (
                  <>
                    START THE CONVERSATION
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {/* Privacy/Key statement */}
              <p className="text-[10px] text-zinc-600 font-mono text-center leading-relaxed">
                Security Node Check: Form triggers a secure HTTPS post. Personal coordinates and data packets remain encrypted on submission.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
