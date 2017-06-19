var React = require('react');
var ReactDOM = require('react-dom');

/*
* Store picker
*/

var StorePicker = React.createClass({

    render: function(){
        return (

            <form>
        		<h2>Another label</h2>
        		<input type="text" className="form-control" />
            	<input type="submit" />
            </form>
        )
    }

})

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));