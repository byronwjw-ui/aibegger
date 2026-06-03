import Link from "next/link";

export default function Hero() {
  return (
    <section className="slide-grid relative flex min-h-[calc(100vh-65px)] items-center">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm tracking-[0.3em] text-gold">AI 时代 · 新型价值交换</p>
        <h1 className="text-5xl font-black leading-tight md:text-7xl">
          AI丐帮 <span className="text-gold">×</span> AI道人
          <br />
          <span className="text-bone/70">/ 零世界</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-bone/80 md:text-xl">
          12个普通人组成的 AI 军团，用 AI 帮商家解决真实问题，用价值换饭吃、换资源、换机会。
        </p>
        <p className="mt-4 max-w-2xl text-base text-bone/60">
          不白吃，不白拿。老板觉得值，再请饭；不值，我们自己买单。
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/ppt" className="rounded bg-gold px-6 py-3 font-bold text-ink hover:bg-ember hover:text-bone">
            查看 PPT →
          </Link>
          <Link href="/manual" className="rounded border border-bone/30 px-6 py-3 font-bold text-bone hover:border-gold hover:text-gold">
            作战手册
          </Link>
          <Link href="/tables" className="rounded border border-bone/30 px-6 py-3 font-bold text-bone hover:border-gold hover:text-gold">
            执行表格
          </Link>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { k: "12", v: "AI军团" },
            { k: "7天", v: "冷启动" },
            { k: "30天", v: "验证模型" },
            { k: "10家", v: "商家案例" },
          ].map((it) => (
            <div key={it.v} className="border-l-2 border-gold pl-4">
              <div className="text-3xl font-black text-gold">{it.k}</div>
              <div className="text-sm text-bone/60">{it.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
