import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Card,
  List,
  Image,
  Typography,
  Rate,
  Button,
  Tag,
  Space,
  Form,
} from "antd";
import { GetComic, GetCategory } from "../services/https";
import { ComicsInterface } from "../interfaces/IComic";
import { CategoryInterface } from "../interfaces/ICategory";
import { NavLink, useNavigate } from "react-router-dom";

const { Meta } = Card;
const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  minHeight: 720,
  lineHeight: "120px",
  backgroundColor: "white",
};

const itemCardImage: React.CSSProperties = {
  height: "180px",
  objectFit: "scale-down",
};

const Products: React.FC = () => {
  const [comics, setComics] = useState<ComicsInterface[]>([]);
  const [categories, setCategories] = useState<CategoryInterface[]>([]);

  const getComics = async () => {
    let res = await GetComic();
    if (res) {
      setComics(res);
    }
  };

  const getCategories = async () => {
    let res = await GetCategory();
    if (res) {
      setCategories(res);
    }
  };

  useEffect(() => {
    getComics();
    getCategories();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Navbar />
      <Form>
        <Content style={contentStyle}>
          <div
            style={{ textAlign: "center", color: "black", fontSize: "30px" }}
          >
            <h1>Products</h1>
          </div>
          <div>
            <List
              grid={{ gutter: 30, column: 4 }}
              dataSource={comics}
              renderItem={(comic) => (
                <List.Item className="">
                  <Card
                    hoverable
                    className=""
                    cover={
                      <img
                        style={itemCardImage}
                        src={comic.Image}
                        alt={comic.Title}
                        onClick={() => navigate(`/ProfileComic/${comic.ID}`)}
                      />
                    }
                    actions={[
                      <Rate value={3} />,
                      <Button key={comic.ID} style={{backgroundColor:"#29ce2e", color:"white",width:90,height:38}}>
                        ฿ {comic.Price}
                      </Button>,
                    ]}
                  >
                    <Meta title={comic.Title} />
                    <Space>
                      {/* Display categories as tags */}
                      {categories
                        .filter((category) => category.ID === comic.Category_id)
                        .map((selectedCategory) => (
                          <Tag className="my-4" key={selectedCategory.ID}>
                            {selectedCategory.Name}
                          </Tag>
                        ))}
                    </Space>
                    <Card.Meta
                      description={
                        <Typography.Paragraph
                          ellipsis={{
                            rows: 2,
                            expandable: true,
                            symbol: "more",
                          }}
                        >
                          {comic.Description}
                        </Typography.Paragraph>
                      }
                    />
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </Content>
      </Form>
    </>
  );
};

export default Products;
