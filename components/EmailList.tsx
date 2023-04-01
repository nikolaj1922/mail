import styles from "../styles/EmailList.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@mui/material";
import Section from "./Section";
import EmailRow from "./EmailRow";

const EmailList = () => {
  return (
    <div className={styles.emailList}>
      <div className={styles.emailList__settings}>
        <div className={styles.emailList__settingsLeft}>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={styles.emailList__settingsRight}>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
        </div>
      </div>

      <div className={styles.emailList__sections}>
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
        <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
      </div>

      <div className={styles.emailList__list}>
        <EmailRow
          id="1"
          title="Twitch"
          subject="Hey fellow streamer!!!"
          description="This is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is testThis is test"
          time="18pm"
        />
        <EmailRow
          id="1"
          title="Twitch"
          subject="Hey fellow streamer!!!"
          description="This is test"
          time="18pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
