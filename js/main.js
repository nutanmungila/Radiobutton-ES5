var React = require('react');
var Radiocomp = require('./Radiocomp');

var App = React.createClass({

 		  
 		  render:function() {
			return(
				<div>
					<Radiocomp items={this.props.itemList} />
				</div>
			  );
 		  }


});

App.propTypes = { itemList: React.PropTypes.array.isRequired };
App.defaultProps = { itemList: ["aa","bb","cc","dd","ff","gg","hh","ii"] };

React.render( <App /> , document.getElementById("div-bx"));
