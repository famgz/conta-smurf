import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { SetStateAction } from 'react';

interface Props {
  isPasswordVisible: boolean;
  setIsPasswordVisible: (value: SetStateAction<boolean>) => void;
}

export default function TogglePasswordTypeButton({
  isPasswordVisible,
  setIsPasswordVisible,
}: Props) {
  return (
    <button
      type="button"
      className="absolute right-3 top-1.5 text-muted-foreground 2xl:top-3.5"
      onClick={() => setIsPasswordVisible((prev) => !prev)}
    >
      {isPasswordVisible ? (
        <EyeOffIcon className="size-5" />
      ) : (
        <EyeIcon className="size-5" />
      )}
    </button>
  );
}
