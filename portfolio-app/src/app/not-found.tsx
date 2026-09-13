import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-sm font-medium tracking-widest text-blue-400 uppercase">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-zinc-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        Back to home
      </Link>
    </div>
  );
}
