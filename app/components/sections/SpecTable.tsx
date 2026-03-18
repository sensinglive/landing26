"use client";

import { useReveal } from "../../hooks/useReveal";

interface SpecRow {
  label: string;
  value: string;
}

interface SpecTableProps {
  rows: SpecRow[];
}

export default function SpecTable({ rows }: SpecTableProps) {
  const ref = useReveal();

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-divider">
            <th className="reveal text-left text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans py-3 pr-4 w-1/3">
              CATEGORIA
            </th>
            <th className="reveal text-left text-[10px] font-normal tracking-[0.25em] text-text-tertiary font-sans py-3">
              ESPECIFICAÇÃO TÉCNICA
            </th>
          </tr>
        </thead>
        <tbody className="stagger">
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-divider/50">
              <td className="reveal py-3 pr-4 font-sans text-sm font-medium text-text-primary align-top">
                {row.label}
              </td>
              <td className="reveal py-3 font-mono text-sm font-extralight text-text-secondary">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
