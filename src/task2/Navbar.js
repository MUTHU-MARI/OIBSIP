import React from 'react'
import '../assets/Navbar.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button} from 'antd';
import Typed from 'typed.js';
import {FacebookFilled,InstagramFilled,GoogleCircleFilled,MailOutlined,GithubFilled,LinkedinFilled,TwitterCircleFilled,} from '@ant-design/icons';
  
const Navbar = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      useEffect(() => {
        const typed = new Typed(".auto-type1", {
          strings: ["WELCOME !!"],
          typeSpeed: 200,
          backSpeed: 10,
          showCursor: true,
          loop:true
        });
        return () => {
          typed.destroy();
        };
      }, []);
      useEffect(() => {
        const typed = new Typed(".auto-type2", {
          strings: [ "to my"],
          typeSpeed: 300,
          backSpeed: 10,
          showCursor: true,
          loop:true
        });
        return () => {
          typed.destroy();
        };
      }, []);
      useEffect(() => {
        const typed = new Typed(".auto-type3", {
          strings: ["PORTFOLIO."],
          typeSpeed: 200,
          backSpeed: 10,
          showCursor: true,
          loop:true
        });
        return () => {
          typed.destroy();
        };
      }, []);

      const handleRedirect = (url) => {
        window.location.href = url;
      };

  return (
    <div className='main'>
    <div className='nav'>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#about">About Me</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#skill">Skills</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#project">Projects</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="#contact">contact</a>
            </li>
        </ul>

    </div>

    <div className='section1'>
    <div className="typewriter1">
      <h1><span className="auto-type1"></span></h1>
    </div>
    <div className="typewriter2">
      <h1><span className="auto-type2"></span></h1>
    </div>
    <div className="typewriter3">
      <h1><span className="auto-type3"></span></h1>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>

    <div  data-aos="fade-down" data-aos-duration="400" data-aos-delay="200" data-aos-easing="ease-in-out"  className='section2' id="about">
    <h2 style={{textAlign:"center",color:"BLACK",fontSize:"35px",fontFamily:"papyrus"}} >About Me</h2>
    <div className="line" > <hr/></div>
    <br/>
    <br/>
        <div className='wrapper1'>
        <div className='img-circ' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out">
        </div>
        <div className='about-cont' data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out">
            <p>Hello, I am Muthumari</p>
            <p >I'm a FullStack Web Developer.
                 I love learning new things and my motto is to always implement best practices.
                  Safe code is good code.
                  An active listener and enthusiatic learner.I'm persuing my Under-Graduate degree at Sri Krishna College Of Technology.  My hobbies are Drawing ,Planting and Travelling</p>
        </div>
        </div>
    </div>

    <div className='section3'data-aos="fade-down" data-aos-duration="400" data-aos-delay="200" data-aos-easing="ease-in-out" id="skill">
        <h2 style={{textAlign:"center",color:"BLACK",fontSize:"35px",fontFamily:"papyrus"}}>Skills - Technical</h2>
        <div className="line" > <hr/></div>
        <div style={{display:"flex",gap:"25px",marginLeft:"16%"}} className='skill'>
        <p style={{float:"left"}} className='img-circ-1' data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out"></p>
        <p style={{float:"right"}} className='img-circ-2' data-aos="zoom-in-right" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out"></p>
        <p style={{float:"left"}} className='img-circ-3' data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out"></p>
        </div>

        <h2 style={{textAlign:"center",color:"BLACK",fontSize:"35px",fontFamily:"papyrus"}}>Skills - Non Technical</h2>
        <div className="line" > <hr/></div>
        <div style={{display:"flex",gap:"25px",marginLeft:"16%"}} className='skill'>
        <p style={{float:"left"}} className='img-circ-4' data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out"></p>
        <p style={{float:"right"}} className='img-circ-5' data-aos="zoom-in-right" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out"></p>
        <p style={{float:"left"}} className='img-circ-6' data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out"></p>
        </div>
    </div>  

<div className='section4' data-aos="fade-down" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out" id="project">
    <h2 style={{textAlign:"center",color:"BLACK",fontSize:"35px",fontFamily:"papyrus"}}>Projects</h2>
    <div className="line" > <hr/></div>   
    <div class="container">
  <div class="card-group vgr-cards">
    <div class="card">
      <div class="card-img-body">
      <img className="card-img"  style={{marginLeft:"40px"}} data-aos="zoom-in-right" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out" src="https://cdn.motocms.com/src/737x554/63400/63467-original-1200.jpg" alt="Card image cap"/>
      </div>
      <div class="card-body">
        <h4 class="card-title" style={{fontFamily:"papyrus",fontSize:"30px",fontWeight:"800"}}>RAPT- Frontend</h4>
        <p class="card-text"  data-aos="zoom-in-right" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out" style={{fontFamily:"papyrus",fontSize:"20px",fontWeight:"600"}}>Rapt is a  Frontend website designed with React.js for college students.It consists of events list and gallery to make it better use in future.It is a group project and we used API and Axios library .</p>
          <Button  href="#" type="primary" ghost>View Code</Button>
      </div>
    </div>
    <div class="card">
      <div class="card-img-body">
        <img class="card-img"  style={{marginLeft:"40px"}} data-aos="zoom-in-left" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/340991846/original/24d541ae10ac7806cc7d320bacc6b8a256b0fd55/design-chauffeur-website-build-taxi-booking-website-with-reservation.png" alt="Card image cap"/></div>
      <div class="card-body">
        <h4 class="card-title" style={{fontFamily:"papyrus",fontSize:"30px",fontWeight:"800"}}>JAUNT- FullStack</h4>
        <p class="card-text"  data-aos="zoom-in-right" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out" style={{fontFamily:"papyrus",fontSize:"20px",fontWeight:"bold"}}>Jaunt is a fullstack Cab Booking website.I used React for Frontend and Springboot for backend.It also has Verification and Validation forms. The concepts were implemented using the Crud operations like Put ,Post, Get, Delete.The Datas are saved at the backend Database SQL.</p>
        <Button href="#" type="primary" ghost>View Code</Button>
      </div>
    </div>
    <div class="card">
      <div class="card-img-body">
        <img class="card-img" style={{marginLeft:"40px"}} data-aos="zoom-in-down" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out" src="https://www.practicalecommerce.com/wp-content/uploads/2015/05/gifts-personal-570x530.png" alt="Card image cap"/></div>
      <div class="card-body">
        <h4 class="card-title" style={{fontFamily:"papyrus",fontSize:"30px",fontWeight:"800"}}>GIFT PORTAL- FullStack</h4>
        <p class="card-text" data-aos="zoom-in-right" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out" style={{fontFamily:"papyrus",fontSize:"20px",fontWeight:"600"}}>This a Fullstack website developed using React and Springboot.For enchanced privacy and safety it is implemented with JWT( Java Web Tokens), Microservices using Eureka Server.This website has two sides one is Client and other is Admin.They both have Dashboard.In this website users can customize their gifts and all the datas are saved in backend database SQL. </p>
          <Button href="#" type="primary" ghost>View Code</Button>
      </div>
    </div>
  </div>
</div>
<div className='table' data-aos="zoom-in-right" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out" style={{fontFamily:"papyrus",fontSize:"25px",fontWeight:"600",color:"violet"}}>
    <table>
        <tr>
            <th style={{color:"black"}}>My Certifications</th>
        </tr>
        <tr>
            <td>NPTEL - Effective Writing</td>
        </tr>
        <tr>
            <td>NPTEL - Cloud Computing</td>
        </tr>
        <tr>
            <td>IBM - Artificial Intelligence(Beginner)</td>
        </tr>
    </table>
</div> 
    <br/>
    <br/>
</div>


<div className='section5'data-aos="zoom-in-down" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in-out" id="contact">
<h2 style={{textAlign:"center",color:"BLACK",fontSize:"35px",fontFamily:"papyrus"}}>Contact</h2>
<div className="line" > <hr/></div>
<div class="icons" style={{marginTop:"5%",display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
<FacebookFilled
        style={{ fontSize: '24px', color: '#1877f2', cursor: 'pointer' ,marginLeft:"80%",}}
        onClick={() => handleRedirect('https://www.facebook.com')}
      />
      <InstagramFilled
        style={{ fontSize: '24px', color: '#e4405f', cursor: 'pointer',marginLeft:"55%" }}
        onClick={() => handleRedirect('https://www.instagram.com')}
      />
      <GoogleCircleFilled
        style={{ fontSize: '24px', color: '#4285f4', cursor: 'pointer',marginLeft:"20%" }}
        onClick={() => handleRedirect('https://www.google.com')}
      />
      <MailOutlined
        style={{ fontSize: '24px', cursor: 'pointer' ,color: '#e4405f',marginLeft:"80%",marginTop:"11%"}}
        onClick={() => handleRedirect('mailto:example@example.com')}
      />
      <GithubFilled
        style={{ fontSize: '24px', color: '#333', cursor: 'pointer',marginLeft:"55%",marginTop:"11%" }}
        onClick={() => handleRedirect('https://github.com')}
      />
      <LinkedinFilled
        style={{ fontSize: '24px', color: '#0077b5', cursor: 'pointer',marginLeft:"20%",marginTop:"11%" }}
        onClick={() => handleRedirect('https://www.linkedin.com')}
      />
      <TwitterCircleFilled
        style={{ fontSize: '24px', color: '#1da1f2', cursor: 'pointer',marginLeft:"80%" ,marginTop:"11%"}}
        onClick={() => handleRedirect('https://twitter.com')}
      />
</div>
</div >

  </div>

)
}
export default Navbar
