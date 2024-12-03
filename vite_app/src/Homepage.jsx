import './style.css'

function Homepage() {


  return (
    <>
<nav>
  <div>
    <img className="logo" src="https://cdn.manageengine.com/images/logo/manageengine-logo.svg" width="220" height="45"></img>
  </div>
  <div className="nav">
   <ul>
    <li className="products pro">
        Products
    </li>
    <li className="products sol">
       Solutions 
    </li>
    <li className="products com">
        Company
    </li>
    <li className="products sup">
        Support
    </li>
    <li className="products eve">
        Events
    </li>
   </ul>
   <div className="top">
     <ul>
        <li className="contact">
            Contact
        </li>
        <li className="store">
            Store
        </li>
        <li className="partner">
            Partner
        </li>
        <li className="affilitate">
            Affilitate
        </li>
     </ul>
   </div>
   </div>
  </nav>
   
  <div className="product-banner">
  <img className="pro-img" src="https://cdn.manageengine.com/images/product-banner-img.svg" height="80%"></img>
  <h1 className="text">Take control of your IT. </h1>
  <p className="text1">Monitor, manage, and secure your IT infrastructure with
  <br></br> enterprise-grade solutions built from the ground up.</p>
  <button id="start">
    <b>GET STARTED</b>
  </button>
  <button id="knowmore">
    <b>KNOW MORE</b>
  </button>
  </div>

  <div className="text3">Whether its securing your business, ensuring high availability, or keeping your customers and employees happy, <br></br>
    our AI-enhanced IT management solutions can help you solve these challenges and more.
  </div>

  <div id="container">
    <div className="box1">
        <img className="icon" src="images/icon.png" ></img>
           <h4 className="txt">Identity and access  <br></br> management</h4>
                <p className="txt1">Active Directory & M365 management | MFA & SSO | <br></br> Zero Trust | PAM</p>
    </div>
    <div className="box2">
        <img className="icon" src="images/icon2.png" ></img>
           <h4 className="txt2">Unified <br></br> service management</h4>
                <p className="txt1">Enterprise and IT service delivery | IT asset <br></br> management | Customers support</p>
    </div>
    <div className="box3">
         <img className="icon3" src="images/icon3.png" ></img>
            <h4 className="txt">Unified endpoint  <br></br> management and security</h4>
                <p className="txt1">Desktops | Servers | Laptops | Mobile devices | <br></br> Browsers</p>
    </div>
    <div className="box4">
         <img className="icon4" src="images/icon4.png"></img>
            <h4 className="txt">IT operations management <br></br> and  observability</h4>
               <p className="txt1">Observability | AIOps | DEM | Applications | <br></br> Infrastructure | Network</p>
    </div>
    <div className="box5">
        <img className="icon" src="images/icon5.png" ></img>
           <h4 className="txt">Security information and <br></br> event management</h4>
             <p className="txt1">Log management | Security auditing | Threat detection and <br></br> response | UEBA</p>
    </div>
    <div className="box6">
        <img className="icon" src="images/icon6.png" ></img>
           <h4 className="txt2">Advanced <br></br> IT analytics</h4>
              <p class="txt1">Unified IT analytics | AI-powered insights | <br></br> IT data correlation | Capacity planning</p>
    </div>
    <div className="box7">
        <img className="icon" src="images/icon7.png" ></img>
           <h4 className="txt">Low-code app development</h4>
              <p className="txt1">Business process management | Workflow automation | <br></br>Custom apps</p>
    </div>
    <div className="box8">
        <img className="icon" src="images/icon8.png" ></img>
          <h4 className="txt">IT management <br></br>for MSPs </h4>
             <p className="txt1">RMM | UEM | ITSM | ITOM | IAM | SIEM</p>
    </div>
    <div className="box9">
        <img className="icon" src="images/icon9.png" ></img>
           <h4 className="txt">Cloud solutions for <br></br> enterprise IT</h4>
             <p className="txt1">Cloud-ready | Cloud-native</p>
    </div>
    </div>
    
    <div>
    <div id="know" style={{backgroundColor: "#e04b3a"}}>EXPLORE OUR PRODUCTS</div>
</div>

<div>
    <img className="slides" src="https://www.manageengine.com/images/homeslider2.jpg"></img>
    <img className="img1" src="https://www.manageengine.com/images/homeslider2.png" ></img>
    <p className="manage">ManageEngine recognized in the <br></br> <b>2024 Gartner® Magic Quadrant™</b> for <br></br> <b>Digital Experience Monitoring</b></p>
</div>

<div className="text5">
   <strong> 280,000 organizations across 190 countries trust ManageEngine <br></br>
to manage their IT. </strong>
</div>
<div className="container">
  <div>
    <img className="box" style={{borderradius: "8px"}} src="https://cdn.manageengine.com/images/west-yorkshire.jpg"  ></img>
    <p className="tt">West Yorkshire Combined Authority adopts ManageEngine solutions to <br></br> scrutinize its critical IT</p>
  </div>
  <div className="box10">
      <img className="certis" src="https://cdn.manageengine.com/images/certis-europe.png" width="50%" height="23%"></img>
      <p className="certistxt">Europe ensures uptime with <br></br> Applications Manager</p>
  </div>
  <div className="box11">
      <img className="ezibuy" src="https://cdn.manageengine.com/images/ezibuy-logo.png" width="60%" height="10%"></img>
      <p className="ezibuytxt">increases SLA compliance by <br></br> 70 percent using Analytics Plus</p>
  </div>
  <div className="box12">
     <img className="hcl" src="https://cdn.manageengine.com/images/hcllogo.png" height="20%" width="65%" ></img>
     <p className="hcltxt">uses Log360 to log <br></br> management challenges</p>
  </div>
  <div className="box13">
     <img className="strathallan" src="https://cdn.manageengine.com/images/strathallan.png" height="25%" width="65%"></img>
     <p className="strathallantxt">manages endpoints seamlessly <br></br> with Endpoint Central</p>
  </div>
  <div >
    <img className="box14" src="https://cdn.manageengine.com/images/martin-mcnab.jpg"></img>
    
  </div>
</div>

<div className="more-stories">
    View more customer success stories »
</div>

<div className="companies">
   <b>Nine of every ten Fortune 100 companies trust us to manage their IT.</b>
</div>

<div className="ft-container">
    <p className="connect">Connect. Ask. Share.</p>
    <p style={{position: "absolute", top: "23%", left: "42%" }} >Because IT is better together, always.</p>
    <img className="message" src="images/message.png" ></img>
    <img className="blogs" src="images/blogs.png"></img>
    <img className="freetools" src="images/freetools.png"></img>
    <img className="marketplace" src="images/marketplace.png"></img>
</div>

<div className="container2">
    <div className="press">
      <img src="https://cdn.manageengine.com/images/press-release-icon.svg" width="29%" style={{position: "absolute", top: "23%",left: "2%"}}></img>
    </div>
    <div className="news">
      <img src="https://cdn.manageengine.com/images/press-news-icon.svg" width="20%" style={{position: "absolute", top: "12%",left: "8%"}} ></img>
    </div>
</div>
    </>
  )
}

export default Homepage