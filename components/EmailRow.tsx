import { FC } from "react";
import styles from "../styles/EmailRow.module.css";
import { IconButton, Checkbox } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { selectMail } from "@/store";
import { IEmailRow } from "@/types";

const EmailRow: FC<IEmailRow> = ({ id, title, subject, description, time }) => {
  const dispatch = useAppDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
  };

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
      <Link href="/mail" className={styles.linkContainer} onClick={openMail}>
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
