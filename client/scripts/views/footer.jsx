var React = require('react');

var Footer = React.createClass({
  render: function(){
    return (
      <footer style={{textAlign: "center"}}>
        <hr/>
        <span>This is a footer!!</span>
      </footer>
    );
  }
});

module.exports = Footer;