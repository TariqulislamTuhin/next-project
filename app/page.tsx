import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={`/users`} className="bg-blend-saturation">click here to go to users</Link>
    </main>
  );
}
