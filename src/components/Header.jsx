
import Logo from "./Logo";
import Switch from "./Switch";

function Header() {
  return (
    <div className="Header">
      <Logo></Logo>
      <Switch eventname="openInGame" displayname="In-Game" active={false} />
    </div>
  );
}

export default Header;
