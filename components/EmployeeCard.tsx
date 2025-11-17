import Image from "next/image";
import Link from "next/link";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { TwitterXFill } from "../components/icons";

export const EmployeeCard = ({
  name,
  role,
  twitter,
  image,
}: {
  image: string;
  name: string;
  role: string;
  twitter: string;
}) => {
  return (
    <div className="p-5 border border-text-alt/20 rounded-md flex flex-col gap-5 w-full md:w-fit">
      <div className="relative basis-3/5">
        <Image
          src={image}
          alt="person"
          width={200}
          height={300}
          className="object-cover w-full h-full"
        />
        <Link
          href={twitter}
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-brand rounded-xl flex items-center justify-center"
        >
          <TwitterXFill className="size-5" />
        </Link>
      </div>
      <div className="text-center">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-text-alt">{role}</p>
      </div>
      <div className="flex items-center w-full justify-between border border-text-alt/20 p-2 rounded-4xl bg-bg-alt">
        <p className="pl-2 ">Say Hello 👋</p>
        <Link href={twitter} className="bg-brand rounded-full p-2">
          <PaperAirplaneIcon className="size-5" />
        </Link>
      </div>
    </div>
  );
};
