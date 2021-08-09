import React from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { listProducts } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1> Latest Product </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {" "}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lp={4} xl={3}>
              <Product product={product} />{" "}
            </Col>
          ))}{" "}
        </Row>
      )}{" "}
    </>
  );
};

export default HomeScreen;
