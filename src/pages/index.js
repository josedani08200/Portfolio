import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import JOSE_RANGEL_RESUME from '../assets/images/JOSE_RANGEL_RESUME.pdf';

import latenight from '../assets/images/latenight.png';
import pwspic from '../assets/images/pwspic.png';
import vida from '../assets/images/vida.png';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Wyncode graduate | Full Stack Web Dev Engineer |
            <br />
            Operations Director and Web Developer for Prophecy Web Solutions
          </h2>
          {/* <p>
            Skill in many language and with many time experience using
            <br />
            JavaScript | ReactJS | CSS & SCSS | Ruby On Rails
          </p> */}
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={latenight} alt="" />
        </div>
        <div className="content">
          <h3>
            <a href="https://latenightmunchies.herokuapp.com/" target="blank">Late Night Munchies | Wyncode Project</a>
          </h3>
          <p>
            PLATFORM THAT ALLOWS USERS TO SEARCH FOR A VARIETY OF RESTRAURANTS IN EVERY CITY</p>
          <p>
            Technology used: JavaScript, React, HTML/CSS, Express, Axios,
            Bootstrap and NPM libraries. Utilized Yelp API allowing the site to render open restaurants matches based on user query

          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pwspic} alt="" />
        </div>
        <div className="content">
          <h3>
            <a href="https://sustainablecleaning.net/" target="blank">Sustainable Cleaning | Prophecy Web Solutions Project</a>
          </h3>
          <p>
            HIGH END LUXURY RETAIL CLEANING SERVICES + ENVIROMENTALLY CONSCIOUS CLEANING PRODUCTS <br />
          </p>
          <p>
            Technology used: React, Javascript, SCSS and SASS compilers, HTML, Netlify Hosting and Management, and Trello for Project Management

          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={vida} alt="" />
        </div>
        <div className="content">
          <h3>
            <a href="https://vidahealing.net/" target="blank">Vida Healing |  Prophecy Web Solutions Project</a>
          </h3>
          <p>
            A MOBILE AND WEB BASED BUSINESS APPLICATION | INDIVIDUAL, GROUP, MARRIAGE, AND COUPLES THERAPY
          </p>
          <p>
            Technology used: React, Javascript, SCSS and SASS compilers, HTML, Netlify Hosting and Management, and Trello for Project Management
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Coding Languages and Frameworks</h2>
          <p>
            "Programming is like sex. One mistake and you have to support it for
            the rest of your life"
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-radiation">
            <h2>React</h2>
            <p>
              "JavaScript open-source library for building user interfaces. React can be used as a base in the development of single-page or mobile applications"</p>
          </li>
          <li className="icon solid fa-jedi">
            <h3>JavaScript</h3>
            <p>
              "JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Ruby</h3>
            <p>
              "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write."
            </p>
          </li>
          <li className="icon solid fa-dice-d20">
            <h3>Rails</h3>
            <p>
              "Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages."
            </p>
          </li>
          <li className="icon solid fa-satellite">
            <h3>SQL / postgeSQL</h3>
            <p>
              "Domain-specific database management languages used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system."
            </p>
          </li>
          <li className="icon solid fa-quidditch">
            <h3>Python</h3>
            <p>
              "Python is an interpreted, high-level, general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace."
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Download My Resume</h2>
        </header>
        <ul className="actions stacked">
          <li>
            <a href={JOSE_RANGEL_RESUME} className="button fit primary" title="DOWNLOAD JOSES' RESUME" download="Resume_Jose">
              Click Here!
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
