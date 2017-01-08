var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./views/header.jsx');
var Body = require('./views/body.jsx');
var Footer = require('./views/footer.jsx');

// create a new component and set it to Index
var Index = React.createClass({
  render:function(){
    return (
        <div>
        	<Header/>
        	<Body/>
        	<Footer/>
        </div>
    );
  }
});

// set "Index" to the element with id='content'
ReactDOM.render(
  <Index />,
  document.getElementById('content')
);