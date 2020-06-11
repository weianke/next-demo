import { useRouter } from 'next/router';
import Link from 'next/link';

export default function A() {
  const router = useRouter();
  return (
    <Link href="#">
      <a>{router.query.name}</a>
    </Link>
  );
}
