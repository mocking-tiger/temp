import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

export default function Example1() {
  return (
    <main className="bg-gray-50 h-[calc(100vh)]">
      <div>
        <Header />
        <section>
          <Section1 />
        </section>
        <section className="bg-black">
          <Section2 />
        </section>
        <section>
          <Section3 />
        </section>
        <section>
          <Section4 />
        </section>
      </div>
    </main>
  );
}
