import { FloatButton } from '@/components/atoms/Button/styles';
import type { VariantType } from '@/constants/buttonStyles';

interface ButtonProps {
  onClick: () => void;
  name: string;
  variant: VariantType;
}

const Button = ({ onClick, name, variant }: ButtonProps) => {
  return (
    <FloatButton $variant={variant} onClick={onClick}>
      {name}
    </FloatButton>
  );
};

export default Button;
