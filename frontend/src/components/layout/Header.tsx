interface HeaderProps {
  title: string;
  text?: string;
}

export default function Header({ title, text }: HeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      {text && <p className="spot-yazi">{text}</p>}
    </header>
  );
}