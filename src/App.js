import React, { useState } from "react";
import MyAlgoConnect from '@randlabs/myalgo-connect';
import '../styles/App.css'

const App = () => {

    const [address, setAddress]= useState('')

    const connectWallet = async() => {
        const myAlgoConnect = new MyAlgoConnect();
        const accountsSharedByUser = await myAlgoConnect.connect();
        setAddress(accountsSharedByUser[0].address)
    }

    return (
        <div className="app">
            <nav>
                <h1>Swap</h1>
                <>
                  { !address ? <button onClick={connectWallet}>Connect wallet</button> : <button>Click to Whitelist</button>}
                </>
            </nav>
            <div className="container">
                { !address ?
                   <p className="warning"> You cannot be whitelisted unless your wallet is connected! </p> :
                  <div className="list">
                     <section>kbrjknkbjrknbjgkajj</section>
                  </div> 
                }
            </div>

        </div>
    )
}

export default App 
