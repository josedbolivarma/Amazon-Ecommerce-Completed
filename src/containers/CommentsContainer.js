import React, { useEffect, useState } from 'react'
import Comment from '../components/Comment'
import CommentSender from '../components/CommentSender';
import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { listCommentsAsync } from '../redux/actions/actionComments';

// Material UI
import { makeStyles } from '@material-ui/core'


const CommentsContainer = () => {
  const classes = useStyles();

  const [user, setUser] = useState(null);
  const [photoURL, setPhotoURL] = useState('');
  
  const { comments } = useSelector(store => store.comments);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listCommentsAsync());
      const auth = getAuth().currentUser;
      const avatar = user?.photoURL;
      setPhotoURL(avatar);
      setUser(auth);
  }, []);





  return (
    <div className={classes.root}>
        <div className={classes.root__container}>
        <CommentSender 
        user={user}
        />
        {
          comments.map((item, index) => (
            <Comment 
            key={index}
            username={item.username}
            profilePic={item.profilePic}
            message={item.message}
            timestamp={item.timestamp}
        />
          ))
        }
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '600px',
        margin: '4rem 0',
    },
    root__container: {
        width: '94%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
    }
}))

export default CommentsContainer