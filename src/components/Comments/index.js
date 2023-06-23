import {Component} from 'react'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {names: '', comments: '', commentsList: []}

  onDelete = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  renderCommentList = () => {
    const {commentsList} = this.state
    return commentsList.map(each => (
      <CommentItem
        key={each.id}
        commentDetails={each}
        toggleIsFavorite={this.toggleIsFavorite}
        deleteItem={this.onDelete}
      />
    ))
  }

  onComment = event => {
    this.setState({comments: event.target.value})
  }

  onChangeName = event => {
    this.setState({names: event.target.value})
  }

  onAddContact = event => {
    event.preventDefault()
    const {names, comments} = this.state
    // const initialBackgroundClassNames = `{intialclassname${initialContainerBackgroundClassNames}}`
    const newComment = {
      id: v4(),
      name: names,
      comment: comments,
      date: new Date(),
      isLike: false,

      // initialClassName: initialBackgroundClassNames,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      names: '',
      comments: '',
    }))
  }

  render() {
    const {names, comments, commentsList} = this.state
    console.log(commentsList)
    return (
      <div className="div">
        <div className="div3">
          <form onSubmit={this.onAddComment}>
            <div className="div2">
              <h1>Comments</h1>
              <p>say something about 4.0 technology</p>
              <input
                className="input"
                placeholder="Your name"
                value={names}
                onChange={this.onChangeName}
              />
              <br />
              <textarea
                type="textarea"
                className="text"
                placeholder="Your comment"
                value={comments}
                onChange={this.onComment}
              />
              <br />
              <button type="submit" className="button">
                Add Comment
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <div className="comment">
          <p>
            <span className="bluPad">{commentsList.length}</span>comments
          </p>
          <ul>{this.renderCommentList()}</ul>
        </div>
      </div>
    )
  }
}
export default Comments
