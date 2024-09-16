import Gradient from "@/components/Gradient";
import Animation from "@/components/Animation";
import SelectComponent from "@/components/Select";
import Link from "next/link";
import Image from "next/image";
import InfiniteStripe from "@/components/InfiniteStripe";
import UpperInput from "@/components/UpperInput";

export default function Home() {
  return (
    <main className="bg-white h-screen px-5">
      <Link href={"/example1"}>예제1</Link>
      <Link href={"/example2"}>예제2</Link>
      <Link href={"/example3"}>예제3</Link>
      {/* <Gradient /> */}
      {/* <Animation /> */}
      {/* <SelectComponent /> */}
      <InfiniteStripe />
      <UpperInput />
    </main>
  );
}
