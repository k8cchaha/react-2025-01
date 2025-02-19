import Post from './Post'
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css'


function PostList({isPosting, onStopPosting}) {
    
    

    return (
        <>
            {isPosting ? (
                <Modal onHideModal={onStopPosting}>
                    <NewPost onCancel={onStopPosting}/>
                </Modal>
            ) : null}
            
            <ul className={classes.list}>
                <Post author="Bill" body="bibibibibibi"/>
            </ul>
        </>
        
    )
}

export default PostList;