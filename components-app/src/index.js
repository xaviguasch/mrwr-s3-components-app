import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard />

      <CommentDetail
        author='Samuel'
        date='today'
        text='What a man'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Alexandro'
        date='yesterday'
        text='whatever, dude...'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Janine'
        date='last week'
        text='we the best ones'
        avatar={faker.image.avatar()}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
