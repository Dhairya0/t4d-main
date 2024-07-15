import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@constants";

const Footer = () => 
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
    <div style={{       
                            width: '100%',
                            paddingRight: '10px',
                            
                            
                        }}>
                            <span className="d-block mb-3 mt-3" >
                                <h5> Have Questions or Feedback?</h5>
                            </span>
                            <span className="d-block mb-3" >
                                For any inquiries or feedback, please contact Dr. Irfan Batur at
                                <div style={{color: 'blue', textDecoration:'underline'}
                                  
                                }>
                                <a href="mailto:ibatur@asu.edu" className="ms-1">ibatur@asu.edu</a></div>
                            </span>
                            <div style={{
                                position: 'absolute',
                                top: '50%', 
                                right: 0,
                                transform: 'translateY(-50%)', 
                                height: '40px', 
                                width: '2px',
                                backgroundColor: '#352c26',
                                opacity: 0.2
                            }}></div>
                        </div>
    <div className='d-block mt-2'>
                    <div style={{ paddingTop: '10px' }}>
                        <span style={{ marginRight: "15px", fontWeight: "700" }}><h3>Our Sponsors</h3></span>
                    </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 10px', flexWrap: 'wrap', marginTop: '-20px' }}>
                    <a href='https://www.transportation.gov/' target='_blank' rel='noreferrer'>
                        <img src='us-dot.png' alt="USDOT Logo" style={{ width: "270px", margin: "10px" }} />
                    </a>
                    <a href="https://www.asu.edu/" target="_blank" rel="noreferrer">
                        <img src='asu.png' alt="ASU Logo" style={{ width: "210px", margin: "10px" }} />
                    </a>
                    <a href='https://tomnet-utc.engineering.asu.edu/' target='_blank' rel='noreferrer'>
                        <img src='tomnet.png' alt="TOMNET Logo" style={{ width: "310px", margin: "10px" }} />
                    </a>
                    <a href="https://tbd.ctr.utexas.edu/" target='_blank' rel="noreferrer">
                        <img src='tbd.png' alt="UT CTR Logo" style={{ width: "220px", margin: "10px" }} />
                    </a>
                    <a href="https://www.utexas.edu/" target='_blank' rel="noreferrer">
                        <img src='utaustin.png' alt="UT Austin Logo" style={{ width: "180px", margin: "10px" }} />
                    </a>
                </div>
      
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>©2024 T4D. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
;

export default Footer;
