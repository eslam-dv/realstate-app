import Link from "next/link";

export default function FAQCard({
  FAQ,
}: {
  FAQ: { question: string; answer: string; readMore: string };
}) {
  const { question, answer, readMore } = FAQ;
  return (
    <div className="flex flex-col gap-4 border border-text-alt/20 rounded-md p-5 select-none">
      <h3 className="text-xl font-semibold">{question}</h3>
      <p className="text-text-alt">{answer}</p>
      <Link
        href={readMore}
        className="bg-bg-alt hover:bg-bg w-fit py-3 px-5 rounded-md border border-text-alt/20"
      >
        Read More
      </Link>
    </div>
  );
}
