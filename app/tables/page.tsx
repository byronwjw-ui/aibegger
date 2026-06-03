import TableBlock from "@/components/TableBlock";
import { tables } from "@/content/tables";

export default function TablesPage() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 text-center">
          <p className="text-sm tracking-[0.3em] text-gold">团队执行表格</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">每天照着干</h1>
        </header>
        {tables.map((t) => (
          <TableBlock key={t.title} title={t.title} headers={t.headers} rows={t.rows} />
        ))}
      </div>
    </div>
  );
}
