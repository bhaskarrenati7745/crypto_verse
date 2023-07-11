import React, { useState, useEffect } from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  // const [exchangesList, setExchangesList] = useState([]);

  // useEffect(() => {
  //   getCryptoExchanges()
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default Exchanges;
