import { SignUpForm } from "@/components/templates/SignUpForm";

// ^ HOME PAGE ===============================================================================================================================================================
export default function Home() {
  return (
    <section id="HOME____PAGE" className="flex flex-col items-center justify-center w-screen h-screen bg-black">
      <div className="sticky top-0 left-0 right-0 w-full border-b-2 border-neutral-300"></div>
      <SignUpForm />
    </section>
  );
}
