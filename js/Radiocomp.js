
var React = require('react');
var RadioItems = require('./RadioItems')

export default var Radiocomp = React.createClass({

	getInitialState:function () {
		return {rval:""}
	}

	onItemSelectHandler:function(val) {
		this.setState({rval:val});
	},


	render:function () {

				return(<div>You Have Selected {this.state.rval}
				      		 {this.props.items.map((item)=>{
								return(<RadioItems key={item} itm={item} onSelectedItem={this.onItemSelectHandler}/>);
							 })}
			   		  </div>);
	}

})