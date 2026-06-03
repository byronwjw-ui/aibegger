type Props = { id?: string; title: string; children: React.ReactNode };
export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="border-b border-white/5 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-black text-gold md:text-4xl">{title}</h2>
        <div className="space-y-6 text-bone/90 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}
