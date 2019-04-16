import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changeIndex} from "../redux/actions/changeIndex"

class ItemImage extends Component {



    render() {
        const {width, height, id,index} = this.props;
        return (
            <div className="image-content" data-toggle="modal" data-target="#image-modal" type="button"
            onClick={()=>this.props.changeIndex(index)}
            >
                <img src={`https://picsum.photos/${width}/${height}?image=${id}`} alt="pict" />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>({
    changeIndex: (index) =>{
        dispatch(changeIndex(index));
    }
})

export default connect(null,mapDispatchToProps)(ItemImage);