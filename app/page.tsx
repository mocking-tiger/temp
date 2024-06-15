import Gradient from "@/components/Gradient";
import Animation from "@/components/Animation";
import SelectComponent from "@/components/Select";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white h-screen p-5">
      <Link href={"/example1"}>예제1</Link>
      <Link href={"/example2"}>예제2</Link>
      <Link href={"/example3"}>예제3</Link>
      {/* <Gradient /> */}
      {/* <Animation /> */}
      {/* <SelectComponent /> */}
      <Image src="/test.svg" width={40} height={40} alt="" />
    </main>
  );
}
