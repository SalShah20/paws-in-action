import { useState } from "react";
import { Mail, PawPrint, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.jpeg";

const programs = [
  {
    emoji: "👟",
    title: "Shoe Drive Fundraisers",
    description: "Collect gently used shoes to raise funds for animal shelters and rescue organizations.",
  },
  {
    emoji: "🧦",
    title: "Pet-Themed Sock Sales",
    description: "Fun paw-print socks with all proceeds supporting animal welfare programs.",
  },
  {
    emoji: "🧣",
    title: "Blanket & Supply Drives",
    description: "Gather blankets, toys, and essentials for shelter animals awaiting their forever homes.",
  },
  {
    emoji: "🦃",
    title: "Thanksgiving Pet Food Drive",
    description: "Holiday pet food collection ensuring shelter animals and pets in need are fed.",
  },
];

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\n\n${formData.message}`
    );
    window.location.href = `mailto:pawsaction.in@gmail.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening your email client",
      description: "Your message details have been pre-filled.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Paws in Action logo"
            className="w-48 md:w-64 mb-10"
          />
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Paws in Action
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Paws in Action is a student-led organization dedicated to improving the lives of animals
            through fundraising, donation drives, and community events that support shelters and
            rescue partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-none px-8 gap-2" asChild>
              <a href="#contact">
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-none px-8 gap-2" asChild>
              <a href="#programs">
                Get Involved
                <PawPrint className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            Why This Matters in California
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <span className="text-5xl mb-4 block">🐶</span>
              <p className="text-5xl md:text-6xl font-bold font-display mb-3">391,000+</p>
              <p className="text-primary-foreground/70 text-lg">
                Animals entered California shelters in 2023.
              </p>
            </div>
            <div className="text-center">
              <span className="text-5xl mb-4 block">🩺</span>
              <p className="text-5xl md:text-6xl font-bold font-display mb-3">344,000+</p>
              <p className="text-primary-foreground/70 text-lg">
                Shelter animals lack adequate access to veterinary care staff in California.
              </p>
            </div>
          </div>
          <p className="text-center text-primary-foreground/60 text-sm max-w-lg mx-auto">
            These numbers show why student-led support and community partnerships matter.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Our Impact Through Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {programs.map((program) => (
              <Card
                key={program.title}
                className="border border-border rounded-none shadow-none hover:shadow-md transition-shadow"
              >
                <CardContent className="p-8 text-center">
                  <span className="text-4xl mb-5 block">{program.emoji}</span>
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
      <section className="py-20 border-t border-b border-border bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Partners
          </h2>
          <div className="max-w-md mx-auto mb-10">
            <Card className="border border-border rounded-none shadow-none">
              <CardContent className="p-8">
                <PawPrint className="h-8 w-8 text-foreground mx-auto mb-4" />
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
            <a href="#contact" className="underline text-foreground font-medium">
              Interested in partnering? Contact us below.
            </a>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Reach out to partner, volunteer, or learn more about Paws in Action.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                required
                maxLength={100}
                className="rounded-none mt-1.5"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                maxLength={255}
                className="rounded-none mt-1.5"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="organization">Organization</Label>
              <Input
                id="organization"
                maxLength={200}
                className="rounded-none mt-1.5"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                required
                maxLength={1000}
                className="rounded-none mt-1.5 min-h-[120px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-none gap-2">
              <Mail className="h-4 w-4" />
              Send Message
            </Button>
          </form>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Or email us directly at{" "}
            <a href="mailto:pawsaction.in@gmail.com" className="underline text-foreground">
              pawsaction.in@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container mx-auto px-4 flex flex-col items-center gap-2">
          <span className="font-display font-semibold text-foreground text-sm">
            Paws in Action
          </span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Paws in Action. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
