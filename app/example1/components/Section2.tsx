import Phone from "@/components/Phone";

export default function Section2() {
  return (
    <div className="py-32 ">
      <div className="text-white max-w-[1280px] mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Every feature you need to win. Try it for yourself.
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Pocket was built for investors like you who play by their own rules
            and aren’t going to let SEC regulations get in the way of their
            dreams. If other investing tools are afraid to build it, Pocket has
            it.
          </p>
        </div>
        <div>
          <Phone />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
