import Post from './Post'
import classes from './PostList.module.css'

function PostList() {
    return (
        <ul className={classes.list}>
            <Post author="Alex" body="ahhahah yoyoy"/>
            <Post author="Bill" body="bibibibibibi"/>
            <Post author="Cathy" body="ccccccc"/>
        </ul>
    )
}

export default PostList;