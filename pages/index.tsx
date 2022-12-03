import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Button } from "../components/Button"
import { ContractQuery } from "../components/ContractQuery"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">ERC4337 web wallet</h1>
      <ConnectButton />

      <Button variant="primary">+ Create new wallet</Button>
      <ContractQuery contract_address={"0xdb46d1dc155634fbc732f92e853b10b288ad5a1d"}/>
    </div>
  )
}
