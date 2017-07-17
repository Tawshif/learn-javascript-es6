import React, { Component } from 'react';

class StorePicker extends Component {

    render() {
        return (
            <form action="" className="store-selector">
                <h3>Please Enter A Store</h3>
                <input type="text" name="Store" ref="storeId" required />
                <input type="submit"/>
            </form>
        );
    }
}

export default StorePicker;
