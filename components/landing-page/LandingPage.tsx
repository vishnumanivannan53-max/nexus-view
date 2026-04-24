'use client';

import React from "react";
import { cn } from "@/lib/utils";
import { NeoButton } from "./NeoButton";
import { 
  Check, 
  X, 
  Briefcase, 
  MessageSquare, 
  Zap, 
  Search, 
  ArrowRight,
  Menu,
  Star,
  Shield,
  Layout,
  Globe,
  GitGraph as Github,
  Bird as Twitter, 
  PowerSquareIcon as Linkedin,

} from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen font-satoshi bg-white">
      <Navbar />
      <Hero />
      <SocialProofMarquee />
      <ProblemSolution />
      <FeatureGrid />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-20 bg-primary-yellow border-b-2 border-black z-50 px-4 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-black flex items-center justify-center">
          <Zap className="text-primary-yellow w-6 h-6 fill-primary-yellow" />
        </div>
        <span className="font-cabinet text-2xl font-extrabold tracking-tighter">NEXUS</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-bold">
        <a href="#features" className="hover:underline">Features</a>
        <a href="#how-it-works" className="hover:underline">Process</a>
        <a href="#testimonials" className="hover:underline">Results</a>
        <a href="#pricing" className="hover:underline">Pricing</a>
      </div>

      <div className="flex items-center gap-4">
        <NeoButton variant="primary" size="sm" className="hidden sm:block">
          Start Free Trial
        </NeoButton>
        <Menu className="md:hidden w-8 h-8 cursor-pointer" />
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 bg-primary-yellow border-b-2 border-black relative overflow-hidden">
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block bg-white border-2 border-black px-4 py-1.5 rounded-full font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            NEW: AI Content Assistant 2.0
          </div>
          
          <h1 className="font-cabinet text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter text-black">
            GET HIRED <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>FASTER</span> <br />
            WITH AI
          </h1>
          
          <p className="text-xl md:text-2xl font-medium max-w-lg">
            Nexus helps students land their dream jobs with AI-powered resume analysis, mock interviews, and automated applications.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <NeoButton variant="primary" size="lg" className="shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Get Started Free
            </NeoButton>
            <NeoButton variant="secondary" size="lg" className="bg-white">
              Watch Demo
            </NeoButton>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white border-2 border-black rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 bg-black border-b-2 border-black flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="p-6 bg-white min-h-[400px]">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-sage-accent p-4 border-2 border-black rounded-lg">
                  <div className="w-full h-32 bg-white/50 border-2 border-black/10 rounded mb-4" />
                  <div className="w-3/4 h-4 bg-black/20 rounded mb-2" />
                  <div className="w-1/2 h-4 bg-black/20 rounded" />
                </div>
                <div className="space-y-4">
                  <div className="bg-charcoal-dark p-4 border-2 border-black rounded-lg h-24" />
                  <div className="bg-primary-yellow p-4 border-2 border-black rounded-lg h-24" />
                  <div className="bg-white p-4 border-2 border-black rounded-lg h-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProofMarquee() {
  const brands = ["ACME CORP", "GLOBEX", "SOYLENT CORP", "INITECH", "UMBRELLA", "OCP", "Hooli", "STARK IND"];
  return (
    <div className="bg-charcoal-dark border-b-2 border-black py-8 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-20 items-center mx-10">
            {brands.map((brand) => (
              <span key={brand} className="font-cabinet text-3xl font-extrabold text-sage-accent opacity-50">
                {brand}
              </span>
            ))}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

function ProblemSolution() {
  return (
    <section className="py-24 bg-white px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-10 bg-gray-50 border-2 border-dashed border-gray-400 rounded-[3rem] opacity-70">
          <h3 className="font-cabinet text-3xl font-extrabold mb-6">The Struggle</h3>
          <ul className="space-y-4">
            {[
              "Endless manual job applications",
              "Generic resumes ignored by ATS",
              "Anxiety during mock interviews",
              "Scattered study materials"
            ].map(item => (
              <li key={item} className="flex items-center gap-3 font-bold text-gray-600">
                <div className="bg-red-100 p-1 rounded-full"><X className="w-5 h-5 text-red-600" /></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="p-10 bg-primary-yellow border-2 border-black rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="font-cabinet text-3xl font-extrabold mb-6">The Nexus Solution</h3>
          <ul className="space-y-4">
            {[
              "Automated application tracking",
              "AI resume tailoring (100% ATS-friendly)",
              "Real-time feedback mock interviews",
              "Personalized prep curriculum"
            ].map(item => (
              <li key={item} className="flex items-center gap-3 font-bold text-black">
                <div className="bg-black p-1 rounded-full"><Check className="w-5 h-5 text-white" /></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const features = [
    { title: "AI Resume Builder", desc: "Build ATS-optimized resumes in seconds with real-time feedback.", icon: Briefcase },
    { title: "Mock Interviewer", desc: "Practice with our AI that listens and gives performance scoring.", icon: MessageSquare },
    { title: "Auto-Apply", desc: "Our bot applies to matches automatically based on your preferences.", icon: Zap },
    { title: "Smart Prep", desc: "Curated learning paths tailored to specific company roles.", icon: Search },
    { title: "Network Pro", desc: "AI-suggested networking templates for LinkedIn reach outs.", icon: Globe },
    { title: "Career Tracker", desc: "A kanban-style dashboard for every single application stage.", icon: Layout }
  ];

  return (
    <section id="features" className="py-24 bg-primary-yellow border-y-2 border-black px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-cabinet text-5xl md:text-7xl font-extrabold mb-16 text-center">TOOLS FOR SUCCESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group bg-white p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="w-16 h-16 bg-sage-accent border-2 border-black flex items-center justify-center mb-6 group-hover:bg-primary-yellow transition-colors">
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="font-cabinet text-2xl font-extrabold mb-4">{f.title}</h3>
              <p className="font-medium text-black/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { label: "UPLOAD", desc: "Your current resume and target roles.", color: "bg-sage-accent" },
    { label: "TRAIN", desc: "Mock interviews with personalized AI.", color: "bg-primary-yellow" },
    { label: "APPLY", desc: "Automated high-quality submissions.", color: "bg-white" }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-charcoal-dark text-white px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-cabinet text-5xl md:text-7xl font-extrabold mb-24 text-center">HOW IT WORKS</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 hidden md:block -translate-y-1/2 z-0" />
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-[200px]">
              <div className={cn(
                "w-24 h-24 rounded-full border-4 border-black mb-6 flex items-center justify-center font-cabinet text-4xl font-extrabold text-black",
                s.color,
                "shadow-[0_0_20px_rgba(183,198,194,0.3)]"
              )}>
                {i + 1}
              </div>
              <h4 className="text-2xl font-extrabold mb-2">{s.label}</h4>
              <p className="text-gray-400 font-bold">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="py-24 bg-white px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-cabinet text-5xl md:text-7xl font-extrabold mb-16 text-center">FOR EVERY STUDENT</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-sage-accent p-8 border-2 border-black rounded-xl">
            <span className="bg-white px-3 py-1 border-2 border-black font-bold text-xs rounded-full mb-6 inline-block">FRESH GRAD</span>
            <h3 className="font-cabinet text-3xl font-extrabold mt-4 mb-4">Launch Your Career</h3>
            <p className="font-bold mb-6 opacity-80">Bridge the gap between campus and the boardroom with tailored preps.</p>
            <div className="w-full h-32 bg-white/30 border-2 border-black/10 rounded-lg" />
          </div>
          
          <div className="bg-primary-yellow p-8 border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform md:-rotate-1">
            <span className="bg-white px-3 py-1 border-2 border-black font-bold text-xs rounded-full mb-6 inline-block">FINAL YEAR</span>
            <h3 className="font-cabinet text-3xl font-extrabold mt-4 mb-4">Placement Pro</h3>
            <p className="font-bold mb-6">Dominate campus placements with AI mock interviews and resume optimization.</p>
            <div className="w-full h-32 bg-black/10 border-2 border-black/10 rounded-lg" />
          </div>
          
          <div className="bg-charcoal-dark text-white p-8 border-2 border-black rounded-xl">
            <span className="bg-white text-black px-3 py-1 border-2 border-black font-bold text-xs rounded-full mb-6 inline-block">INTERNS</span>
            <h3 className="font-cabinet text-3xl font-extrabold mt-4 mb-4">Grab Internships</h3>
            <p className="font-bold mb-6 opacity-80">Automate your hunt for the best summer internships at top firms.</p>
            <div className="w-full h-32 bg-white/5 border-2 border-black/10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-sage-accent border-y-2 border-black px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-cabinet text-5xl md:text-7xl font-extrabold mb-16 text-center text-black">SUCCESS STORIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alex Chen", role: "Software Engineer @ Google", text: "Nexus automated my applications and helped me prep for the system design rounds. I got 4 offers!" },
            { name: "Sarah Miller", role: "Product Manager @ Meta", text: "The AI mock interviewer is scary good. It caught my filler words and helped me structure my answers." },
            { name: "Rahul Gupta", role: "Data Scientist @ Stripe", text: "Resume tailoring was a game changer. My response rate went from 5% to 60% in just two weeks." }
          ].map((t, i) => (
            <div key={i} className={cn(
              "bg-white p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
              "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-[2px] rounded-br-[2px]"
            )}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-[#ffbc2e] text-[#ffbc2e]" />)}
              </div>
              <p className="font-bold text-lg mb-6 italic">"{t.text}"</p>
              <div>
                <h5 className="font-cabinet font-extrabold">{t.name}</h5>
                <p className="text-sm font-bold opacity-60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 bg-primary-yellow px-4 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-cabinet text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter">READY TO GET HIRED?</h2>
        <p className="text-2xl font-bold mb-12 max-w-2xl mx-auto">Join 50,000+ students landing jobs at top tech companies worldwide.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <NeoButton variant="primary" size="lg" className="shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            Join Nexus Now
          </NeoButton>
          <NeoButton variant="outline" size="lg" className="bg-white">
            View Pricing
          </NeoButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal-dark text-white border-t-2 border-black py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-yellow flex items-center justify-center">
              <Zap className="text-black w-6 h-6 fill-black" />
            </div>
            <span className="font-cabinet text-2xl font-extrabold tracking-tighter text-white">NEXUS</span>
          </div>
          <p className="font-bold opacity-60 mb-8">The ultimate career accelerator for the modern student.</p>
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <div key={i} className="w-10 h-10 bg-[#272727] border-2 border-white/20 flex items-center justify-center hover:bg-primary-yellow hover:border-black hover:text-black transition-all cursor-pointer">
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h6 className="font-cabinet text-xl font-extrabold mb-6">Product</h6>
          <ul className="space-y-4 font-bold opacity-60">
            <li className="hover:text-primary-yellow cursor-pointer">AI Resume</li>
            <li className="hover:text-primary-yellow cursor-pointer">Mock Interviews</li>
            <li className="hover:text-primary-yellow cursor-pointer">Auto-Apply</li>
            <li className="hover:text-primary-yellow cursor-pointer">Prep Material</li>
          </ul>
        </div>
        
        <div>
          <h6 className="font-cabinet text-xl font-extrabold mb-6">Company</h6>
          <ul className="space-y-4 font-bold opacity-60">
            <li className="hover:text-primary-yellow cursor-pointer">About</li>
            <li className="hover:text-primary-yellow cursor-pointer">Careers</li>
            <li className="hover:text-primary-yellow cursor-pointer">Blog</li>
            <li className="hover:text-primary-yellow cursor-pointer">Contact</li>
          </ul>
        </div>
        
        <div>
          <h6 className="font-cabinet text-xl font-extrabold mb-6">Legal</h6>
          <ul className="space-y-4 font-bold opacity-60">
            <li className="hover:text-primary-yellow cursor-pointer">Privacy</li>
            <li className="hover:text-primary-yellow cursor-pointer">Terms</li>
            <li className="hover:text-primary-yellow cursor-pointer">Cookie Policy</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 font-bold opacity-40 text-sm">
        <p>© 2026 Nexus Career AI. All rights reserved.</p>
        <div className="flex gap-8">
          <span>Built for the future.</span>
          <span>Open source soon.</span>
        </div>
      </div>
    </footer>
  );
}
