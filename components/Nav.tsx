import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-wider text-gold">
          AI丐帮 × 零世界
        </Link>
        <div className="flex gap-6 text-sm text-bone/80">
          <Link href="/" className="hover:text-gold">封面</Link>
          <Link href="/ppt" className="hover:text-gold">PPT</Link>
          <Link href="/manual" className="hover:text-gold">作战手册</Link>
          <Link href="/tables" className="hover:text-gold">执行表格</Link>
        </div>
      </div>
    </nav>
  );
}
