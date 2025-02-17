function NewPost(props) {
    return (
        <div>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onChangeBody} />
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required onChange={props.onChangeAuthor} />
            </p>
            <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>
        </div>
    )
}

export default NewPost