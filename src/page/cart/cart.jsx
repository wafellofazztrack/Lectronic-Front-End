import NavbarAuth from "../../components/navbarAuth/navbarauth";
import { Col, Container, Row, InputGroup, Form, Button } from "react-bootstrap";
import searchicon from "../../assets/icon/search.png";
import cart from "../../assets/icon/cart.png";
import person from "../../assets/icon/person.png";
import "./cart.css";
import CartList from "../../components/cart/cartList/cartList";

function Cart() {
  return (
    <div>
      <NavbarAuth />

      <Container>
        <Container className="prod-dspl">
          <Col>
            <InputGroup className="mb-3 prod-search">
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <img
                  className="prod-search-size"
                  src={searchicon}
                  alt="btn-search"
                />
              </Button>
            </InputGroup>
          </Col>

          <div className="prod-btn-nav">
            <Button variant="outline-light">
              <img className="prod-btn-size" src={person} alt="box" />
            </Button>
          </div>

          <div className="prod-btn-nav">
            <Button variant="outline-light">
              <img className="prod-btn-size" src={cart} alt="box" />
            </Button>
          </div>
        </Container>
        <Row className="cart-header">Cart</Row>
        <Row id="check">
          <div className="check-false"></div>
          <Col>
            <div className="select-all">Select All</div>
          </Col>
        </Row>
        <div className="row-flex">
          <div className="row-cart">
            <Row>
              <CartList />
            </Row>
            <Row>
              <CartList />
            </Row>
            <Row>
              <CartList />
            </Row>
            <Row>
              <CartList />
            </Row>
            <Row>
              <CartList />
            </Row>
            <Row>
              <CartList />
            </Row>
            <Row>
              <CartList />
            </Row>
            <Row>
              <CartList />
            </Row>
            <Row>
              <CartList />
            </Row>
          </div>
          <Row id="total-checkout">
            <div className="total">Total</div>
            <div className="item">
              <div className="left">
                <div>Item Price</div>
                <div>Discount</div>
              </div>
              <div className="price">
                <div>$0</div>
                <div>$6000</div>
              </div>
            </div>
            <hr/>
            <div className="bill">
              <div >Bill</div>
              <div >$6000</div>
            </div>
            <div className="checkout-btn">
              <div className="text">Check Out</div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
