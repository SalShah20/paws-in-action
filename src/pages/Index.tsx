import { Mail, PawPrint, ArrowRight, Heart, Instagram, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/logo.jpeg";

const programs = [
  {
    emoji: "👟",
    title: "Shoe Drive Fundraisers",
    description:
      "Collect gently used shoes to raise funds for animal shelters and rescue organizations.",
    bg: "bg-stone-50",
    iconBg: "bg-amber-100",
  },
  {
    emoji: "🧦",
    title: "Pet-Themed Sock Sales",
    description:
      "Fun paw-print socks with all proceeds supporting animal welfare programs.",
    bg: "bg-orange-50/60",
    iconBg: "bg-orange-100",
  },
  {
    emoji: "🧣",
    title: "Blanket & Supply Drives",
    description:
      "Gather blankets, toys, and essentials for shelter animals awaiting their forever homes.",
    bg: "bg-stone-50",
    iconBg: "bg-stone-200",
  },
  {
    emoji: "🦃",
    title: "Thanksgiving Pet Food Drive",
    description:
      "Holiday pet food collection ensuring shelter animals and pets in need are fed.",
    bg: "bg-amber-50/60",
    iconBg: "bg-amber-100",
  },
];

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#partners", label: "Partners" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

const Index = () => {

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
              href="https://www.instagram.com/pawsinaction_2025"
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
        {/* Floating paw decorations */}
        <PawPrint className="absolute top-16 left-[10%] h-16 w-16 text-stone-500/50 paw-float" />
        <PawPrint className="absolute top-32 right-[15%] h-12 w-12 text-amber-500/45 paw-float" style={{ animationDelay: "2s" }} />
        <PawPrint className="absolute bottom-20 left-[20%] h-10 w-10 text-stone-500/40 paw-float" style={{ animationDelay: "4s" }} />
        <PawPrint className="absolute bottom-32 right-[25%] h-14 w-14 text-amber-600/40 paw-float" style={{ animationDelay: "1s" }} />

        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <div className="mb-8 relative">
            <img
              src={logo}
              alt="Paws in Action logo"
              className="w-36 md:w-48 rounded-2xl shadow-lg ring-4 ring-stone-200"
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
            <Button
              size="lg"
              className="rounded-full px-8 gap-2 shadow-md"
              asChild
            >
              <a href="#contact">
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 gap-2 border-2"
              asChild
            >
              <a href="#programs">
                Our Programs
                <PawPrint className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 gap-2 border-2"
              asChild
            >
              <a
                href="https://www.instagram.com/pawsinaction_2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
                Follow Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-stone-800 text-white relative overflow-hidden">
        <PawPrint className="absolute top-8 left-[6%] h-20 w-20 text-white/[0.12] rotate-[-15deg] paw-drift" style={{ "--paw-rotate": "-15deg", animationDelay: "2s" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-12 right-[8%] h-16 w-16 text-white/[0.12] rotate-[30deg] paw-drift" style={{ "--paw-rotate": "30deg", animationDelay: "5s" } as React.CSSProperties} />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Why This Matters in California
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto mb-12">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <span className="text-5xl mb-4 block">🐶</span>
              <p className="text-5xl md:text-6xl font-bold font-display mb-3">
                391,000+
              </p>
              <p className="text-stone-300 text-lg">
                Animals entered California shelters in 2023.
              </p>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <span className="text-5xl mb-4 block">🩺</span>
              <p className="text-5xl md:text-6xl font-bold font-display mb-3">
                344,000+
              </p>
              <p className="text-stone-300 text-lg">
                Shelter animals lack adequate access to veterinary care staff in
                California.
              </p>
            </div>
          </div>
          <p className="text-center text-stone-400 text-sm max-w-lg mx-auto">
            These numbers show why student-led support and community partnerships
            matter.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-warm-gradient relative overflow-hidden">
        <PawPrint className="absolute top-10 right-[8%] h-20 w-20 text-stone-400/40 rotate-[-20deg] paw-drift" style={{ "--paw-rotate": "-20deg", animationDelay: "0s" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-12 left-[5%] h-14 w-14 text-amber-400/30 rotate-[15deg] paw-drift" style={{ "--paw-rotate": "15deg", animationDelay: "3s" } as React.CSSProperties} />
        <PawPrint className="absolute top-1/2 right-[3%] h-10 w-10 text-stone-400/30 rotate-[35deg] paw-drift" style={{ "--paw-rotate": "35deg", animationDelay: "5s" } as React.CSSProperties} />
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
                className={`${program.bg} border border-stone-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${program.iconBg} mb-5`}
                  >
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
        <PawPrint className="absolute top-8 left-[6%] h-16 w-16 text-stone-400/30 rotate-[-10deg] paw-drift" style={{ "--paw-rotate": "-10deg", animationDelay: "1s" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-10 right-[7%] h-12 w-12 text-amber-400/25 rotate-[25deg] paw-drift" style={{ "--paw-rotate": "25deg", animationDelay: "4s" } as React.CSSProperties} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Working Together
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-12">
            Our Partners
          </h2>
          <div className="max-w-md mx-auto mb-10">
            <Card className="border border-stone-200 rounded-2xl shadow-sm bg-stone-50/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 mb-4">
                  <PawPrint className="h-7 w-7 text-amber-700" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  House Rabbit Society
                </h3>
                <p className="text-sm text-muted-foreground">
                  Dedicated to the rescue and welfare of domestic rabbits through
                  education and advocacy.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-muted-foreground text-sm">
            More partners to be announced.{" "}
            <a
              href="#contact"
              className="text-foreground font-medium hover:underline"
            >
              Interested in partnering? Contact us below.
            </a>
          </p>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-warm-gradient relative overflow-hidden">
        <PawPrint className="absolute top-14 left-[4%] h-24 w-24 text-stone-400/30 rotate-[-30deg] paw-drift" style={{ "--paw-rotate": "-30deg", animationDelay: "2s" } as React.CSSProperties} />
        <PawPrint className="absolute top-1/3 right-[5%] h-16 w-16 text-amber-400/25 rotate-[20deg] paw-drift" style={{ "--paw-rotate": "20deg", animationDelay: "6s" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-16 left-[12%] h-12 w-12 text-stone-400/30 rotate-[40deg] paw-drift" style={{ "--paw-rotate": "40deg", animationDelay: "4s" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-24 right-[10%] h-10 w-10 text-stone-400/25 rotate-[-15deg] paw-drift" style={{ "--paw-rotate": "-15deg", animationDelay: "7s" } as React.CSSProperties} />
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
            {/* Mission */}
            <Card className="border border-stone-200 rounded-2xl shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-4">
                  <Heart className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  Who We Are
                </h3>
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

            {/* Founder */}
            <Card className="border border-stone-200 rounded-2xl shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-stone-200 mb-4">
                  <Users className="h-6 w-6 text-stone-600" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  Meet the Founder
                </h3>
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

            {/* Vision */}
            <Card className="border border-stone-200 rounded-2xl shadow-sm bg-white md:col-span-2">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-4">
                  <Eye className="h-6 w-6 text-orange-700" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to build long-term partnerships with animal shelters
                  and rescue organizations while empowering students to make a
                  meaningful impact through service and community engagement.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-stone-100">
                  <div className="text-center">
                    <span className="text-3xl mb-2 block">🐾</span>
                    <h4 className="font-semibold text-foreground mb-1">
                      Compassion
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Every animal deserves kindness, care, and a chance at a better
                      life.
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl mb-2 block">🤝</span>
                    <h4 className="font-semibold text-foreground mb-1">
                      Community
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Together, students and partners can create lasting impact for
                      animals in need.
                    </p>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl mb-2 block">💪</span>
                    <h4 className="font-semibold text-foreground mb-1">Action</h4>
                    <p className="text-sm text-muted-foreground">
                      We turn compassion into tangible results through hands-on
                      programs and events.
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
        <PawPrint className="absolute top-10 right-[10%] h-14 w-14 text-stone-400/30 rotate-[10deg] paw-drift" style={{ "--paw-rotate": "10deg", animationDelay: "1.5s" } as React.CSSProperties} />
        <PawPrint className="absolute bottom-8 left-[8%] h-10 w-10 text-amber-400/25 rotate-[-25deg] paw-drift" style={{ "--paw-rotate": "-25deg", animationDelay: "5s" } as React.CSSProperties} />
        <div className="container mx-auto px-4 max-w-lg text-center relative z-10">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Reach Out
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-10">
            Want to partner, volunteer, or learn more? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 gap-2 shadow-md" asChild>
              <a href="mailto:aarini@pawsinaction.org">
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 gap-2 border-2"
              asChild
            >
              <a
                href="https://www.instagram.com/pawsinaction_2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                Message on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-stone-800 text-white">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <PawPrint className="h-5 w-5" />
            <span className="font-display font-bold text-lg">
              Paws in Action
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:aarini@pawsinaction.org"
              className="text-stone-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/pawsinaction_2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-stone-400">
            &copy; {new Date().getFullYear()} Paws in Action. All rights reserved.
          </p>
          <p className="text-xs text-stone-500">
            Website made by{" "}
            <a
              href="https://salonishah.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white transition-colors underline"
            >
              Saloni Shah
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
