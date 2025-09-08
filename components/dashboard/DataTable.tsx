type Column<T> = {
  key: keyof T;
  header: string;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export function DataTable<T extends Record<string, any>>({ columns, data }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className="px-4 py-3 font-semibold text-slate-600">
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-t border-slate-100 hover:bg-slate-50/60">
              {columns.map((c) => (
                <td key={String(c.key)} className="px-4 py-3">
                  {String(row[c.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


