import React from "react";
import "../styles/components/Footer.scss";
import logo from "../assets/images/eco-logo-2.png";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1 className="text-white">GiftKart</h1>
              </div>
            </div>
            <p className="footer-text">
              Welcome to GiftKart! Discover the latest in tech innovation. From
              smartphones and laptops to smart home devices, find the perfect
              tech products to enhance your digital lifestyle. Enjoy seamless
              shopping, fast shipping, and a world of possibilities at GiftKart.
              Elevate your tech game today!
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer-quicklinks">
              <h4 className="quicklinks-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem>
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem>
                  <Link to="#">Modern Sofas</Link>
                </ListGroupItem>

                <ListGroupItem>
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem>
                  <Link to="#">Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer-quicklinks">
              <h4 className="quicklinks-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/Cart">Cart</Link>
                  
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" className="mb-4">
            <div className="footer-quicklinks">
              <h4 className="quicklinks-title">Contact</h4>

              <ListGroup className="footer-contact">
                <ListGroupItem className="ps-0 border-0">
                  <PlaceIcon />
                  <p>123 Unversity Road, Leicester LE1 2AB</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <EmailIcon />
                  <p>obaz1717@gmail.com</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <LinkedInIcon />
                  <p>
                    <Link
                      to="https://www.linkedin.com/in/ovie-g-bazunu/"
                      target="_blank"
                    >
                      Ovie G Bazunu
                    </Link>
                  </p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <GitHubIcon />
                  <p>
                    <Link to="https://github.com/KingGift17" target="_blank">
                      KingGift17
                    </Link>
                  </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer-copyright">
              Copyright &copy;{year} developed by Ovie G Bazunu. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
