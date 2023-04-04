import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";
import styles from "../styles/Mail.module.css";
import Link from "next/link";
import SendMail from "@/components/SendMail";
import { useAppSelector } from "@/store/hooks";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";

const Mail = () => {
  const { sendMessageIsOpen, selectedMail } = useAppSelector(
    (state) => state.mail
  );

  return (
    <div className={styles.mail}>
      <Head>
        <title>Mail</title>
        <link rel="icon" href="/mail.webp" />
      </Head>
      <div className={styles.mail__tools}>
        <div className={styles.mail__toolsLeft}>
          <Link href="/">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={styles.mail__toolsRight}>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.mail__body}>
        <div className={styles.mail__bodyHeader}>
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className={styles.mail__important} />
          <p>{selectedMail?.title}</p>
          <p className={styles.mail__time}>{selectedMail?.time}</p>
        </div>
        <div className={styles.mail__message}>
          <p>{selectedMail?.description}</p>
        </div>
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>
  );
};

export default Mail;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
