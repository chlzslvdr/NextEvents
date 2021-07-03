import Head from "next/head";
import NotificationContextProvider from "../store/notification-context";
import Layout from "../components/layout/layout";
import Notification from "../components/ui/notification";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Head>
        <title>NextEvents</title>
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Notification title="Test" message="This is a test." status="success" />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
