import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsFavorite, deleteItem} = props
  const {id, name, comment, date, isLike, initialClassName} = commentDetails
  console.log(name)
  const logo = name ? name[0].toUpperCase() : ''
  const classTextName = isLike ? 'activeButton' : 'NonActive'
  const imgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
  const postedTime = formatDistanceToNow(date)

  const onDelete = () => {
    deleteItem(id)
  }

  const onLike = () => {
    toggleIsFavorite(id)
  }

  return (
    <li>
      <p className={initialClassName}>logo</p>
      <h1>{name}</h1>
      <p>{postedTime} ago</p>

      <p>{comment}</p>
      <img src={imgUrl} alt="like" onClick={onLike} />
      <img
        src="img.png alt should be commentshttps://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
        alt="delete"
        onClick={onDelete}
      />
    </li>
  )
}
export default CommentItem
