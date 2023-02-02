"use client"; // this is a client component
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

export default function MyBlockchainApp() {
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState(null);
  
    return useEffect(() => {
      const initWeb3 = async () => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        const balanceInWei = await web3.eth.getBalance(accounts[0]);
        setBalance(web3.utils.fromWei(balanceInWei, 'ether'));
      };
      initWeb3();
    }, []);
    
    return (
      <div>
        <h1>My Blockchain App</h1>
        <p>Account: {account}</p>
        <p>Balance: {balance} ETH</p>
      </div>
    );
  };
  

  
  
