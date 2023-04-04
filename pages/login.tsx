import styles from "../styles/Login.module.css";
import Image from "next/image";
import Logo from "../public/mail.webp";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import { Button } from "@mui/material";
import {
  ClientSafeProvider,
  getProviders,
  getSession,
  signIn,
} from "next-auth/react";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface IProps {
  providers: ClientSafeProvider;
}

const Login: NextPageWithLayout<IProps> = ({ providers }) => {
  console.log(providers);

  return (
    <div className={styles.login}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/mail.webp" />
      </Head>
      <div className={styles.login__container}>
        <Image
          src={Logo}
          alt="logo"
          width={250}
          height={100}
          style={{ objectFit: "contain" }}
        />
        {Object.values(providers).map((provider) => (
          <Button
            key={provider.id}
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className={styles.login__button}
          >
            {provider.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const providers = await getProviders();
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      providers,
    },
  };
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
