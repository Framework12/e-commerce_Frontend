import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/index";
import NewModal from "../../components/UI/Modal/Modal";
import Input from "../../components/UI/Input/input";
import linearCategories from "../../helpers/linearCategories";
import { useSelector, useDispatch } from "react-redux";
import { createPage } from "../../actions/index";
import { Container, Row, Col } from "react-bootstrap";

function NewPage() {
  const [createModal, setcreateModal] = useState(false);
  const [title, setTitle] = useState("");
  const [categories, setcategories] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  const [catid, setCatid] = useState("");
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    setcategories(linearCategories(category.categories));
  }, [category]);

  useEffect(() => {
    if (!page.loading) setcreateModal(false);
  }, [page]);

  const onCategoryChange = (e) => {
    const category = categories.find(
      (category) => category.value == e.target.value
    );
    setCatid(e.target.value);
    setType(category.type);
  };

  const handleBannerImages = (e) => {
    console.log(e);
    setBanners([...banners, e.target.files[0]]);
  };

  const handleProductImages = (e) => {
    console.log(e);
    setProducts([...products, e.target.files[0]]);
  };

  const submitPageForm = (e) => {
    // e.target.preventDefault()

    if (title === "") {
      alert("Title is required");
      setcreateModal(false);
      return;
    }
    const form = new FormData();
    form.append("title", title);
    form.append("description", desc);
    form.append("category", catid);
    form.append("type", type);
    banners.forEach((banner, index) => {
    form.append("banners", banner);
    });
    products.forEach((product, index) => {
      form.append("products", product);
    });

    dispatch(createPage(form));
    setcreateModal(false);
  };

  const renderCreatePageModal = () => {
    return (
      <NewModal
        show={createModal}
        modalTitle={"Create New Page"}
        handleClose={() => setcreateModal(false)}
        onSubmit={submitPageForm}
      >
        <Container>
          <Row>
            <Col>
              <Input
                type="select"
                value={catid}
                onChange={onCategoryChange}
                options={categories}
                placeholder={"Select Category"}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={"Page Title"}
                className=""
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Input
                // type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder={"Page Desc"}
                className=""
              />
            </Col>
          </Row>

          {banners.length > 0
            ? banners.map((banner, index) => (
                <Row key={index}>
                  <Col>{banner.name}</Col>
                </Row>
              ))
            : null}
          <Row>
            <Col>
              <Input
                className="form-control"
                type="file"
                name="banners"
                onChange={handleBannerImages}
              />
            </Col>
          </Row>

          {products.length > 0
            ? products.map((product, index) => (
                <Row key={index}>
                  <Col>{product.name}</Col>
                </Row>
              ))
            : null}
          <Row>
            <Col>
              <Input
                className="form-control"
                type="file"
                name="products"
                onChange={handleProductImages}
              />
            </Col>
          </Row>
        </Container>
      </NewModal>
    );
  };

  return (
    <Layout sidebar>
      {renderCreatePageModal()}
      <button onClick={() => setcreateModal(true)}>Add Page</button>
    </Layout>
  );
}

export default NewPage;
