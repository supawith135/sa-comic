import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import { Layout, Card, List ,Image, Typography, Rate, Button , Tag,Space} from 'antd';
import { GetComic,GetCategory } from "../services/https";
import { ComicsInterface } from "../interfaces/IComic";
import { CategoryInterface } from "../interfaces/ICategory";
const { Meta } = Card;
const { Content } = Layout;
const contentStyle: React.CSSProperties = {

  minHeight: 720,
  lineHeight: '120px',
  backgroundColor: 'white',
};

const itemCardImage: React.CSSProperties = {
    height: "150px",
    objectFit: "scale-down"

  }
  
const Products: React.FC = () => {
 
  const [comics ,setComics] = useState<ComicsInterface[]>([])
  const [category, setCategory] = useState<CategoryInterface[]>([]);
  const getComics = async () =>{
    let res = await GetComic();
    if(res){
      setComics(res);
    }
  }
  const getCategories = async () => {
    let res = await GetCategory();
    if (res) {
      setCategory(res);
    }
  };
  useEffect(() => {
    getComics();
    getCategories();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Content style={contentStyle}>
        <div style={{ textAlign: "center", color: "black", fontSize: "30px" }}>
          <h1> Products</h1>
        </div>
        <div>
          <List
            grid={{ gutter: 30,  column: 4}}
            dataSource={comics}
            renderItem={(Products) => (
              <List.Item className="">
                <Card
                  hoverable
                  className=""
                  cover={<Image style={itemCardImage}  src={Products.Image}></Image>}
                  actions={[
                    <Rate value={3}/>,
                    <button  key={Products.ID} className="btn btn-success">฿ {Products.Price}</button>
                  ]}
                  //ชื่อเรื่องComic title={Products.Title}
                ><Meta title={Products.Title}></Meta> 
                <Space>
                {category.map((item) => (
                    <Tag  key={item.Name}>
                      {item.Name}
                    </Tag>
                  ))}
                </Space >
                  <Card.Meta
                    // title={<Typography>Price : {Products.Price} .-</Typography>}
                    description = {<Typography.Paragraph ellipsis={{rows :2, expandable:true , symbol:'more'}}>{Products.Description}</Typography.Paragraph>}
                  ></Card.Meta>

                  
                </Card>
              </List.Item>
            )}
          />
        </div>

      </Content>
    </>
  );
};
export default Products;
