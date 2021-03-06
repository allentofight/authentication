var React = require('react-native');
var {
	StyleSheet,
	Navigator
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');

var Signup = require('./components/authentication/signup');
var Tweets = require('./components/tweets/tweets');
var ROUTES = {
	signin: Signin,
	signup:Signup,
	tweets: Tweets
}

module.exports = React.createClass({
	componentWillMount:function(){
		Parse.initialize("WdsI7LSGD3qVI7ScNCGOoa6OvNi3c6BG2TU7RKQ4", "lTq7d33oW1FbChaoHNXVIDdOqdiabXykCdciNso9");
	},
	renderScene: function(route,navigator){console.log('route = '+JSON.stringify(route));
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator}/>;
	},
	render: function(){
		return (
		<Navigator 
		style={styles.container}
		initialRoute={{name:'signin'}}
		renderScene={this.renderScene}
		configureScene={() =>{ return Navigator.SceneConfigs.FloatFromRight;}}
		/>
		)
	}
});

var styles = StyleSheet.create({
	container:{
		flex: 1
	}
});

