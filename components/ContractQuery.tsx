import queryContract from "../utils/queryContract"

export const ContractQuery = ({
  contract_address,
}: {
  contract_address: string
}) => {
  queryContract(contract_address)
  return <></>
}
