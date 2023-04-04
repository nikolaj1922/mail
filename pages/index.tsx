import EmailList from "@/components/EmailList";
import SendMail from "@/components/SendMail";
import { useAppSelector } from "@/store/hooks";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const { sendMessageIsOpen } = useAppSelector((state) => state.mail);
  return (
    <div
      style={{
        flex: "1",
        overflow: "scroll",
      }}
    >
      <Head>
        <title>Mail</title>
        <link rel="icon" href="/mail.webp" />
      </Head>
      <EmailList />
      {sendMessageIsOpen && <SendMail />}
    </div>
  );
}

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
