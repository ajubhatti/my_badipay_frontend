import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const SliderAwesome = () => {
  return (
    <AwesomeSlider className='home-slider'>
      <div>
        <img src="assets/images/10107.jpg" />
      </div>
      <div>
        <img src="assets/images/rcpanel.com.jpeg" />
      </div>
      <div>
        <img src="assets/images/10107.jpg" />
      </div>
      <div>
        <img src="assets/images/rcpanel.com.jpeg" />
      </div>
    </AwesomeSlider>
  )
}

export default SliderAwesome