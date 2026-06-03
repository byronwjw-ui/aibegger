import Section from "@/components/Section";
import { manual } from "@/content/manual";

export default function ManualPage() {
  return (
    <div>
      <header className="border-b border-white/10 px-6 py-16 text-center">
        <p className="text-sm tracking-[0.3em] text-gold">完整商业作战手册</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">AI丐帮 × AI道人 / 零世界</h1>
      </header>
      {manual.map((s) => (
        <Section key={s.id} id={s.id} title={s.title}>
          {s.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>
      ))}
    </div>
  );
}
