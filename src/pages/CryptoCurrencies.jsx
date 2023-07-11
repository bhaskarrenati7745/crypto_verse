import React, { useState, useEffect } from "react";
import millify from "millify";
import { Card, Row, Col, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { getCryptoCoinsByCount } from "../services/cryptoApi";
import CryptoCard from "../components/CryptoCard";
import Loader from "../components/Loader";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedCrypto, setSearchedCrypto] = useState([]);

  useEffect(() => {
    getCryptoCoinsByCount(count)
      .then((data) => setCryptos(data?.data?.coins))
      .catch((err) => console.log(err));
  }, []);

  if (cryptos.length === 0) {
    return <Loader />;
  }

  return (
    <>
      {!simplified && (
        <Row>
          <Typography.Title level={2}>
            CryptoCurrencies in world
          </Typography.Title>
        </Row>
      )}

      <Row gutter={[32, 32]}>
        {cryptos.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            key={currency.uuid}
            className="crypto-card"
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <CryptoCard currency={currency} />
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
