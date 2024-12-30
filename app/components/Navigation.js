import Link from "next/link";

export default function Naviagtion() {
  return (
    <ul>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About us</Link>
      </li>
      <li>
        <Link href={"/account"}>Account</Link>
      </li>
      <li>
        <Link href={"/cabins"}>Cabins</Link>
      </li>
    </ul>
  );
}
