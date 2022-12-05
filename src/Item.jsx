import React from 'react'

export default function Item({url, title}) { // 객체 구조분할 할당

    // console.log(props);

  return (
    <div>
        <img src={url} alt='대체 텍스트' />
        <span>{title}</span>
    </div>
  )
}
