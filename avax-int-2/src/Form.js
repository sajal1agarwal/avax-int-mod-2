

import { useState } from 'react';
import { ethers } from 'ethers';
import contract_abi from './Contracts/From.json'
function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const provider = new ethers.providers.JsonRpcProvider(); 
  	const signer = provider.getSigner(); 
   let contract_address = '0xC02319cac77A698395B45C9B3da51D70c82208A8';
  	const _contract = new ethers.Contract(contract_address, contract_abi, provider); 
  const signerContract = _contract.connect(signer); 
  async function setNameAndAge() {
    await signerContract.setname(name);
    await signerContract.setage(age);
  }
  async function getNameAndAge() {
    const retrievedName = await _contract.getname();
    const retrievedAge = await _contract.getage();
    alert(`Name: ${retrievedName}\nAge: ${retrievedAge}`);
  }
  return (
    <div>
      <h1>Set Name and Age</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="text" value={age} onChange={e => setAge(e.target.value)} />
      </label>
      <br />
      <button onClick={setNameAndAge}>Set Name and Age</button>
      <h1>Get Name and Age</h1>
      <button onClick={getNameAndAge}>Get Name and Age</button>
    </div>
  );
}
export default Form;
