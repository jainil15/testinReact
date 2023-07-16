import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import axios from 'axios';

const Home = () => {
  
  const [posts, setPosts] = useState([])

  const cat = useLocation().search



  useEffect(()=> {
    const fetchData =async () => {
      try {
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data);

      } catch (error) {
        
      }
    }
    fetchData()
  }, [cat])

  // let posts = [
  //   {
  //     id: 1,
  //     title: "Lorem Ipsum",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     img: "https://picsum.photos/800/800"
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem Ipsum",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     img: "https://picsum.photos/800/800"
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem Ipsum",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     img: "https://picsum.photos/800/800"
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem Ipsum",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     img: "https://picsum.photos/800/800"
  //   },

  // ]

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }
  
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post=> (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={`upload/${post.img}`} alt={post.img} />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} >
                <h1>{post.title}</h1>
              </Link>
              {getText(post.desc)}
              <Link to={`/post/${post.id}`} className='btn_link'>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home