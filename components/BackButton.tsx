import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    <a
      className="flex gap-x-1 items-center cursor-pointer text-base text-gray-600 font-medium px-3 py-1 rounded-xl bg-gray-100 hover:bg-gray-200 transition duration-200 max-w-fit"
      onClick={() => router.back()}
    >
      <ChevronLeftIcon className="w-5" />
      back
    </a>
  );
}
