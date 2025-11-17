export const AboutStep = ({
  title,
  content,
  step,
  className,
}: {
  title: string;
  content: string;
  step: string;
  className: string;
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <p className="border-l border-brand p-3 text-lg">{step}</p>
      <div className="relative border border-text-alt/20 p-5 rounded-md rounded-tl-none basis-full">
        <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-brand/50 via-transparent to-transparent"></div>
        <div className="absolute top-[-1px] left-0 w-10 h-[1px] bg-linear-to-r from-brand to-transparent"></div>
        <div className="absolute top-[-1px] left-0 w-[1px] h-10 bg-linear-to-b from-brand to-transparent"></div>
        <h2 className="text-2xl font-semibold mb-5">{title} </h2>
        <p className="text-text-alt text-sm">{content}</p>
      </div>
    </div>
  );
};
