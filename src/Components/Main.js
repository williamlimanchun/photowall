import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import { Route, Link } from "react-router-dom";
import Single from "./Single";

class Main extends Component {
    constructor() {
        super()
        // this.state = {
        // }
        // this.removePhoto = this.removePhoto.bind(this);
        // this.navigate = this.navigate.bind(this);
    }

    // removePhoto(postRemoved) {
    //     console.log(postRemoved.description)
    //     this.setState((state) => ({
    //         posts: state.posts.filter(post => post !== postRemoved)
    //     }));
    // }

    // navigate() {
    //     this.setState({
    //         screen: 'addPhoto'
    //     })
    // }

    // addPhoto(postSubmitted) {
    //     this.setState(state => ({
    //         posts: state.posts.concat([postSubmitted])
    //     }))
    // }

    state = { loading: true }

    componentDidMount() {
        console.log('mounted');
        this.props.startLoadingPosts().then(() => {
            this.setState({
                loading: false
            })
        })
        this.props.startLoadingComments()
    }

    render() {
        // console.log(this.props.posts)
        return <div>
            <h1>
                <Link to="/"> Photowall</Link>
            </h1>
            <Route exact path="/" render={() => (
                <div>
                    <Photowall {...this.props} />
                </div>
            )} />

            <Route path="/AddPhoto" render={({ history }) => (
                <AddPhoto {...this.props} />
            )} />

            <Route path="/single/:id" render={(params) => (
                <Single loading={this.state.loading} {...this.props} {...params} />
            )} />
        </div>
    }
}

export default Main;