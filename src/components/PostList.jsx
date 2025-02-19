import { useState } from 'react'

import Post from './Post'
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css'


function PostList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([])
    
    function addPostHandler(postData) {
        // 變數的值可能是基於先前渲染時的狀態，如果有多個狀態更新排隊，這個值可能不是最新的
        // setPosts([postData, ...posts])

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
            {posts.length > 0 && (
                <ul className={classes.list}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'blue' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
        
    )
}

export default PostList;