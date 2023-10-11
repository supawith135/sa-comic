import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { UserOutlined, AudioOutlined } from '@ant-design/icons';
import { Layout, Space, Pagination, Input, Empty } from 'antd';
const { Content } = Layout;
const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const contentStyle: React.CSSProperties = {

  minHeight: 720,
  lineHeight: '120px',
  backgroundColor: 'white',
};

const searchStyle: React.CSSProperties = {
    paddingTop: '"80px"',
    margin: '10px',
    textAlign: 'center',
  }
  
  const dataStyle: React.CSSProperties = {
    paddingTop: '"80px"',
    margin: '80px',
    textAlign: 'center',
  }
const Products: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Content style={contentStyle}>
              <div style={{textAlign : 'center', color:'black', fontSize: '30px'}}>
                <h1> Products</h1>
              </div>
              <div style={searchStyle}>
                <Search placeholder="ค้าหาหนังสือการ์ตูน..." onSearch={onSearch} style={{ width: 800 }} />
              </div>
              <div style={dataStyle}>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </div>
              <div style={{margin: '120px', paddingTop: '20px', textAlign: 'center'}}>
                <Pagination defaultCurrent={1} total={50} />
              </div>
      </Content>
      
    </>
  )
};
export default Products;
