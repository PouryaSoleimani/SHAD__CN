import Navbar from "@/components/modules/Navbar";
import { SignUpForm } from "@/components/templates/SignUpForm";

// ^ HOME PAGE ===============================================================================================================================================================
export default function Home() {
  return (
    <section id="HOME____PAGE" className="flex flex-col items-center justify-center w-screen h-screen">
       <Navbar />
      <SignUpForm />
    </section>
  );
}
