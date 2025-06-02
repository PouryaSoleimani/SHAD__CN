import "./index.css";
import { Button } from "./components/ui/button";

export function App() {
  return (
    <section id="HOME__PAGE">
      <h1 className="w-fit bg-white text-black px-16 py-6 rounded-xl font-black tracking-tight mx-auto mt-3">SHAD__CN TRAINING</h1>
      <main className="flex flex-col gap-10 items-center justify-center w-screen h-screen">
        <div className="bg-zinc-900 flex items-center justify-center gap-4 rounded-lg p-6">
          <Button onClick={() => console.log("HELLO SHAD__CN")}>CLICK ME</Button>
          <Button variant="default">PRIMARY</Button>
          <Button variant="secondary">SECONDARY</Button>
          <Button variant="destructive">DESCTRUCTIVE</Button>
          <Button variant="blue">BLUE</Button>
        </div>
      </main>
    </section>
  );
}

export default App;
