import React from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { GiAbstract030 } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const openLinkInNewTab = (url: any) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  const [toggle, setToggle] = React.useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="app__navbar">
      <div
        style={{ cursor: "pointer" }}
        className="app__navbar-logo"
        onClick={scrollToTop}
      >
        <h2>Lwin Oo Naing</h2>
      </div>
      <ul className="app__navbar-links">
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="app__flex p-text">About</li>
        </Link>
        <Link to="project" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="app__flex p-text">Projects</li>
        </Link>
        <Link
          to="technology"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="app__flex p-text">Technologies</li>
        </Link>
        <Link to="skill" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="app__flex p-text">Skills</li>
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li className="app__flex p-text">Experience</li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <li className="app__flex p-text">Contact</li>
        </Link>
      </ul>

      <div className="app__navbar-profiles">
        <div
          onClick={() => openLinkInNewTab("https://github.com/Horace-Jacob")}
        >
          <AiFillGithub size={25} />
        </div>
        <div
          onClick={() =>
            openLinkInNewTab("https://www.facebook.com/lwinoo.naing.940")
          }
        >
          <AiFillFacebook size={25} />
        </div>
        <div
          onClick={() =>
            openLinkInNewTab(
              "https://www.linkedin.com/in/horace-jacob-b99a08233/"
            )
          }
        >
          <AiFillLinkedin size={25} />
        </div>
      </div>

      <div className="app__navbar-menu">
        <GiAbstract030
          onClick={() => setToggle(true)}
          style={{ color: "black" }}
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <GrFormClose onClick={() => setToggle(false)} />
            <ul>
              {/* {LinkData.map((link, index) => (
                <li key={link}>
                  <a href={`#${link}`} onClick={() => setToggle(false)}>
                    {link}
                  </a>
                </li>
              ))} */}
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="app__flex p-text">About</li>
              </Link>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="app__flex p-text">Projects</li>
              </Link>
              <Link
                to="technology"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="app__flex p-text">Technologies</li>
              </Link>
              <Link
                to="skill"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="app__flex p-text">Skills</li>
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="app__flex p-text">Experience</li>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="app__flex p-text">Contact</li>
              </Link>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
