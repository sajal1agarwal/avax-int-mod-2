# avax-int-mod-2
# FormDapp Project

This project provides instructions on how to set up and run the Form project using Remix IDE and Ganache CLI. The Form.sol contract is deployed on the Remix IDE using Ganache as the provider, and the project can be executed by following the steps outlined below.

## Prerequisites

Before proceeding with the setup, ensure that you have the following dependencies installed on your system:

- Node.js
- Ganache CLI

## Installation

1. Clone the project repository:

$ git clone 


2. Navigate to the project directory:

$ cd FormDapp-project


3. Install project dependencies:

$ npm install


## Ganache CLI Setup

1. Start Ganache CLI by running the following command in a new terminal window:

$ ganache-cli


Ganache CLI will launch a local Ethereum blockchain, providing you with a set of accounts and private keys to interact with.

## Remix IDE Setup

1. Open the Remix IDE in your web browser by visiting the following URL: [https://remix.ethereum.org/](https://remix.ethereum.org/)

2. In the Remix IDE, select the **Solidity** environment.

3. Click the **File Explorer** icon on the left sidebar.

4. Click the **Open** button and navigate to the location of the `Form.sol` file from the cloned project.

5. Open the `Form.sol` file in Remix IDE.

6. In the Remix IDE, select the appropriate environment in the top right corner. Choose the same environment that Ganache CLI is running on (e.g., Web3 Provider).

7. Click the **Deploy** button to deploy the `Form.sol` contract using the Ganache provider. Make sure the contract is successfully deployed, and note the contract address.

8. Download the JSON file representing the compiled contract from the Remix IDE. This file contains the contract ABI and other necessary information for interacting with the contract.

## Running the Project

1. Update the `contractAddress` and `contractABI` variables in the `index.js` file of the project with the contract address and ABI obtained from the Remix IDE.

2. Start the project by running the following command:

$ npm start


3. Open a web browser and navigate to `localhost:3000` to access the calculator application.

4. Use the calculator interface to perform various calculations using the deployed calculator contract.

## Conclusion

Follow the above instructions to set up and run the calculator project successfully. By deploying the `Form.sol` contract on the Remix IDE using Ganache as the provider and running the project locally, you can interact with the calculator and perform calculations using the calculator contract.
