import Popup from "./components/Popup";

export default function Example2() {
  return (
    <main className="h-screen bg-white">
      <Popup>{"Don't"}</Popup>
      <Popup>{"you"}</Popup>
      <Popup>{"just"}</Popup>
      <Popup>{"hate"}</Popup>
      <Popup>{"popups?"}</Popup>
    </main>
  );
}
