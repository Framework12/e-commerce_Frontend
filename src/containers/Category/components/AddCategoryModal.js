import React from "react";
import Input from "../../../components/UI/Input/input";
import NewModal from "../../../components/UI/Modal/Modal";
import { Row, Col } from "react-bootstrap";

const AddCategoryModal = (props) => {
  const {
    show,
    handleClose,
    modalTitle,
    categoryName,
    setCategoryName,
    parentCategoryId,
    setParentCategoryId,
    categoryList,
    handleCategoryImage,
    onSubmit,
  } = props;

  return (
    <NewModal
      show={show}
      handleClose={handleClose}
      onSubmit={onSubmit}
      modalTitle={modalTitle}
    >
      <Row>
        <Col>
          <Input
          type='text'
            value={categoryName}
            placeholder={`Category Name`}
            onChange={(e) => setCategoryName(e.target.value)}
            className="form-control-sm"
          />
        </Col>
        <Col>
          <Input
            type="select"
            value={parentCategoryId}
            onChange={(e) => setParentCategoryId(e.target.value)}
            options={categoryList}
            placeholder="select category"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="file"
            name="categoryImage"
            onChange={handleCategoryImage}
          />
        </Col>
      </Row>
    </NewModal>
  );
};

export default AddCategoryModal;
