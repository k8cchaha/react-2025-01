function NewPost() {
    return (
        <div>
            <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} />
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required />
            </p>
        </div>
    )
}

export default NewPost