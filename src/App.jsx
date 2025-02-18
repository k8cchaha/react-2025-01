import { useState } from 'react'
import MainHeader from './components/MainHeader'
import PostList from './components/PostList'

function App() {
  const [modalVisible, setModalVisible] = useState(true)

  function showModalHandler() {
    setModalVisible(true)
  }

  function hideModalHandler() {
    setModalVisible(false)
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
       <main>
        <PostList isPosting={modalVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  )
}

export default App
