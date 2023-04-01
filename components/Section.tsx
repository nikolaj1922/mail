import { SvgIconComponent } from "@mui/icons-material";
import styles from "../styles/Section.module.css";
import { FC } from "react";

interface Props {
  Icon: SvgIconComponent;
  title: string;
  color: string;
  selected?: boolean;
}

const Section: FC<Props> = ({ Icon, title, color, selected }) => {
  return (
    <div
      className={`${styles.section} ${selected && styles["section--selected"]}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default Section;
