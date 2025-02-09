const names = ['aaa', 'bbb']

function Post() {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1]

    return <div>
        <p>
            Test Line 1
        </p>
        <p>
            Test Line 2
        </p>
        <p>
            { chosenName }
        </p>
    </div>
}
export default Post;