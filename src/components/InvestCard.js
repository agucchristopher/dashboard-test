import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import Aos from "aos";
import { useEffect } from "react";

export default function App({ name, percentage, wDate, minimum }) {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  return (
    // <Grid.Container gap={2}>
    // <Grid sm={12} md={5}>
    <Card
      css={{
        mw: "400px",
        m: 5,
        alignSelf: "center",
        justifyContent: "center",
        // display: "flex",
      }}
    >
      <Card.Header>
        <Text b> {name} Plan </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ py: "$10" }}>
        <Text h5>Amount: ${minimum} and above </Text>
        <Text h6>Percentage: {percentage}%</Text>
        <Text>Withdrawal Date: {wDate}.</Text>
      </Card.Body>
    </Card>
  );
}
