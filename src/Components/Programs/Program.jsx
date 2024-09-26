import React from 'react'
import './Program.css'
import proimg1  from '../../assets/program-1.png'
import proimg2  from '../../assets/program-2.png'
import proimg3  from '../../assets/program-3.png'
import proimg_icon1  from '../../assets/program-icon-1.png'
import proimg_icon2  from '../../assets/program-icon-2.png'
import proimg_icon3  from '../../assets/program-icon-3.png'

const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={proimg1} alt="" />
            <div className="caption">
                <img src={proimg_icon1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={proimg2} alt="" />
            <div className="caption">
                <img src={proimg_icon2} alt="" />
                <p>Master  Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={proimg3} alt="" />
            <div className="caption">
                <img src={proimg_icon3} alt="" />
                <p>MBA Degree</p>
            </div>
        </div>
        
    </div>
  )
}

export default Program