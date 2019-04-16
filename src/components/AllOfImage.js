import React, { Component } from 'react';
import Collumn from './Collumn';

class AllOfImage extends Component {
    render() {
        const {data} = this.props;
        
        return (
            <div>
                <section className="main">
                    <h1>ALL OF IMAGE</h1>
                    <div className="container">
                        <div className="row">
                            <Collumn data={data} modulo={0}/>
                            <Collumn  data={data} modulo={1}/>
                            <Collumn  data={data} modulo={2}/>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AllOfImage;