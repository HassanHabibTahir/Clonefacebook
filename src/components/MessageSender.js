import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import './css/messaagesender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../Stateprovider';
import firebase from 'firebase'
import db from '../firebase';
function MessageSender() {
  const [{ user }, dispatch] = useStateValue()
  const [input, setInput] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    // alert("gree")
    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imgUrl
    })
    //db
    setInput("")
    setImgUrl("")
  }


  return (
    <div className="messageSender">

      <div className="messageSender__top">
        <form
        //onSubmit={handleSubmit}
        >
          <Avatar src={user.photoURL} />
          <input
            className="messagesender__input"
            placeholder={`what's on your mind, ${user.displayName}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input placeholder="image URL is (Optional)"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />

          <button

            onClick={handleSubmit}
            type="submit">
            Hidden Submit
        </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_Options">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>


        <div className="messageSender_Options">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/video</h3>
        </div>


        <div className="messageSender_Options">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/video</h3>
        </div>


        <div className="messageSender_Options">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity </h3></div>
      </div>
    </div>
  )
}

export default MessageSender
