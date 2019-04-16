import React, { Component } from 'react';
import ItemImage from './ItemImage';

class Collumn extends Component {
    state = {
        itemNum: 3,
        height : window.innerHeight + window.scrollY
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if (
            (window.innerHeight + window.scrollY) > (this.state.height)
                    ) {
            
            this.setState({
                itemNum: this.state.itemNum+1,
                height: this.refs.iScroll.offsetHeight
            })
        }
    }
    renderItem = (numberOfItem, modulo, data) => {
        const items = [];
        for (let i = 0; i < numberOfItem; i++) {
            const index = i * 3 + parseInt(modulo);
            const { width, height, id } = data[index];
            items.push(<ItemImage width={width} height={height} id={id} key={i} index={index}/>)
        }
        return items;
    }
    render() {
        const { data, modulo } = this.props;
        return (
            <div className="col-md-4" ref="iScroll" >
                {this.renderItem(this.state.itemNum, modulo, data)}
            </div>
        );
    }
}

export default Collumn;