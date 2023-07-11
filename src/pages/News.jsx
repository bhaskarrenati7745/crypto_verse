import React, { useState, useEffect } from "react";
import { Row, Col, Avatar, Card, Typography, Select } from "antd";
import { getCryptoNews } from "../services/newsApi";
import { getCryptoCoinsByCount } from "../services/cryptoApi";
import moment from "moment";
import Loader from "../components/Loader";

// destructuring what we need
const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const count = simplified ? 6 : 14;

  const [cryptoNews, setCryptoNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("cryptocurrency");
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    getCryptoNews(selectedCategory, count)
      .then((data) => setCryptoNews(data?.value))
      .catch((err) => console.log(err));

    getCryptoCoinsByCount(100)
      .then((data) => setCryptoData(data?.data?.coins))
      .catch((err) => console.log(err));
  }, [selectedCategory]);

  if (cryptoNews.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setSelectedCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurency">Cryptocurrency</Option>
              {cryptoData.map((currency) => (
                <Option value={currency.name} key={currency.uuid}>
                  {currency.name}
                </Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt=""
                  />
                </div>
                <p>
                  {news.description.length > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt=""
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
