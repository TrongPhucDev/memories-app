import React, { useState, useRef } from 'react'
import { Typography, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import useStyle from './styles.js'
import { commentPost } from '../../actions/posts'
const CommentSection = ({ post }) => {
  const classes = useStyle()
  const dispatch = useDispatch()
  const [comments, setComments] = useState(post?.comments)
  const [comment, setComment] = useState('')
  const user = JSON.parse(localStorage.getItem('profile'))
  // console.log('Check post comment:', post?.comments)
  const commentRef = useRef()
  // const handleComment = async () => {
  //   const finalComment = `${user?.result?.name}: ${comment}`
  //   // console.log('Check comment:', finalComment)
  //   const newCmt = await dispatch(commentPost(finalComment, post._id))
  //   // console.log('Check sum comments:', newCmt)
  //   setComments(newCmt)
  //   setComments('')
  //   commentRef.current.scrollIntoView({ behavior: 'smooth ' })
  // }
  const handleComment = () => {}
  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments &&
            comments.map((c, i) => (
              <Typography key={i} gutterBottom variant="subtitle1">
                {c}
              </Typography>
            ))}
          {user?.result?.name && (
            <div style={{ width: '70%' }}>
              <Typography gutterBottom variant="h6">
                Write a comment
              </Typography>
              <TextField
                fullWidth
                rows={4}
                variant="outlined"
                label="Comment"
                multiline
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button
                style={{ marginTop: '10px' }}
                fullWidth
                disable={!comments}
                variant="contained"
                color="primary"
                onClick={handleComment}
              >
                Comment
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CommentSection
