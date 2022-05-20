import Header from "../components/Shared_components/Header";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Box } from "@mui/material";
import Modal from "../components/Pricing/Modal";
import Side from "../components/Shared_components/Side";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Provider store={store}>
        <Header />
        {/* main app */}
        <Box
          sx={{
            display: "flex",
            position: "relative",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Component {...pageProps} />
          </Box>
          {/* shared side contents + modal  */}
          <Box
            sx={{
              height: "flex 1 ",
              maxWidth: router && router.route == "/checkout" ? "40%" : "25%",
              paddingRight: router && router.route == "/checkout" ? "15vw" : 0,
              width: "100%",
            }}
          >
            <Side />
          </Box>
          <Modal />
        </Box>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default MyApp;
