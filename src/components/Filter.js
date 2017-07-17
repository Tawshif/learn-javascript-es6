import React, {Component} from 'react';

class Filter extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: ''
        };

        this.filterList = this.filterList.bind(this);

    }
    filterList(e){
        this.setState({value: e.target.value},()=>{console.log(this.state.value)});
        e.preventDefault();
    }

    render(){
        return (
            <form action="" className="form-group">
                <div className="row">
                    <div className="col-md-4">
                        <select value={this.state.value} onChange={this.filterList} className="form-control" >
                            <option value="all">All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                </div>
            </form>
        )
    }

}

export default Filter;