import React from "react"
import Input from "../../../components/UI/Input/input";
import NewModal from "../../../components/UI/Modal/Modal";
import { Row, Col } from "react-bootstrap";

const UpdateCategoriesModal = (props) => {
    const {
      show,
      handleClose,
      modalTitle,
      size,
      expandedArray,
      checkedArray,
      handleCategoryInput,
      categoryList,
      onSubmit,
    } = props;

  return (
    <NewModal
      show={show}
      handleClose={handleClose}
      onSubmit={onSubmit}
      modalTitle={modalTitle}
      size={size}
    >
      <Row>
        <Col>
          <h6>Expanded</h6>
        </Col>
      </Row>
      {expandedArray.length > 0 &&
        expandedArray.map((item, index) => (
          <Row key={index}>
            <Col>
              <Input

                value={item.name}
                placeholder={"Category Name"}
                onChange={(e) =>
                  handleCategoryInput("name", e.target.value, index, "expanded")
                }
              />
            </Col>
            <Col>
              <Input
                type="select"
                value={item.parentId}
                onChange={(e) =>
                  handleCategoryInput(
                    "parentId",
                    e.target.value,
                    index,
                    "expanded"
                  )
                }
                placeholder="Select Category"
                options={categoryList}
              />
            </Col>
            <Col>
              <select
                className="form-control"
                value={item.type}
                onChange={(e) =>
                  handleCategoryInput("type", e.target.value, index, "expanded")
                }
              >
                <option value="">Select Type</option>
                <option value="store">Store</option>
                <option value="product">Product</option>
                <option value="page">Page</option>
              </select>
            </Col>
          </Row>
        ))}

      <Row>
        <Col>
          <h6>Checked</h6>
        </Col>
      </Row>
      {checkedArray.length > 0 &&
        checkedArray.map((item, index) => (
          <Row key={index}>
            <Col>
              <Input
                type="text"
                value={item.name}
                placeholder={"Category Name"}
                onChange={(e) =>
                  handleCategoryInput("name", e.target.value, index, "checked")
                }
              />
            </Col>
            <Col>
              <Input
                type="select"
                value={item.parentId}
                onChange={(e) =>
                  handleCategoryInput(
                    "parentId",
                    e.target.value,
                    index,
                    "xhecked"
                  )
                }
                placeholder="Select Category"
                options={categoryList}
              />
            </Col>
            <Col>
              <select
                className="form-control"
                value={item.type}
                onChange={(e) =>
                  handleCategoryInput("type", e.target.value, index, "checked")
                }
              >
                <option value="">Select Type</option>
                <option value="store">Store</option>
                <option value="product">Product</option>
                <option value="page">Page</option>
              </select>
            </Col>
          </Row>
        ))}
    </NewModal>
  );
};

export default UpdateCategoriesModal
