import React, { useState, useEffect } from 'react'
import StoryReel from './StoryReel'
import './css/feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../firebase';


function Feed() {

  const [post, setPost] = useState([])
  useEffect(() => {

    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPost(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    ))
  }, [])

  console.log(post, "post====>")

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />


      {post && post.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />

      ))}



      {/* <Post
        // key={id}
        profilePic='https://scontent.flyp4-1.fna.fbcdn.net/v/t31.18172-8/23215745_1907346462916601_1229817814679968838_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFazGPE9tvhRHaody46cMSmPS-vQjjA2Yk9L69COMDZiR9e65XP6fFTBo8LKPOy3xzqoVlkwi1NF3Z2gNfeleGs&_nc_ohc=UwzDphih_cEAX9JfQUx&_nc_ht=scontent.flyp4-1.fna&oh=d74c8ca51495b44239f5754a81f4e047&oe=60AE8F0B'
        message='how is going '
        timestamp='545/e4'
        username='hassanhabi'
        image='https://scontent.flyp4-1.fna.fbcdn.net/v/t31.18172-8/23157457_1907347516249829_1627435222003885346_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeG4RuX7yXhHWu_YQ1E_xwQuizsjrxWAghOLOyOvFYCCEwWcgbLDbyMp5QdYcQ-taZhWzjwmpzyc2wI0Ow2GTdrm&_nc_ohc=j1gql8v6P48AX8ytUrG&_nc_ht=scontent.flyp4-1.fna&oh=35bbd135e389b2a9e5751f73fc543e82&oe=60AEA373'
      /> */}
    </div>
  )
}

export default Feed
