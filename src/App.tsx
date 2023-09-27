import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Judge from "./components/Judge";

export default function Home() {
  return (
    <>
    <ConnectWallet/>
    <Judge/>
    </>
  );
}
