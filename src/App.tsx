import "./index.css";
import { Button } from "./components/ui/button";
import FormComponent from "./FormComponent";
import FormComponent2 from "./FormComponent2";
import { Toaster, toast } from 'sonner'
import Modal from "./Modal";


export function App() {
  return (
    <section id="HOME__PAGE">
      <h1 className="w-fit bg-white text-black px-16 py-6 rounded-xl font-black tracking-tight mx-auto my-5">SHAD__CN TRAINING</h1>
      <main className="flex flex-col gap-10 items-center justify-start w-screen mt-10">
        <div className="bg-zinc-900 flex items-center justify-center border my-6 gap-4 rounded-lg p-6">
          <Button onClick={() => console.log("HELLO SHAD__CN")}>CLICK ME</Button>
          <Button variant="default">PRIMARY</Button>
          <Button variant="secondary">SECONDARY</Button>
          <Button variant="destructive">DESCTRUCTIVE</Button>
          <Button variant="blue">BLUE</Button>
        </div>
        <div>
          {/* <FormComponent2 /> */}
          <Toaster className="bg-black border-2 border-white font-bold" />
          <Modal />
        </div>
      </main>
    </section>
  );
}

export default App;
