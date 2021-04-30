import React,{Component} from 'react'
import './Post.css'

export default class Post extends Component {
    render(){
        return(
            <div className="post">
                <p className="post_first">{this.props.post.firstname}</p>
                <p className="post_last">{this.props.post.lastname}</p>
            </div>
        )
    }
}