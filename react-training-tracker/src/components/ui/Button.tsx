type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export default function Button({
  children,
  onClick,
  variant = 'primary',
}: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white'
      : 'bg-gray-200 text-black';

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${styles}`}
    >
      {children}
    </button>
  );
}
