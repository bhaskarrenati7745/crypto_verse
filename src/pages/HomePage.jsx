import React, { useEffect, useState } from "react";
import millify from "millify";
import { Typography, Statistic, Row, Col } from "antd";
import { Link } from "react-router-dom";

import { getCryptoCoins } from "../services/cryptoApi";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";
import Loader from "../components/Loader";

// destructuring the title from the typography
const { Title } = Typography;

const HomePage = () => {
  // we are getting the data from the hook
  const [stats, setStats] = useState({});

  useEffect(() => {
    getCryptoCoins()
      .then((data) => setStats(data?.data?.stats))
      .catch((err) => console.log(err));
  }, []);

  if (stats.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <Title level={2} className="heading">
        Global Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies" value={stats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(stats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(stats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(stats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(stats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Title>

        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <CryptoCurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top News about Crypto
        </Title>

        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
