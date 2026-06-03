type Props = { title: string; headers: string[]; rows: string[][] };
export default function TableBlock({ title, headers, rows }: Props) {
  return (
    <div className="mb-12">
      <h3 className="mb-4 text-xl font-bold text-gold">{title}</h3>
      <div className="overflow-x-auto rounded border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-bone/80">
            <tr>
              {headers.map((h) => (
                <th key={h} className="px-4 py-3 font-bold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-white/5">
                {r.map((c, j) => (
                  <td key={j} className="px-4 py-3 align-top text-bone/80">{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
