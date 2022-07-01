import React from 'react'
import './Home.css'
import img from '../images/actual.jpg'
import logo from '../images/logo.jpg'
const Home = () => {
  return (
   <div className="Home ">
     <div className="row container-fluid">
       <div className="col  first ">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="150" height="32 " class="d-inline-block align-text-top text-dark"/>
    </a>
    <div>
    <div className="col were ">WE'RE</div>
         <div className="col come">COMING <br /> SOON</div>
         <div className="col text">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</div>
         <div className="col">
         <div class="mb-3">
    <input type="email" class="er bord form-control" id="exampleInputEmail1" placeholder='Email Address' aria-describedby="emailHelp"
     
     />

  </div>
         </div>
    </div>
    </div>
       <div className="second col-6">
         <img src={img}  class="img " alt="" />
       </div>
     </div>
   </div>
  )
}

export default Home