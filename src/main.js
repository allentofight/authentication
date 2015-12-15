var React = require('react-native');
var {
	View,
	Text,
	StyleSheet
} = React;

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');

module.exports = React.createClass({
	componentWillMount:function(){
		Parse.initialize("WdsI7LSGD3qVI7ScNCGOoa6OvNi3c6BG2TU7RKQ4", "lTq7d33oW1FbChaoHNXVIDdOqdiabXykCdciNso9");
	},
	render: function(){
		return (
		<View style={styles.container}>
		<Signin />
		</View>	
		)
	}
});

var styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent:'center',
		alignItems:'center'
	}
});

