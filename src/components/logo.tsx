import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn('block', className)}>
      <Image 
        src="/logos/FSlogo.png" 
        alt="Fraternity Spirits México"
        width={150}
        height={60}
        className="h-12 w-auto"
        priority
      />
    </Link>
  );
}
