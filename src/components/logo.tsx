import { cn } from '@/lib/utils';
import Link from 'next/link';

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn('text-xl font-bold font-headline text-foreground tracking-wider', className)}>
      Fraternity Spirits
    </Link>
  );
}
