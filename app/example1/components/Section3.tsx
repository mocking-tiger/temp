import Section3Card from "./Section3Card";

export default function Section3() {
  return (
    <div className="py-32">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-2xl mx-auto flex flex-col justify-center">
          <h2 className="mx-auto text-3xl font-medium tracking-tight text-gray-900">
            Now is the time to build your portfolio
          </h2>
          <p className="mx-auto mt-2 text-lg text-gray-600 text-center">
            With typical market returns, you have to start young to secure your
            future. With Pocket, it’s never too late to build your nest egg.
          </p>
        </div>
        <div className="mt-[80px] mx-auto grid grid-cols-3 gap-6">
          <Section3Card
            span="Invest any amount"
            p="Whether it’s $1 or $1,000,000, we can put your money to work for
              you."
          />
          <Section3Card
            span="Build a balanced portfolio"
            p="Invest in different industries to find the most opportunities to
              win huge."
          />
          <Section3Card
            span="Trade in real-time"
            p="Get insider tips on big stock moves and act on them within
              seconds."
          />
          <Section3Card
            span="Profit from your network"
            p="Invite new insiders to get tips faster and beat even other Pocket
              users."
          />
          <Section3Card
            span="Encrypted and anonymized"
            p="Cutting-edge security technology that even the NSA doesn’t know
              about keeps you hidden."
          />
          <Section3Card
            span="Portfolio tracking"
            p="Watch your investments grow exponentially, leaving other investors
              in the dust."
          />
        </div>
      </div>
    </div>
  );
}
