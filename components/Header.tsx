import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import styles from "@/styles/Header.module.css";
import { Avatar, IconButton } from "@mui/material";
import Logo from "../public/mail.webp";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={styles.header__middle}>
        <div>
          <SearchIcon className={styles.header__middle__icon} />
          <input placeholder="Search all" type="text" />
          <ArrowDropDownIcon className={styles.header__middle__icon} />
        </div>
      </div>
      <div className={styles.header__right}>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
