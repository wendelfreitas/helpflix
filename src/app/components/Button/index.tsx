import Link from 'next/link';

interface ButtonProps {
  name: string;
  route: string;
  className?: string;
}

export const Button = ({ name, route, className }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`h-14 bg-gradient-to-r from-secondary-800 to-secondary-400 rounded-lg text-lg font-bold text-white ${className}`}
    >
      <Link className="h-full w-full" href={route}>
        {name}
      </Link>
    </button>
  );
};
