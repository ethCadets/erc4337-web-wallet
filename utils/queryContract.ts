import axios from "axios"
import { utils } from "ethers"

/*
queryContract function takes a contract address, logs the function names and returns the list of functions as an interface
*/

const POLYGONSCAN_API_KEY = "N5PK8PS2Q7BW5N8T4CCI59ATHV7Z4RTTDN"

const parseABI = (abi: string) => {
  const contract = new utils.Interface(abi).functions

  // `contract` object contains function data
  // Logs all function names
  console.log(Object.keys(contract))
  return contract
}

const queryContract = async (contract_address: string) => {
  console.log("Querying ", contract_address)
  let requestUrl = `https://api.polygonscan.com/api?module=contract&action=getabi&address=${contract_address}&apikey=${POLYGONSCAN_API_KEY}`
  try {
    const response = await (await axios.get(requestUrl)).data
    const abi = JSON.parse(response.result)
    // console.log(abi)
    return parseABI(abi)
  } catch {
    console.error("Error fetching ABI...")
  }
}

export default queryContract
