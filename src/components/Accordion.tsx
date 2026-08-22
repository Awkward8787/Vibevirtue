import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/types/content.ts'

type AccordionProps = {
  items: readonly FaqItem[]
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-bg-secondary">
      {items.map((item) => (
        <details key={item.id} className="group px-6 py-5 md:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-base font-medium text-text [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown
              className="size-5 shrink-0 text-text-secondary motion-safe:transition-transform group-open:rotate-180 group-open:text-accent"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-4 max-w-3xl text-text-secondary">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
