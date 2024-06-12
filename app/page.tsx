import Image from "next/image";
import Gradient from "@/components/Gradient";
import Animation from "@/components/Animation";
import SelectComponent from "@/components/Select";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white h-screen p-5">
      <Link href={"/example1"}>예제1</Link>
      {/* <Gradient /> */}
      {/* <Animation /> */}
      <SelectComponent />
    </main>
  );
}
