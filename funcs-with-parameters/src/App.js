import React from "react";
import StockCard from "./components/StockCard";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: #f4f4f9;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 10px;
`;

function App() {
  const stockData = [
    { name: "Apple Inc.", ticker: "AAPL", price: 174.56, change: "+2.45" },
    { name: "Tesla", ticker: "TSLA", price: 229.78, change: "-5.23" },
    { name: "Microsoft", ticker: "MSFT", price: 345.89, change: "+1.89" },
    { name: "Amazon", ticker: "AMZN", price: 133.45, change: "-0.56" },
  ];

  // let calculateSachinResult = () => {
  //   let engMarks = 85;
  //   let telMarks = 75;
  //   let hindiMarks = 70;
  //   let HTMLMarks = 65;
  //   let CSSMarks = 79;
  //   let JavaScriptMarks = 95;

  //   let passMarks = 35;

  //   if (
  //     engMarks >= passMarks &&
  //     telMarks >= passMarks &&
  //     hindiMarks >= passMarks &&
  //     HTMLMarks >= passMarks &&
  //     CSSMarks >= passMarks &&
  //     JavaScriptMarks >= passMarks
  //   ) {
  //     console.log(`Sachin Passed in Tenth`);
  //   } else {
  //     console.log(`Sachin Failed in Tenth`);
  //   }
  // };

  // let calculateRahulResult = () => {
  //   let engMarks = 50;
  //   let telMarks = 47;
  //   let hindiMarks = 77;
  //   let HTMLMarks = 69;
  //   let CSSMarks = 99;
  //   let JavaScriptMarks = 94;

  //   let passMarks = 35;

  //   if (
  //     engMarks >= passMarks &&
  //     telMarks >= passMarks &&
  //     hindiMarks >= passMarks &&
  //     HTMLMarks >= passMarks &&
  //     CSSMarks >= passMarks &&
  //     JavaScriptMarks >= passMarks
  //   ) {
  //     console.log(`Rahul Passed in Tenth`);
  //   } else {
  //     console.log(`Rahul Failed in Tenth`);
  //   }
  // };

  // let calculateDhoniResult = () => {
  //   let engMarks = 75;
  //   let telMarks = 85;
  //   let hindiMarks = 60;
  //   let HTMLMarks = 95;
  //   let CSSMarks = 75;
  //   let JavaScriptMarks = 90;

  //   let passMarks = 35;

  //   if (
  //     engMarks >= passMarks &&
  //     telMarks >= passMarks &&
  //     hindiMarks >= passMarks &&
  //     HTMLMarks >= passMarks &&
  //     CSSMarks >= passMarks &&
  //     JavaScriptMarks >= passMarks
  //   ) {
  //     console.log(`Dhoni Passed in Tenth`);
  //   } else {
  //     console.log(`Dhoni Failed in Tenth`);
  //   }
  // };

  // calculateSachinResult();
  // calculateDhoniResult();
  // calculateRahulResult();

  // let claculateStudentResult = (
  //   engMarks,
  //   telMarks,
  //   hindiMarks,
  //   HTMLMarks,
  //   CSSMarks,
  //   JavaScriptMarks,
  //   StudentName
  // ) => {
  //   let passMarks = 35;

  //   if (
  //     engMarks >= passMarks &&
  //     telMarks >= passMarks &&
  //     hindiMarks >= passMarks &&
  //     HTMLMarks >= passMarks &&
  //     CSSMarks >= passMarks &&
  //     JavaScriptMarks >= passMarks
  //   ) {
  //     console.log(`${StudentName} Passed in Tenth`);
  //   } else console.log(`${StudentName} Failed in Tenth`);

  //   // console.log(engMarks);
  //   // console.log(telMarks);
  // };

  // claculateStudentResult(66, 81, 54, 36, 74, 26, "Virat Kohli");
  // claculateStudentResult(96, 81, 94, 36, 44, 86, "Rahul Gandhi");
  // // claculateStudentResult(69, 71);
  // // claculateStudentResult(86, 83);

  return (
    <AppWrapper>
      <Header>Stock Market Dashboard</Header>
      {stockData.map((stock) => (
        <StockCard key={stock.ticker} {...stock} />
      ))}
    </AppWrapper>
  );
}

export default App;
