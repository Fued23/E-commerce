import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaCcApplePay, FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


export default function App() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-space-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Collegati con noi sui social network:</span>
                </div>

                <div>
                    <a href='https://www.instagram.com/sam90simo/' className='me-4 text-reset'>
                        < FaInstagram className='icons' style={{ width: " 50px", height: "50px" }} />
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100071174959745' className='me-4 text-reset'>
                        <FaFacebook className='icons' style={{ width: " 50px", height: "50px" }} />
                    </a>
                    <a href='https://wa.me/393278116352' className='me-4 text-reset'>
                        <FaWhatsapp className='icons' style={{ width: " 50px", height: "50px" }} />
                    </a>


                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                SAMSAM Shop
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.
                            </p>
                        </MDBCol>




                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <FaHome style={{ width: " 20px", height: "20px" }} color='secondary' icon='home' className='me-2' />Bologna   40051
                            </p>
                            <p>
                                <FaPaperPlane className='icons' style={{ width: " 20px", height: "20px" }} />
                                <a className='me-4 text-reset' style={{ textDecoration: "none" }} href="mailto:sam_gti90@hotmail.it">  sam_gti90@hotmail.it </a>
                            </p>
                            <p>
                                <FaPhone className='icons' style={{ width: " 20px", height: "20px" }} />
                                <a className='me-4 text-reset' style={{ textDecoration: "none" }} href="tel:3278116352">  +39 327 8116352 </a>

                            </p>


                        </MDBCol>
                        <div className="container" style={{ display: " flex", justifyContent: "center" }} >
                            <FaCcPaypal style={{ width: " 45px", height: "45px" }} icon="fa-brands fa-cc-paypal" />
                            <FaCcMastercard style={{ width: " 45px", height: "45px",marginLeft:"10px" }} icon="fa-brands fa-cc-mastercard" />
                            <FaCcVisa style={{ width: " 45px", height: "45px",marginLeft:"10px" }} icon="fa-brands fa-cc-visa" />
                            <FaCcApplePay style={{ width: " 45px", height: "45px",marginLeft:"10px" }} icon="fa-brands fa-apple-pay" />
                        </div>
                    </MDBRow>
                </MDBContainer>
            </section>


        </MDBFooter >
    );
}
