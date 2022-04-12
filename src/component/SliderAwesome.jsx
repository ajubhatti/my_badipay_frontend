import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {Buffer} from 'buffer';

const SliderAwesome = (props) => {

  const ShowImage = (data, index) => {
    let imgData = new Buffer.from(data.data).toString('base64');
    return <img src={`data:image/*;base64,${imgData}`} alt={index} />
  }

  return (
    <AwesomeSlider className='home-slider'>
      {
        props.imageData.map((imgDt, index) =>
          <div key = {index}>
            {ShowImage(imgDt.img, index)}
          </div>
        )
      }
    </AwesomeSlider>
  )
}

export default SliderAwesome