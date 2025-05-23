interface TimelineItemProps {
  year: string;
  text: string;
  emoji: string;
}

export default function TimelineItem({ year, text, emoji }: TimelineItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-lg">{emoji}</span>
      <div>
        <p className="font-semibold">{year}</p>
        <p>{text}</p>
      </div>
    </li>
  );
}
