import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Marquee } from "@/components/marquee";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { References } from "@/components/references";
import { InquiryForm } from "@/components/inquiry-form";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Marquee />
        <Process />
        <References />
        <InquiryForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
