export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-text-alt/20 p-7 rounded-md">
      <div className="flex items-center gap-5">
        {icon}
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-text-alt mt-4 text-sm">{description}</p>
    </div>
  );
}
