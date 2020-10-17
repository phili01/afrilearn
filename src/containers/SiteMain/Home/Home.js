import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../store/actions/index';

class Home extends Component {
    state = {
        
    }
    componentDidMount() {
    }

    componentDidUpdate() {
        // if (this.props.match.params.id && this.props.match.params.id !== this.state.filterTag) {
        //     this.props.onFetchPostReset();
        //     let cnt = this.props.match.params.id;
        //     this.props.onFetchPost(null, cnt, this.state.fetchLimit, 0, 0);
        //     this.setState({
        //         filterTag: cnt
        //     });
        // }

        // if (!this.props.match.params.id && this.state.filterTag !== 'post') {
        //     this.props.onFetchPostReset();
        //     this.props.onFetchPost(null, 'post', this.state.fetchLimit, 0, 0);
        //     this.setState({
        //         filterTag: 'post'
        //     });
        // }
    }

    render() {
        return (
            <div className="container">
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.pt.posts,
        skipPost: state.pt.skipPost,
        ptTotal: state.pt.ptTotal,
        postErr: state.pt.postErr,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));