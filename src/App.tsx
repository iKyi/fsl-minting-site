import { Route, Routes, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import SnackbarProvider from "providers/SnackbarProvider";
import BlockingSnabarsProvider from "providers/BlockingSnabarsProvider";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";
import { useContext, useEffect } from "react";
import { StrapiContext } from "providers/StrapiPublicProvider";
import SeoComp from "components/Reusable/Seo";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import useStakeAction from "hooks/useStakeAction";
import MintPageProper from "components/MintPageProper/MintPageProper";

const App: React.FC = () => {
  const { seo } = useContext(StrapiContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const { wallet, connected } = useWallet();
  const { connection } = useConnection();
  const { debouncedRefreshNfts } = useStakeAction();

  useEffect(() => {
    debouncedRefreshNfts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection, wallet, connected]);

  return (
    <>
      <PageWithNavWrapper>
        <SeoComp seo={seo} />
        <Routes>
          <Route element={<HomePage />} index />
          <Route element={<MintPageProper />} path="/mint" />
        </Routes>
      </PageWithNavWrapper>
      <SnackbarProvider />
      <BlockingSnabarsProvider />
    </>
  );
};

export default App;
