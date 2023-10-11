import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  About,
  Home,
  Cart,
  Error,
  Landing,
  Login,
  Register,
  Orders,
  Products,
  Payment,
  SingleProduct,
  AddProduct,
  Member,
  DataComic,
  Approve,
  Admin,
  EditProduct,
  
} from "./pages";
// import {Admin,AddProduct,Approve,DataComic,Member} from "./pages/Admin";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<SingleProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/About" element={<About />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AddProduct" element={<AddProduct />} />
        <Route path="/Member" element={<Member />} />
        <Route path="/DataComic" element={<DataComic />} />
        <Route path="/Approve" element={<Approve />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/EditProduct/:id" element={<EditProduct />} />
        
    
      </Routes>
    </Router>
  );
};
export default App;
