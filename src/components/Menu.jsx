import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Menu = ({cat}) => {

  const [posts, setPosts] = useState([])



  useEffect(()=> {
    const fetchData =async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`)
        setPosts(res.data);

      } catch (error) {
        
      }
    }
    fetchData()
  }, [cat])
  
    // let posts = [
    //     {
    //       id: 1,
    //       title: "Lorem Ipsum",
    //       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //       img: "https://picsum.photos/800/800"
    //     },
    //     {
    //       id: 2,
    //       title: "Lorem Ipsum",
    //       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //       img: "https://picsum.photos/800/800"
    //     },
    //     {
    //       id: 3,
    //       title: "Lorem Ipsum",
    //       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //       img: "https://picsum.photos/800/800"
    //     },
    //     {
    //       id: 4,
    //       title: "Lorem Ipsum",
    //       desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //       img: "https://picsum.photos/800/800"
    //     },
    
    //   ]

    const getText = (html) => {
      const doc = new DOMParser().parseFromString(html,"text/html")
      return doc.body.textContent
    }
    

    return (
        <div className='menu'>
            <h1>Other Post you might like</h1>
            {posts.map(post=> (
                <div className='post' key={post.id} >
                    <h2> {post.title}</h2>
                    <img src={`../upload/${post.img}`} alt={post.img} />
                    
                    <button>Read More</button>
                </div>
            ))}
        </div>
  )
}
