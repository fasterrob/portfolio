import TimelineItem from "./TimelineItem";

interface TimelineItemProps {
  title: string;
  items: { year: string; text: string; emoji: string }[];
}

export default function TimelineSection({ title, items }: TimelineItemProps) {
  return (
    <div className="rounded-xl p-5 space-y-5">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="space-y-4 text-sm">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            text={item.text}
            emoji={item.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
