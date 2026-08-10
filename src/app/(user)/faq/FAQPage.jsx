"use client"
import { useState } from "react";

import { CTABanner, FAQ, PageHero, Section } from "@/components/site/Shared";
import { Search } from "lucide-react";


 

const groups = {
  General: [
    { q: "What is HireTopCoder?", a: "A curated marketplace connecting companies with vetted engineering talent." },
    { q: "How are you different from freelance platforms?", a: "We pre-vet every engineer through a 5-stage process and provide success management." },
  ],
  Pricing: [
    { q: "How does pricing work?", a: "Hourly or monthly retainer based on seniority and location. No recruiter fees." },
    { q: "Are there any setup fees?", a: "Never." },
  ],
  Process: [
    { q: "How fast can I hire?", a: "Most engagements start within 48–72 hours." },
    { q: "What if it doesn't work out?", a: "Free replacement within 7 days." },
  ],
  Tech: [
    { q: "What stacks do you cover?", a: "50+ stacks across web, mobile, AI, DevOps, and no-code." },
    { q: "Do you handle data security?", a: "Yes — GDPR, SOC 2 Type II, NDAs by default." },
  ],
};


export default function FAQPage() {
  const [cat, setCat] = useState("General");
  const [query, setQuery] = useState("");
  const items = groups[cat].filter((i) => i.q.toLowerCase().includes(query.toLowerCase()));
  return (
   <main className="pt-20 md:pt-28  w-full"    >
<PageHero
  eyebrow="Help Centre"
  title={
    <>
      Frequently Asked{" "}
      <span className="text-primary">Questions</span>
    </>
  }
  sub="Answers to what teams ask before, during, and after they hire with us."
  titleClassName="font-display font-bold leading-[0.95] text-[clamp(2.2rem,6vw,5.5rem)] md:text-[clamp(2.5rem,6vw,6rem)] 2xl:text-[clamp(2.8rem,7vw,6.5rem)]"
/>


      <Section className="  ">
        <div className="flex flex-wrap justify-center md:gap-2 mb-5 md:mb-10">
          {(Object.keys(groups)).map((c) => (
           <button
  key={c}
  onClick={() => setCat(c)}
  className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition hover-glow-card ${
    cat === c
      ? "bg-gradient-to-r from-primary to-accent text-white"
      : "bg-[oklch(0.18_0.02_290_/_0.7)] text-foreground/70 hover:text-white"
  }`}
>
  {c}
</button>
          ))}
        </div>
        <FAQ items={items} />
      </Section>
      <CTABanner title="Still have questions?" sub="Hop on a quick call and get specific answers for your team." ctaLabel="Talk to Expert" />
    </   main >
  );
}
