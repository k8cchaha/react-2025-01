import { useState, useEffect } from 'react'

import Post from './Post'
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css'


function PostList({isPosting, onStopPosting}) {
    // 會造成無窮迴圈 => 必須使用 useEffect
    // fetch('http://localhost:8080/posts')
    // .then(res=>res.json())
    // .then(data=>setPosts(resData.posts))

    const [posts, setPosts] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    useEffect(()=> {
        async function fetchPosts() {
            console.log('call api')
            setIsFetching(true)
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json()
            setPosts(resData.posts)
            setIsFetching(false)
        }

        fetchPosts()
    }, [])
    
    function addPostHandler(postData) {
        // 變數的值可能是基於先前渲染時的狀態，如果有多個狀態更新排隊，這個值可能不是最新的
        // setPosts([postData, ...posts])

        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // 如果新資料依賴於舊資料, 應該要使用函數形式來更新狀態
        // React 會傳入最新的狀態 existingPosts，確保你的更新基於當下正確的狀態
        setPosts((existingPosts)=>[postData, ...existingPosts])
    }

    return (
        <>
            {isPosting ? (
                <Modal onHideModal={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
                </Modal>
            ) : null}
            {!isFetching && posts.length > 0 && (
                <ul className={classes.list}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'blue' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {isFetching && (
                <p>Loading posts...</p>
            )}
        </>
        
    )
}

export default PostList;