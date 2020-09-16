import { React, useState } from "../../global";
import MobileMenu from "../Menu/MobileMenu";

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="burger-wrapper"
        role="button"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div className="burger-wrapper-line" />
        <div className="burger-wrapper-line" />
        <div className="burger-wrapper-line" />
      </div>
      <MobileMenu open={open} />
    </div>
  );
};

export default Burger;
