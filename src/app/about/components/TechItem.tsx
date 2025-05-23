export default function TechItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-xl">
      {icon}
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {label}
      </span>
    </div>
  );
}
