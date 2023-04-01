import { FC } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import styles from "../styles/SidebarOption.module.css";

interface Props {
  Icon: SvgIconComponent;
  title: string;
  number: number;
  seleted?: boolean;
}

const SidebarOption: FC<Props> = ({ Icon, title, number, seleted }) => {
  return (
    <div
      className={`${styles.sidebarOption} ${
        seleted && styles["sidebarOption-active"]
      }`}
    >
      <Icon className={styles.sidebarOption__icon} />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOption;
