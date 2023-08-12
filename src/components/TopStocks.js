import { Card, Table } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function TopStocks() {
  const [stocks, setStocks] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch(
        "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cioh24pr01qhd71bstqgcioh24pr01qhd71bstr0"
      );
      const data = await response.json();
      const topCompanies = data.slice(0, 5); // get the top 20 companies
      setCompanies(topCompanies);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };
  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=SKKSZF06G3YET85Z"
      );
      const data = await response.json();
      const timeSeries = data["Time Series (Daily)"];
      const stocksArray = [];

      for (const date in timeSeries) {
        const stock = {
          date,
          open: timeSeries[date]["1. open"],
          high: timeSeries[date]["2. high"],
          low: timeSeries[date]["3. low"],
          close: timeSeries[date]["4. close"],
          volume: timeSeries[date]["5. volume"],
        };

        stocksArray.push(stock);
      }
      console.log(stocksArray);
      setStocks(stocksArray);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };
  return (
    <Card>
      <Table>
        <Table.Header>
          {/* <Table.Column>Date</Table.Column>
          <Table.Column>Open</Table.Column>
          <Table.Column>High</Table.Column>
          <Table.Column>Low</Table.Column>
          <Table.Column>Close</Table.Column>
          <Table.Column>Volume</Table.Column> */}
          <Table.Column>Ticker</Table.Column>
          <Table.Column>Name</Table.Column>
          <Table.Column>Symbol</Table.Column>
          {/* <Table.Column>Current Price</Table.Column>
          <Table.Column>Market Cap</Table.Column> */}
        </Table.Header>
        <Table.Body>
          {companies.map((company, index) => (
            <Table.Row key={index}>
              <Table.Cell>{company.symbol}</Table.Cell>
              <Table.Cell>{company.description}</Table.Cell>
              <Table.Cell>{company.symbol}</Table.Cell>
              {/* <Table.Cell>{company.price}</Table.Cell>
              <Table.Cell>{company.marketCapitalization}</Table.Cell> */}
            </Table.Row>
          ))}
          {/* {stocks.map((stock, index) => (
            <Table.Row key={index}>
              <Table.Column>{stock.date}</Table.Column>
              <Table.Column>{stock.open}</Table.Column>
              <Table.Column>{stock.high}</Table.Column>
              <Table.Column>{stock.low}</Table.Column>
              <Table.Column>{stock.close}</Table.Column>
              <Table.Column>{stock.volume}</Table.Column>
            </Table.Row>
          ))} */}
        </Table.Body>
      </Table>
    </Card>
  );
}
