import React from 'react'
import './topicbox.css'

export default function TopicBox() {
  const topic = "My favourite food is kottu"
  const item = " and rice"

  const a = 5;
  const b = 10;
  const c = a*b;
  return (
    <div>
        <div className='TopicBox'>
            <span className='text'>{topic} {item} {c} {alert("hi hi hi")}</span>
        </div>
    </div>
  )
}
