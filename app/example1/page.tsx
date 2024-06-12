import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

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
      </div>
    </main>
  );
}
