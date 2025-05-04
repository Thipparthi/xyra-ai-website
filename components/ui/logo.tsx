import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="XYRA AI">
      <img
        src="/images/logo.png"
        alt="XYRA AI Logo"
        className="h-8 w-auto md:h-8" // increased height, auto width
      />
    </Link>
  );
}
