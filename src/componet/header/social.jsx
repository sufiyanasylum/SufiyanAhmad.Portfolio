import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
function Social () {
  return (
    <div className='header__socials'>
      <a href='https://github.com/sufiyanasylum' target="__blank"><FaGithub/></a>
      <a href='www.linkedin.com/in/sufyan-ahmad-148bb1218' target="__blank"><BsLinkedin /></a>
      <a href='https://www.instagram.com/sayyed_sufiyan_hashmi/' target="__blank"><GrInstagram /></a>

    </div>
  )
}

export default Social