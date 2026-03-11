import { useState } from "react";
import { Mail, PawPrint, ArrowRight, Heart, Instagram, Users, Eye, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.jpeg";

const WEB3FORMS_KEY = "0321222c-dae1-407c-b7da-f70eb9bc2161";

const programs = [
  {
    emoji: "👟",
    title: "Shoe Drive Fundraisers",
    description:
      "Collect gently used shoes to raise funds for animal shelters and rescue organizations.",
  },
  {
    emoji: "🧦",
    title: "Pet-Themed Sock Sales",
    description:
      "Fun paw-print socks with all proceeds supporting animal welfare programs.",
  },
  {
    emoji: "🧣",
    title: "Blanket & Supply Drives",
    description:
      "Gather blankets, toys, and essentials for shelter animals awaiting their forever homes.",
  },
  {
    emoji: "🦃",
    title: "Thanksgiving Pet Food Drive",
    description:
      "Holiday pet food collection ensuring shelter animals and pets in need are fed.",
  },
];

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#partners", label: "Partners" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New message from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Paws in Action" className="w-9 h-9 rounded-full" />
            <span className="font-display font-bold text-lg text-foreground">
              Paws in Action
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/_pawsinaction_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button size="sm" className="rounded-full px-5 gap-1.5" asChild>
              <a href="#contact">
                Get Involved
                <PawPrint className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 md:py-36 bg-hero-gradient overflow-hidden">
        <PawPrint className="absolute top-16 left-[10%] h-16 w-16 paw-float" style={{ color: "hsl(var(--paw-1) / 0.5)" }} />
        <PawPrint className="absolute top-32 right-[15%] h-12 w-12 paw-float" style={{ color: "hsl(var(--paw-2) / 0.45)", animationDelay: "2s" }} />
        <PawPrint className="absolute bottom-20 left-[20%] h-10 w-10 paw-float" style={{ color: "hsl(var(--paw-1) / 0.4)", animationDelay: "4s" }} />
        <PawPrint className="absolute bottom-32 right-[25%] h-14 w-14 paw-float" style={{ color: "hsl(var(--paw-2) / 0.4)", animationDelay: "1s" }} />

        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <div className="mb-8 relative">
            <img
              src={logo}
              alt="Paws in Action logo"
              className="w-36 md:w-48 rounded-2xl shadow-lg ring-4 ring-border"
            />
            <span className="absolute -bottom-2 -right-2 text-3xl">🐾</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight gradient-text">
            Paws in Action
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            A student-led initiative dedicated to supporting animal shelters and
            rescue organizations through fundraising, donation drives, and community
            events across California.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full px-8 gap-2 shadow-md" asChild>
              <a href="#contact">
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 border-2" asChild>
              <a href="#programs">
                Our Programs
                <PawPrint className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 gap-2 border-2" asChild>
              <a href="https://www.instagram.com/_pawsinaction_" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                Follow Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-dark-section relative overflow-hidden">
        <PawPrint className="absolute top-8 left-[6%] h-20 w-20 text-white/[0.12] rotate-[-15deg] paw-drift" style={{ "--paw-rotate": "-15deg", animationDelay: "2s" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-12 right-[8%] h-16 w-16 text-white/[0.12] rotate-[30deg] paw-drift" style={{ "--paw-rotate": "30deg", animationDelay: "5s" } as React.CSSProperties} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Why This Matters in California
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto mb-12">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <span className="text-5xl mb-4 block">🐶</span>
              <p className="text-5xl md:text-6xl font-bold font-display mb-3">391,000+</p>
              <p className="text-dark-muted text-lg">
                Animals entered California shelters in 2023.
              </p>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <span className="text-5xl mb-4 block">🩺</span>
              <p className="text-5xl md:text-6xl font-bold font-display mb-3">344,000+</p>
              <p className="text-dark-muted text-lg">
                Shelter animals lack adequate access to veterinary care staff in California.
              </p>
            </div>
          </div>
          <p className="text-center text-dark-muted text-sm max-w-lg mx-auto opacity-70">
            These numbers show why student-led support and community partnerships matter.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-warm-gradient relative overflow-hidden">
        <PawPrint className="absolute top-10 right-[8%] h-20 w-20 rotate-[-20deg] paw-drift" style={{ "--paw-rotate": "-20deg", animationDelay: "0s", color: "hsl(var(--paw-1) / 0.3)" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-12 left-[5%] h-14 w-14 rotate-[15deg] paw-drift" style={{ "--paw-rotate": "15deg", animationDelay: "3s", color: "hsl(var(--paw-2) / 0.25)" } as React.CSSProperties} />
        <PawPrint className="absolute top-1/2 right-[3%] h-10 w-10 rotate-[35deg] paw-drift" style={{ "--paw-rotate": "35deg", animationDelay: "5s", color: "hsl(var(--paw-1) / 0.25)" } as React.CSSProperties} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Impact Through Action
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {programs.map((program) => (
              <Card
                key={program.title}
                className="border border-border bg-card rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-icon-light mb-5">
                    <span className="text-3xl">{program.emoji}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 bg-background relative overflow-hidden">
        <PawPrint className="absolute top-8 left-[6%] h-16 w-16 rotate-[-10deg] paw-drift" style={{ "--paw-rotate": "-10deg", animationDelay: "1s", color: "hsl(var(--paw-1) / 0.25)" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-10 right-[7%] h-12 w-12 rotate-[25deg] paw-drift" style={{ "--paw-rotate": "25deg", animationDelay: "4s", color: "hsl(var(--paw-2) / 0.2)" } as React.CSSProperties} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Working Together
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">
            Our Partners
          </h2>
          <div className="max-w-md mx-auto mb-10">
            <Card className="border border-border rounded-2xl shadow-sm bg-secondary/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-icon-light mb-4">
                  <PawPrint className="h-7 w-7 text-accent-icon" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  House Rabbit Society
                </h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated to the rescue and welfare of domestic rabbits through education and advocacy.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-muted-foreground text-sm">
            More partners to be announced.{" "}
            <a href="#contact" className="text-foreground font-medium hover:underline">
              Interested in partnering? Contact us below.
            </a>
          </p>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-warm-gradient relative overflow-hidden">
        <PawPrint className="absolute top-14 left-[4%] h-24 w-24 rotate-[-30deg] paw-drift" style={{ "--paw-rotate": "-30deg", animationDelay: "2s", color: "hsl(var(--paw-1) / 0.25)" } as React.CSSProperties} />
        <PawPrint className="absolute top-1/3 right-[5%] h-16 w-16 rotate-[20deg] paw-drift" style={{ "--paw-rotate": "20deg", animationDelay: "6s", color: "hsl(var(--paw-2) / 0.2)" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-16 left-[12%] h-12 w-12 rotate-[40deg] paw-drift" style={{ "--paw-rotate": "40deg", animationDelay: "4s", color: "hsl(var(--paw-1) / 0.25)" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-24 right-[10%] h-10 w-10 rotate-[-15deg] paw-drift" style={{ "--paw-rotate": "-15deg", animationDelay: "7s", color: "hsl(var(--paw-2) / 0.2)" } as React.CSSProperties} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              About Us
            </h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-border rounded-2xl shadow-sm bg-card">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-icon-light mb-4">
                  <Heart className="h-6 w-6 text-accent-icon" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">Who We Are</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Paws in Action is a student-led initiative dedicated to supporting
                  animal shelters and rescue organizations through fundraising,
                  donation drives, and community events.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our goal is to bring students and communities together to raise
                  resources, awareness, and support for animals in need. By organizing
                  simple but impactful initiatives such as supply drives, fundraising
                  events, and community outreach programs, we aim to provide meaningful
                  assistance to local shelters and rescues.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border rounded-2xl shadow-sm bg-card">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4">
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">Meet the Founder</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Paws in Action was founded by <span className="font-semibold text-foreground">Aarini Shah</span>,
                  a student at Milpitas High School, who has a strong interest in
                  animal welfare and community service.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  After learning about the number of animals entering shelters each
                  year and the challenges shelters face in providing care and
                  resources, Aarini started Paws in Action to help connect students
                  with opportunities to support local animal welfare organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border rounded-2xl shadow-sm bg-card md:col-span-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-icon-light mb-4">
                  <Eye className="h-6 w-6 text-accent-icon" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to build long-term partnerships with animal shelters
                  and rescue organizations while empowering students to make a
                  meaningful impact through service and community engagement.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-border">
                  <div className="text-center">
                    <span className="text-3xl mb-2 block">🐾</span>
                    <h4 className="font-semibold text-foreground mb-1">Compassion</h4>
                    <p className="text-sm text-muted-foreground">
                      Every animal deserves kindness, care, and a chance at a better life.
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl mb-2 block">🤝</span>
                    <h4 className="font-semibold text-foreground mb-1">Community</h4>
                    <p className="text-sm text-muted-foreground">
                      Together, students and partners can create lasting impact for animals in need.
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl mb-2 block">💪</span>
                    <h4 className="font-semibold text-foreground mb-1">Action</h4>
                    <p className="text-sm text-muted-foreground">
                      We turn compassion into tangible results through hands-on programs and events.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-background relative overflow-hidden">
        <PawPrint className="absolute top-10 right-[10%] h-14 w-14 rotate-[10deg] paw-drift" style={{ "--paw-rotate": "10deg", animationDelay: "1.5s", color: "hsl(var(--paw-1) / 0.25)" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-8 left-[8%] h-10 w-10 rotate-[-25deg] paw-drift" style={{ "--paw-rotate": "-25deg", animationDelay: "5s", color: "hsl(var(--paw-2) / 0.2)" } as React.CSSProperties} />
        <div className="container mx-auto px-4 max-w-xl relative z-10">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Reach Out
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Want to partner, volunteer, or learn more? We'd love to hear from you.
            </p>
          </div>

          {status === "sent" ? (
            <div className="text-center py-12">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. We'll get back to you soon.
              </p>
              <Button variant="outline" className="rounded-full" onClick={() => setStatus("idle")}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required maxLength={100} placeholder="Your name" className="rounded-xl mt-1.5" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required maxLength={255} placeholder="you@example.com" className="rounded-xl mt-1.5" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required maxLength={1000} placeholder="How can we help?" className="rounded-xl mt-1.5 min-h-[120px]" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>
              {status === "error" && (
                <p className="text-sm text-destructive text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
              <Button type="submit" size="lg" disabled={status === "sending"} className="w-full rounded-full gap-2 shadow-md">
                {status === "sending" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" />Sending...</>
                ) : (
                  <><Mail className="h-4 w-4" />Send Message</>
                )}
              </Button>
            </form>
          )}

          <div className="flex flex-col items-center gap-3 mt-8">
            <p className="text-sm text-muted-foreground">Or reach us directly:</p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="rounded-full gap-2" asChild>
                <a href="mailto:aarini@pawsinaction.org">
                  <Mail className="h-4 w-4" />
                  aarini@pawsinaction.org
                </a>
              </Button>
              <Button variant="outline" size="sm" className="rounded-full gap-2" asChild>
                <a href="https://www.instagram.com/_pawsinaction_" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-dark-section">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <PawPrint className="h-5 w-5" />
            <span className="font-display font-bold text-lg">Paws in Action</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:aarini@pawsinaction.org" className="text-dark-muted hover:text-white transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/_pawsinaction_" target="_blank" rel="noopener noreferrer" className="text-dark-muted hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-dark-muted">&copy; {new Date().getFullYear()} Paws in Action. All rights reserved.</p>
          <p className="text-xs text-dark-muted opacity-70">
            Website made by{" "}
            <a href="https://salonishah.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">
              Saloni Shah
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
