export const AboutValueItem = ({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={`m-5 pb-5 border-b border-text-alt/20 ${className}`}>
      <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
        <span className="inline-block border border-brand rounded-full p-2">
          {icon}
        </span>
        {title}
      </h2>
      <p className="text-text-alt">{description}</p>
    </div>
  );
};
