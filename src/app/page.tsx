import Hero from "@/components/hero";
import Content from "@/components/content";

import Generator from "@/components/generator";

export default function Home() {
  return (
    <main>
      <Hero feature="Generate" />
      <Generator />
      <Content />
    </main>
  );
}
