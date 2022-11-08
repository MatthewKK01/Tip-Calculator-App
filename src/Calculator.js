import { useEffect } from "react";
import {useState } from "react";
import styled from "styled-components";
import dollarIcon from "./images/icon-dollar.svg"
import personIcon from "./images/icon-person.svg"


const Calculator = () => {

  const [tipAmount, setTipAmount] = useState(parseFloat("0.00").toFixed(2));

  const [billAmount , setBillAmount] = useState("");


  const [totalAmount , setTotalAmount] = useState(parseFloat("0.00").toFixed(2))

  const [numOfPeople, setNumOfPeople] = useState("");

  const resetHandler = () => {

    //This function will reset all of the numbers to zero;
    setBillAmount("");
    setTipAmount(parseFloat("0.00").toFixed(2));
    setNumOfPeople("")
    InputCustom.value = "";
    setTotalAmount(parseFloat("0.00").toFixed(2))
  }


  function ChangeHandler(e){

    // Thanks To Nika for Helping me there

    let catchedAmount = parseFloat((billAmount / numOfPeople) * (e.target.value / 100)).toFixed(2);

    setTipAmount(catchedAmount);

    setTotalAmount(parseFloat((Math.floor(billAmount) / Math.floor(numOfPeople)) + Math.floor(catchedAmount)).toFixed(2));
  }
  



  return (
    <>
      <Calc className="Calc-container">
        <div>
        <Form action="">
          <Label htmlFor="bill">Bill</Label>
          <div className="inputWithIcon">
            <Input type="number" value={billAmount} onChange={(e)=>setBillAmount(e.target.value)} placeholder="0" name="bill" id="" />
            <img src={dollarIcon} alt="" />
          </div>
        </Form>

        <Form>

          <Label>Select Tip %</Label>
        <Section>
          <TipButton value={5} onClick={ChangeHandler}>5%</TipButton>
          <TipButton value={10} onClick={ChangeHandler}>10%</TipButton>
          <TipButton value={15} onClick={ChangeHandler}>15%</TipButton>
          <TipButton value={25} onClick={ChangeHandler}>25%</TipButton>
          <TipButton value={50} onClick={ChangeHandler}>50%</TipButton>
          <InputCustom  onChange={ChangeHandler} type="number" placeholder="Custom" name="" id="custom" />
        </Section>
        </Form>


        <Form action="">
          <Label htmlFor="bill">Number of People</Label>
          {numOfPeople >= 0 ?  null : <WarningLabel>Cant`t be zero</WarningLabel> }
          <div className="inputWithIcon">
            <Input value={numOfPeople} onChange={(e)=>setNumOfPeople(e.target.value)} placeholder="0" type="number" name="bill" id="" />
            <img src={personIcon} alt="" />
          </div>
        </Form>
        </div>
          <Results className="calc-result">
          <div className="tip-amount flexed" style={{color: "#7F9D9F"}} >
        <p> <span style={{color : "white"}}>Tip Amount</span><br/>/Person</p>
        <h1 className="tip-amount-value" id="tip-amount-value" style={{color : "#26C2AE"}} >${tipAmount}</h1>
      </div>
      <div className="total flexed" style={{color: "#7F9D9F"}} >
        <p> <span style={{color : "white"}} >Total</span><br/>/Person</p>
        <h1 className="total-amount-value"style={{color : "#26C2AE"}} >${totalAmount}</h1>
      </div>
      
      <button className="reset-button" onClick={resetHandler}>Reset</button>
          </Results>

      </Calc>
    </>
  );
}

const Calc = styled.div`
  @media screen and (min-width: 375px) {
    width: 375px;
    background: #ffffff;
    box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
    border-radius: 25px 25px 0px 0px;
    padding:32px;
  }
  @media screen and (min-width: 1024px){
    width:920px;
    height:481px;
    display:flex;
    border-radius:25px;
  }
`;

const WarningLabel = styled.label`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Space Mono', monospace;

  color: #E17457;
  margin-bottom:16px;
  margin-left: 83px;
`

const TipButton = styled.button`
  width: 146.63px;
  height: 48px;
  font-family: 'Space Mono', monospace;

  background: #00474b;
  border-radius: 5px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  outline:none;
  border:none;
  color: #ffffff;
  @media screen and (min-width: 1024px){
    width:117px;
  }
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #5e7a7d;
  margin-bottom:16px;
  font-family: 'Space Mono', monospace;

`;

const Form = styled.div`
  margin-top:2.2rem;
  font-family: 'Space Mono', monospace;

`;

const Input = styled.input`
  width: 311px;
  height: 48px;
  font-family: 'Space Mono', monospace;
  background: #f3f9fa;
  border-radius: 5px;
  padding-right:1rem;
  outline: none;
  border: none;
  text-align: right;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #00474b;
  @media screen and (min-width: 1024px){
    width:379px;
  }
  &:focus{
    border : 2px solid #26C2AE;
  }
`;

const InputCustom = styled.input`
  background: #f3f9fa;
  border-radius: 5px;
  outline: none;
  font-family: 'Space Mono', monospace;

  border: none;
  text-align: right;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #00474b;
  @media screen and (min-width: 1024px){
    width:117px;
    padding:1rem;
  }
  &:focus{
    border : 2px solid #26C2AE;
  }
`;

const Section = styled.div`
display: flex;
font-family: 'Space Mono', monospace;

flex-wrap: wrap;
row-gap: 16px;
justify-content: space-evenly;
margin-top: 0.50rem;
@media screen and (min-width: 1024px){
  justify-content:flex-start;
  gap:1rem;
  
}
`

const Results= styled.div`
  background: #00474B;
  border-radius: 1rem;
  display:block;
  overflow-x:hidden;
  font-family: 'Space Mono', monospace;

`

export default Calculator;
