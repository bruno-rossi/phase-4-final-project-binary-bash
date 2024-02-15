import { NavLink, useOutletContext } from "react-router-dom";
// import '../styles/home.css'

function Home() {

    const { user, setUser } = useOutletContext()

    
    return (
        <>
         <div className="home-page">
            <div className="home-container">
              <h1>binaryBash</h1>
            
            <div className="paragraph">
                <p>
                <span>Why do programmers always look forward to parties? Because it's a chance to "interface" with new people!</span><br></br><br></br>
                <span>binaryBash is the new event planning platform for software developers. Whether you are hosting a bash or joining your friends, everyone is welcome here!</span>
                </p>
            </div>

            {!user ? <NavLink to="/login"><button className="get-started-btn">Get Started!</button></NavLink> : null }
            </div>
            
        </div>
        </>
       
      ); 
};

export default Home;