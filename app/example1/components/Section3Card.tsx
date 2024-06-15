export default function Section3Card({ span, p }: { span: string; p: string }) {
  return (
    <div className="p-8 border border-gray-300 rounded-xl text-sm">
      <div className="w-5 h-5 rounded-full bg-black" />
      <span className="mt-6 block font-semibold text-gray-900">{span}</span>
      <p className="mt-2 text-gray-700">{p}</p>
    </div>
  );
}
