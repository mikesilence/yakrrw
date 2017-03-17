import react, { Component, PropTypes } from 'react';

const TYPES = {
  title: PropTypes.string
}

export default class Layout extends Component {
  render() {
    const { title, assetsPath } = this.props;

    return (
      <html>
        <head>
          <title>{title}</title>
          <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
          <h1>{title}</h1>
          <div className='fake_body'></div>
          <script src={assetsPath}></script>
        </body>
      </html>
    );
  }
}

Layout.propTypes = TYPES;