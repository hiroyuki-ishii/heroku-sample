var React = require('react');
var ReactDOM = require('react-dom');

var Body = React.createClass({
  render: function(){
    return (
      <UserBox/>
    );
  }
});

// UserBox = UserForm + UserList
var UserBox = React.createClass({
  getInitialState: function(){
    return {userData:[]};
  },
  handleAddUser: function(name, mail, gender){
    var data = this.state.userData;
    data.push({name: name, mail: mail, gender: gender});
    this.setState({userData: data});
  },
  render: function(){
    return(
      <div style={{width:"300px"}}>
        <UserForm addUser={this.handleAddUser}/>
        <hr/>
        <UserList userData={this.state.userData}/>
      </div>
    );
  }
});

// User is an entry in UserList
var User = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired,
    mail: React.PropTypes.string,
    gender: React.PropTypes.string
  },
  render:function(){
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.mail}</td>
        <td>{this.props.gender}</td>
      </tr>
    );
  }
});

// UserList = a list of User
var UserList = React.createClass({
  propTypes:{
    userData:React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },
  render: function(){
    var UserNodes = this.props.userData.map(function(user, index){
      return (
        <User name={user.name} mail={user.mail} gender={user.gender} key={index}/>
      );
    });
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Mail Address</th>
            <th>Gender</th>
          </tr>
          {UserNodes}
        </tbody>
      </table>
    );
  }
});

var UserForm = React.createClass({
  propTypes:{
    addUser:React.PropTypes.func.isRequired
  },
  getInitialState: function(){
  	return {
  		selectedGender: "other"
  	};
  },
  handleGenderChange: function(changeEvent) {
  	this.setState({
  		selectedGender: changeEvent.target.value
  	})
  },
  handleSubmit: function(){
    var name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    var mail = ReactDOM.findDOMNode(this.refs.mail).value.trim();
    if (!name){
	  console.log("Name is required.");
      return;
    }
    console.log('Adding a user:', name, mail, this.state.selectedOption);
    this.props.addUser(name, mail, this.state.selectedGender);
    ReactDOM.findDOMNode(this.refs.name).value = "";
    ReactDOM.findDOMNode(this.refs.mail).value = "";
	this.setState({
  		selectedGender: "other"
  	});
  },
  render:function(){
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Name</label>
              </td>
              <td>
                <input type="text" ref="name"/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Mail Address</label>
              </td>
              <td>
                <input type="text" ref="mail"/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Gender</label>
              </td>
              <td>
                <input type="radio" value="male" checked={this.state.selectedGender === "male"} onChange={this.handleGenderChange} />Male
                <input type="radio" value="female" checked={this.state.selectedGender === "female"} onChange={this.handleGenderChange} />Female
                <input type="radio" value="other" checked={this.state.selectedGender === "other"} onChange={this.handleGenderChange} />Other
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{textAlign:"right"}}>
          <button onClick={this.handleSubmit}>Add</button>
        </div>
      </div>
    );
  }
});

module.exports = Body;