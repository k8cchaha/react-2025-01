import { useState } from 'react';

function NewPost({onCancel, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('')  
    const [enteredAuthor, setAuthor] = useState('')

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event) {
        setAuthor(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        onAddPost(postData)
        // console.log(postData)
        onCancel()
    }

    function doParseError() {
        const parseString = "{aa:12, bb:}";
        const result = JSON.parse(parseString);
        console.log(result)
    }

    return (
        <form onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required onChange={authorChangeHandler} />
            </p>
            <button onClick={() => {throw new Error("This is your first error!");}}>Break the world</button>
            <button onClick={doParseError}>Do Parse Error</button>
            <p>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
}

export default NewPost