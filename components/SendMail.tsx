import LoadingButton from "@mui/lab/LoadingButton";
import styles from "../styles/SendMail.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/store/hooks";
import { closeSendMessage } from "@/store";
import { useState } from "react";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

interface FormValues {
  to: string;
  subject: string;
  message: string;
}

const SendMail = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    if (loading) return;

    setLoading(true);
    const docRef = collection(db, "emails");
    await addDoc(docRef, {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });
    setLoading(false);
    dispatch(closeSendMessage());
  };

  return (
    <div className={styles.sendMail}>
      <div className={styles.sendMail__header}>
        <h3>New Message</h3>
        <CloseIcon
          className={styles.sendMail__close}
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className={styles.sendMail__error}>To is Required!</p>}
        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        />
        {errors.subject && (
          <p className={styles.sendMail__error}>Subject is Required!</p>
        )}
        <input
          {...register("message", { required: true })}
          placeholder="Message..."
          type="text"
          className={styles.sendMail__message}
        />
        {errors.message && (
          <p className={styles.sendMail__error}>Message is Required!</p>
        )}

        <div className={styles.sendMail__options}>
          <LoadingButton
            size="small"
            loading={loading}
            variant="contained"
            className={styles.sendMail__button}
            type="submit"
          >
            <span>Send</span>
          </LoadingButton>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
