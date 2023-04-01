import { FC } from "react";
import styles from "../styles/EmailRow.module.css";
import { IconButton, Checkbox } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  subject: string;
  description: string;
  time: string;
}

const EmailRow: FC<Props> = ({ id, title, subject, description, time }) => {
  return (
    <div className={styles.emailRow}>
      <div className={styles.emailRow__options}>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <Link href="/mail" className={styles.linkContainer}>
        <h3 className={styles.emailRow__title}>{title}</h3>

        <div className={styles.emailRow__message}>
          <h4>
            {subject}{" "}
            <span className={styles.emailRow__description}>{description}</span>
          </h4>
        </div>
        <p className={styles.emailRow__time}>{time}</p>
      </Link>
    </div>
  );
};

export default EmailRow;
