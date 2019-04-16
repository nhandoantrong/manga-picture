import React, { Component } from 'react';
import {connect} from 'react-redux';
import data from '../data/list.json'
import ItemImage from './ItemImage.js';
class updateImages extends Component {
    render() {
        const renderImage = this.props.updateData.map((item,index)=>{
            const {width, height, id} = data[item.index];
            return <div className='col-md-4' key={index}>
                <ItemImage width={width} height={height} id={id} index={item.index} />
            </div>
        })
        return (
            <div className= "main">
                {this.props.updateData.length!==0?
                <div>
                <h1>Your Image</h1>
                <div className="container">
                    <div className="row">
                        {renderImage}
                    </div>
                </div> </div>: ""
                }
                
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    updateData : state.updateImage
})
export default connect(mapStateToProps)(updateImages);