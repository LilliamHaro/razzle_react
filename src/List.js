import React from 'react';
import logo from './react.svg';
import './Home.css';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";




class List extends React.Component {
  render(props) {
    return (
      <div className="Home">
        <Helmet>
        <title>{ "Lista de productos" || ''}</title>
        <meta
      name="description"
      content={"lista de productos" || defaultDescription}
    />
    <meta
      property="og:description"
      content={"lista de productos description" || defaultDescription}
    />
    <meta property="og:image" content={"https://circuit.com.pe/test-nextjs/static/test-seo.jpg" || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
        </Helmet>

        
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Lista de productos</h2>


          <Link to="/">Home</Link>
          <br/>
          <Link to="/form">Formulario</Link>

        </div>


        <ul>
          {this.props.data.map( (product,i) => (
            <li key={i}>
              <Link to={'productos/'+product.ProductSlug}>{product.ProductName}</Link>
            </li>
          ) )}
        </ul>
       
      </div>
    );
  }
}

export default List;
