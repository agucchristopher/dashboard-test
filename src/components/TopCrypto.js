import { Card, Table } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const TopCrypto = () => {
  const [coins, setcoins] = useState([]);
  useEffect(() => {
    fetchCoins();
  }, []);
  function addCommas(number) {
    if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  let fetchCoins = async () => {
    try {
      let response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1"
      );
      const data = await response.json();
      setcoins(data);
      console.log(data);
      console.log(coins);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card>
      <Table>
        <Table.Header>
          <Table.Column>Rank</Table.Column>
          <Table.Column>Coin</Table.Column>
          <Table.Column>Name</Table.Column>
          <Table.Column>Price</Table.Column>
          {/* <Table.Column>Market</Table.Column> */}
        </Table.Header>
        <Table.Body>
          {coins &&
            coins.map((item, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>
                    <img src={item.image} style={{ height: 40, width: 40 }} />
                  </Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>${addCommas(item.current_price)}</Table.Cell>
                  {/* <Table.Cell>Active</Table.Cell> */}
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </Card>
  );
};

export default TopCrypto;
