import { Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import React, { useEffect, useState, useMemo } from "react";

const address = "0xBC0447DfF60bF8388297C8C7aa75b1B8245d3BD2";

const DataList = ({props}: any) => {
    
    return (
        <div>
            {JSON.stringify(props.List)}
        </div>
    );
}
const Judge = () => {
    const { contract } = useContract(address);
    const { data: List, isLoading: isLoadingList } = useContractRead(contract, "getAllCases");
  
    // Use memoization to cache the results of the `getAllCases` function.
    const memoedList = useMemo(() => List, [List]);
  
    console.log(memoedList);
  
    if (!isLoadingList && memoedList.length > 0) {
      memoedList.forEach((val: any) => {
        console.log(val);
      });
    }
    console.log("Yash");
  
    return (
      <>
        <h1>Hello</h1>
        <Web3Button
          contractAddress="0xBC0447DfF60bF8388297C8C7aa75b1B8245d3BD2"
          action={(contract) =>
            contract.call("add", [
              [
                "hello",
                "my",
                "name",
                "is",
                "anurag",
                "MNC",
                "Udit",
                "Singh",
                "Chauhan",
              ],
            ])
          }
        >
          Hellooooooooo
        </Web3Button>
        {/* {!isLoadingList && <DataList List={memoedList}/>} */}
      </>
    );
  };
export default Judge;
