export const AchievementItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="brdr p-5">
      <h2 className="text-2xl font-semibold mb-5">{title}</h2>
      <p className="text-text-alt text-sm">{description}</p>
    </div>
  );
};
