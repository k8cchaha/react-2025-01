import Post from './Post'
import NewPost from './NewPost';
import classes from './PostList.module.css'
import { useState } from 'react';

function PostList() {
    const [enteredBody, setEnteredBody] = useState('')  
    const [enteredAuthor, setAuthor] = useState('')

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event) {
        setAuthor(event.target.value)
    }

    return (
        <>
            <NewPost onChangeBody={bodyChangeHandler} onChangeAuthor={authorChangeHandler} />
            <ul className={classes.list}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="Bill" body="bibibibibibi"/>
            </ul>
        </>
        
    )
}

export default PostList;