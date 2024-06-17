import Image from "next/image";

export default function InfiniteStripe() {
  return (
    <div className="w-full min-h-8 relative bg-yellow-300 overflow-hidden">
      <div
        id="div1"
        className="w-full absolute inline-flex justify-around items-center gap-2 font-bold animate-move-right whitespace-nowrap"
      >
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
      </div>
      <div
        id="div2"
        className="w-full relative inline-flex justify-around items-center gap-2 font-bold animate-move-right2 whitespace-nowrap"
      >
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
        <Image src="/warning.svg" width={32} height={32} alt="arrow-icon" />
        <span className="text-md">DANGER</span>
      </div>
    </div>
  );
}
