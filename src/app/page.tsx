import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen p-10 flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <ul className="list-disc pl-5">
        <li>
          <Link href={"/articles"} className="text-blue-500 underline" />
        </li>
      </ul>
    </div>
  );
}
