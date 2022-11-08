import React from "react";
import CreateElection from "./CreateElection";
import Homepage from "./Homepage";
import ActiveElections from "./ActiveElections";

import {
  Router,
  Route,
  Routes,
  Link,
  Redirect,
} from "react-router-dom";

// 1. Importing other modules
import { GetWeb3, GetContract, GetAccount } from "./BlockchainUtil";
import contractJson from "./build/contracts/MainContract.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      account: null,
      mainInstance: null,
    };
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    // 2. Load web3
    const Web3 = new GetWeb3();
    this.web3 = await Web3.getWeb3();
    this.setState({ web3: this.web3 });

    // 3. Load Account
    const Account = new GetAccount();
    this.account = await Account.getAccount(this.web3);
    this.setState({ account: this.account[0] });

    // 4. Load Contract
    const Contract = new GetContract();
    this.mainInstance = await Contract.getContract(this.web3, contractJson);
    this.setState({ mainInstance: this.mainInstance });
  }

  render() {
    return (
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/active" element={<ActiveElections />}></Route>
          <Route path="/create" element={<CreateElection />}></Route>
        </Routes>
    );
  }
}
export default App;