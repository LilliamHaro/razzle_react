import React from 'react';
import logo from './react.svg';
import './Home.css';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";



class Formulario extends React.Component {
  render() {
    return (
      <div className="Home">
        <Helmet>
        <title>{'Formulario' || ''}</title>
        <meta
      name="description"
      content={"Formulario description" || defaultDescription}
    />
    <meta
      property="og:description"
      content={"Formulario description" || defaultDescription}
    />
    <meta property="og:image" content={"https://circuit.com.pe/test-nextjs/static/test-seo.jpg" || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
        </Helmet>

        
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Formulario</h2>
          <Link to="/">Home</Link>

        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Formulario;
