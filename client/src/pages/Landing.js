import React from "react";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga
            sunt saepe obcaecati tenetur, perspiciatis maiores tempore
            cupiditate voluptas mollitia unde non ipsa ut ad autem minima
            corrupti nostrum quod.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
          {/* <button className="btn btn-hero">Login/Register</button> */}
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
