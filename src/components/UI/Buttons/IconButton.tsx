import Icon, { IconProp } from "../Icon";

interface IconButtonProps {
  className: string;
  iconName: IconProp;
  size: number;
  flip?: boolean;
  color?: string
  onClick?: () => void
}

const IconButton: React.FC<IconButtonProps> = ({ className, iconName, size, flip, color, onClick }) => {

  return (
    <div className={`flex items-center justify-center ${className}`} onClick={onClick}>
      <Icon iconName={iconName} size={size} flip={flip} color={color} />
    </div>
  );
}
export default IconButton