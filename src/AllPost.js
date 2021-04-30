import React, {Component} from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import {Link} from 'react-router-dom'
import './AllPost.css'

class AllPost extends Component {

    render(){
        return(
            <div className="container-Allpost">
                <h1> All Posts</h1>
                    {console.log(this.props.posts)}
                    {this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
                    <button className="Back-button"><Link to="/dashboard"><p className="Back-font>">Back</p></Link></button>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);