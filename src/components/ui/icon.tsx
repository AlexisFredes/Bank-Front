interface IconProps {
  name: string;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => (
  <span className={`icon material-symbols-rounded ${className}`}>{name}</span>
);

export default Icon;
