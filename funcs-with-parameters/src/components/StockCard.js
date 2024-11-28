import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 15px auto;
  max-width: 400px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const StockName = styled.h2`
  color: #2b2b52;
  margin: 0 0 10px 0;
`;

const StockDetails = styled.p`
  margin: 5px 0;
  font-size: 1.1rem;
`;

const Price = styled.span`
  color: ${(props) => (props.isPositive ? "green" : "red")};
  font-weight: bold;
`;

function StockCard({ name, ticker, price, change }) {
  const isPositive = change.startsWith("+");

  return (
    <Card>
      <StockName>{name}</StockName>
      <StockDetails>
        <strong>Ticker:</strong> {ticker}
      </StockDetails>
      <StockDetails>
        <strong>Price:</strong> ${price.toFixed(2)}{" "}
        <Price isPositive={isPositive}>{change}</Price>
      </StockDetails>
    </Card>
  );
}

export default StockCard;
