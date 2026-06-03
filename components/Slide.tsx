type SlideProps = {
  page: number;
  title: string;
  subtitle?: string;
  body: string[];
  note?: string;
};

export default function Slide({ page, title, subtitle, body, note }: SlideProps) {
  return (
    <article className="slide-grid min-h-screen snap-start border-b border-white/5">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <div className="mb-6 flex items-center gap-4 text-sm text-gold">
          <span className="font-mono">P{String(page).padStart(2, "0")}</span>
          <span className="h-px flex-1 bg-gold/30" />
        </div>
        <h2 className="text-4xl font-black leading-tight md:text-5xl">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-bone/70 md:text-xl">{subtitle}</p>}
        <ul className="mt-10 space-y-4">
          {body.map((line, i) => (
            <li key={i} className="flex gap-4 text-base text-bone/90 md:text-lg">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        {note && (
          <div className="mt-12 border-l-2 border-ember/60 bg-ember/5 px-5 py-3 text-sm text-bone/60">
            演讲备注：{note}
          </div>
        )}
      </div>
    </article>
  );
}
