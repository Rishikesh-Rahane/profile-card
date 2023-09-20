import React, { Fragment } from 'react'
import { AiOutlineStar, AiOutlinePlus } from "react-icons/ai"
import { MdOutlineModeEdit } from "react-icons/md"
import "./Css/Profile_Card.css"
import profile_pic from "./Assets/[removal.ai]_ef92bbba-0d28-407b-85da-39b44b828ec7-profle_pic.png"

const Profile_Card = () => {
  return (
    <Fragment >
      {/* profile-card */}
      <div className='profile-card'>
        {/* profile-image-right-section */}
        <div className='profile-image-section'>
          <img src={profile_pic} className='profile_image'></img>
          <div className='rating'>
            <p className='star'>4.5 <AiOutlineStar /></p>
            <p className='word'>Ratings</p>
          </div>
        </div>

        {/* profile-details-left-section */}
        <div className='profile-details-section'>
          <div className='details-header'>
            <div className='profile-name'>
              <p className='name'>John Doe, </p>
              <p className='span'> <span className='five'> 5 </span> <span> Yrs Exp. </span> </p>
            </div>
            <div className='stars'>
              <div className='allstars'>
                <AiOutlineStar className='s1' />
                <AiOutlineStar className='s2' />
                <AiOutlineStar className='s3' />
                <AiOutlineStar className='s4' />
              </div>
              <p className='star-award'>Awards</p>
            </div>
            <div className='edit-section'>
              <MdOutlineModeEdit />
              <p>Profile</p>
            </div>
          </div>
          <div className='details-hero'>
            <p className='ptag1'>Details</p>
            <p className='ptag2'>I am Intrested in Science and Web Technology, <br /> Basic Lorem ipsum </p>
            <div className='subjects'>
              <p className='sci'>Science</p>
              <p className='ma'>Maths</p>
              <p className='hi'>Hindi</p>
              <div><AiOutlinePlus className='plus'></AiOutlinePlus></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Profile_Card