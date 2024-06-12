import HeaderButton from "./HeaderButton";
import { Button } from "@headlessui/react";

export default function Header() {
  return (
    <header className="flex p-[32px]">
      <div className="flex items-center gap-3 mr-16 cursor-pointer">
        <svg className="fill-[#06b6d4] w-10 h-10">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
          ></path>
        </svg>
        <span className="font-bold">Pocket</span>
      </div>
      <div className="flex items-center gap-10 flex-1">
        <HeaderButton>Features</HeaderButton>
        <HeaderButton>Reviews</HeaderButton>
        <HeaderButton>Pricing</HeaderButton>
        <HeaderButton>FAQs</HeaderButton>
      </div>
      <div className="flex gap-6 justify-end">
        <Button className="rounded border py-2 px-3 text-sm text-black">
          Log in
        </Button>
        <Button className="rounded bg-black py-2 px-3 text-sm text-white">
          DownLoad
        </Button>
      </div>
    </header>
  );
}
