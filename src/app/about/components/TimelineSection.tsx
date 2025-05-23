import TimelineItem from "./TimelineItem";

interface TimelineItemProps {
  title: string;
  items: { year: string; text: string; emoji: string }[];
}

export default function TimelineSection({ title, items }: TimelineItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h3>
      <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
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
