import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function PrimaryButton({
  children,
  disabled,
  className,
}: Props) {
  return (
    <button
      className={`w-full h-full bg-primary text-center outline-none border-[1px] border-primary text-white text-base disabled:bg-muted disabled:cursor-not-allowed flex items-center justify-center transition duration-500 hover:border-primary hover:bg-white hover:text-primary ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
