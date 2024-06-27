import { Tab, Tabs } from "@mui/material";
import Sections from "./Sections";
import { Link } from "react-router-dom";

function Menu({ selectedTab = Sections[0].id, changeSelectedTab }) {
  return (
    <div className={"Menu"}>
      <div className={"Logo"}>
        <img src={"logo512.png"} alt={""} />
        <div className={"Title"}>Distributed Services</div>
      </div>
        <Tabs
          value={selectedTab}
          orientation={"vertical"}
          centered
          onChange={changeSelectedTab}
        >
          {Sections.map(({ id, label, to }) => (
              <Link><Tab key={id} value={id} label={label} to={to} /></Link>
          ))}
        </Tabs>
    </div>
  );
}

export default Menu;