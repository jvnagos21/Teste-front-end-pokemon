import type { AppProps } from "next/app";
import "../src/Styles/index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScheduleProvider } from "../src/Context/ScheduleContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ScheduleProvider>
        <Component {...pageProps} />;
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ScheduleProvider>
    </>
  );
}
