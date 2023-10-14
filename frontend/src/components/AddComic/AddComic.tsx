import React, { useState, useEffect } from "react";
import { Input, Form, Select, message, InputNumber, Upload ,Card} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import { ComicsInterface } from "../../interfaces/IComic";
import { CategoryInterface } from "../../interfaces/ICategory";
import { ImageUpload } from "../../interfaces/IUpload";
import { CreateComic, GetCategory } from "../../services/https";
import { useNavigate } from "react-router-dom";
import { Products } from "../../pages";

const { TextArea } = Input;
const { Option } = Select;

const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log("Change:", e.target.value);
};

function ComicCreate() {
  const navigate = useNavigate();

  const [category, setCategory] = useState<CategoryInterface[]>([]);
  const [image, setImage] = useState<ImageUpload>();

  const onFinnish = async (values: ComicsInterface) => {
    values.Image = image?.thumbUrl;
    console.log(values);
    let res = await CreateComic(values);
    if (res.status) {
      swal("Thank you!", `คุณเพิ่มหนังสือการ์ตูนสำเร็จแล้ว.`, "success");
      setTimeout(function () {
        navigate("/DataComic");
      }, 2000);
    } else {
      swal("Error!", `คุณเพิ่มหนังสือการ์ตูนไม่สำเร็จ.`, "error");
    }
  };
  const getCategories = async () => {
    let res = await GetCategory();
    if (res) {
      setCategory(res);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const normImage = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    setImage(e?.fileList[0]);
    return e?.fileList;
  };

  return (
    <>
      <Form onFinish={onFinnish}>
        <div className="flex mt-3">
          <div className="contents">
            <div className="ml-4  w-80 ">
              <Form.Item name="Title" label="Title" rules={[{ required: true, message: "กรุณาใส่ชื่อเรื่อง !" }]} >
                <Input  placeholder="Tile Comic...." />
              </Form.Item>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="contents">
            <div className="ml-4 w-80 ">
              <Form.Item
                name="Category_id"
                label="Category"
                rules={[{ required: true, message: "กรุณาเลือกประเภท !" }]}
              >
                <Select className="ml-4 ">
                  {category.map((item) => (
                    <Option value={item.ID} key={item.Name}>
                      {item.Name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>

        <div className="flex ">
          {/* <div className="ml-8 ">Description: </div> */}
          <div className="contents">
            <div className="ml-4 w-80">
              <Form.Item name="Description" label="Description" rules={[{ required: true, message: "กรุณาใส่รายละเอียด !" }]}>
                <TextArea
                  style={{ height: 120, resize: "none" }}
                  onChange={onChange}
                  placeholder="Description Comic...."
                />
              </Form.Item>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* <div className="ml-8 mr-5">URL :</div> */}
          <div className="contents">
            <div className="ml-4  w-80">
              <Form.Item name="Url" label="Url" rules={[{ required: true, message: "กรุณาใส่ URL !" }]}>
                <Input placeholder="URL Comic...." />
              </Form.Item>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* <div className="ml-8 mr-3">Price :</div> */}
          <div className="contents">
            <div className="ml-4  w-70">
              <Form.Item name="Price" label="Price" rules={[{ required: true, message: "กรุณาใส่ราคา !" }]}>
                <InputNumber placeholder="Price Comic...." />
              </Form.Item>
            </div>
          </div>
          <div className="flex-1 ml-3">Baht.</div>
        </div>

        <div className="flex">
          {/* <div className="ml-8 mr-2">Image : </div> */}
          <div className="contents">
            <div className="ml-4  w-80">
              {/* <Form.Item name="Image" label="Image" >
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-md w-full max-w-xs"
                  
                />
              </Form.Item> */}
              <Form.Item
                name="Image"
                label="Image"
                valuePropName="fileList"
                getValueFromEvent={normImage}
                rules={[{ required: true, message: "กรุณาใส่รูป !" }]}
              >
                <Upload maxCount={1} multiple={false} listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>อัพโหลด</div>
                  </div>
                </Upload>
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="card-actions ml-12 mt-3">
          <Form.Item>
            <button className="btn  btn-outline btn-success  w-full max-w-xs">
              Add Products
            </button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
}

export default ComicCreate;
