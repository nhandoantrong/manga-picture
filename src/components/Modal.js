import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeIndex } from '../redux/actions/changeIndex'
import { updateImage } from '../redux/actions/updateImage'

class Modal extends Component {

    state = {
        name: "No Name",
        description: "No Description",
        isEdit: false
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        const { updateImages } = nextProps;
        const index = updateImages.findIndex(item => item.index === nextProps.currentImage.index)
        if (index === -1) {
            this.setState({
                name: "No Name",
                description: "No Description",
                isEdit: false
            })
        }
        else{
            this.setState({
                name: updateImages[index].name,
                description: updateImages[index].description,
                isEdit: false

            })
        }
    }

    changeToEdit = () => {
        this.setState({
            isEdit: true,
        })
    }

    onSubmit = () => {
        if (!localStorage.getItem('updateList')) {
            const { index } = this.props.currentImage;
            const { name, description } = this.state;
            const photo = {
                index, name, description
            }
            this.props.updateImage(photo)
            this.setState({
                isEdit: false,
            })
        }
        else {
            const { index } = this.props.currentImage;
            const { name, description } = this.state;
            const photo = {
                index, name, description
            }
            this.props.updateImage(photo)

            this.setState({
                isEdit: false,
            })
        }
    }


    render() {
        const { width, height, id, index } = this.props.currentImage;

        const url = width ? `https://picsum.photos/${width}/${height}?image=${id}` : "";
        return (
            <div className="modal fade image-modal" id="image-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            {!this.state.isEdit ? <h4 className="modal-title">{this.state.name}</h4>
                                : <input type="text" className="form-control w-50" name="name" value={this.state.name} onChange={this.onChange} />}

                            <button type="button" className="close" data-dismiss="modal">
                                ×
                        </button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <img src={url} alt="img" className="image" />
                            {!this.state.isEdit ? <div className="description">
                                {this.state.description}
                            </div>
                                : <textarea class="form-control" id="description" name="description" onChange={this.onChange} rows={5}
                                    value={this.state.description}></textarea>}

                            {index !== 0 ? <div className="arrow arrow-left" onClick={() => this.props.changeIndex(index - 1)}><i className="fa fa-arrow-circle-left"></i></div> : ""}
                            <div className="arrow arrow-right" onClick={() => this.props.changeIndex(index + 1)}><i className="fa fa-arrow-circle-right"></i></div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            {!this.state.isEdit ? <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect edit-btn"
                                onClick={this.changeToEdit}
                            >
                                Edit
                            </button>
                                : <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect success-btn"

                                    onClick={this.onSubmit}
                                >
                                    Update
                            </button>}

                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect close-btn">
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    currentImage: state.currentImage,
    updateImages: state.updateImage
})

const mapDispatchToProps = (dispatch) => ({
    changeIndex: (index) => {
        dispatch(changeIndex(index))
    },
    updateImage: (image) => {
        dispatch(updateImage(image))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);