import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />{" "}
        </Provider>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <div className="app">
          <Header />
          <main className="app_body">
            <Sidebar />
            <Component {...pageProps} />
          </main>
        </div>
      </Provider>
    </SessionProvider>
  );
}
