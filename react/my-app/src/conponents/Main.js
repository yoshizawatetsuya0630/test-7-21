import React from 'react'
import img1 from './ふるさと納税.png'
import img2 from './無題.png'

const Main = () => {
  return (
    <div>
        <img src={img1} />
        <h1>企業版ふるさと納税とは</h1>
        <p>企業が「応援したい自治体に寄付することで税金の９割控除」が受けられる制度です。
            寄付されたお金は「自治体の対象プロジェクト」に活用されます。
            ※本社所在地の自治体には寄付できません。
            ※個人版と異なり、返礼品を受け取ることはできません。
        </p>
        <img src={img2}/>
    </div>
  )
}

export default Main