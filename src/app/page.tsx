import Image from "next/image";
import Container from "./components/Container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Container />
      </div>
    </main>
  );
}
