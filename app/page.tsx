import Header from "@/shared/components/features/header";
import { HeroComponent } from "@/shared/components/features/hero-component";
import { CtaComponent } from "@/shared/components/features/cta-component";
import Section from "@/shared/components/ui/section";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Section className="">
          <HeroComponent />
        </Section>

        <Section>
          <CtaComponent />
        </Section>

        {/* Добавляйте новые секции так:
        <Section>
          <YourComponent />
        </Section>
        
        Для последней секции без границы:
        <Section noBorder>
          <LastComponent />
        </Section>
        */}
      </main>
    </div>
  );
}
