import Post from './Post'
import NewPost from './NewPost';
import classes from './PostList.module.css'

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={classes.list}>
                <Post author="Alex" body="ahhahah yoyoy"/>
                <Post author="Bill" body="bibibibibibi"/>
                <Post author="Cathy" body="ccccccc"/>
            </ul>
        </>
        
    )
}

export default PostList;