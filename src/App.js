import './App.css';
import m_images from './images/1.jpg'

function Navbar() {
  return (
    <div className="main-div">
      <header className="header">
        <div className="samp">
          Anish Patil
          <br></br>
          <h>Web Devloper</h>
        </div>
        <samp className="space"> ------ </samp>
        <div className="samp">
          <a className="anchor">About me</a>
        </div>
        <samp className="space"> ------ </samp>
        <div className="samp">Contact</div>
      </header>
    </div>
  );
}

function Mainimage() {
  return (
    <div>
      <img className='m_image' src={m_images} alt=' '></img>
    </div>
  );
}

function Background() {
}

function Introtext() {
  return (
    <div className='introText'>
      <h3>Hi i am Anish.</h3>
      <h1>Web Devloper at Mindbowser.</h1>
      <h2>Frindly Nature Loves to meet new pepole.</h2>
      <h4>More</h4>
    </div>
  );
}

function Personalinfo() {
  return (
    <div className="personal_info">
      <h1>Hi, I am Anish Vijay Patil</h1>
      <h3>
        <p >
          I am basicaly from Alibag Currently leaving in Pune.I have completed my bachlores from Pune University.I have completed my masters from Dr. BATU University, Lonere. Currently i am working at Mindbowser As trainee web
          Devloper.
        </p>
      </h3>
    </div>
  );
}

function Workandhobbies() {
  return (
    <div className="work-hobbies">
      <h1>Work and Hobbies</h1>
      <h3>
        <p>
          I have 2 years working experieance in electrical feild as a Line Head in production department. For last one year i Started learing we devlopment, Currently i am working as a trainee web devloper in Mindbowser. My Hobbies
          are learing new technologies, playing indoor and outdoor games, playing vertual gemes and travling.
        </p>
      </h3>
    </div>
  );
}

export default Navbar;
export { Mainimage };
export { Background };
export { Introtext };
export { Personalinfo };
export { Workandhobbies };