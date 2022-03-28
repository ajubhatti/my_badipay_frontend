import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const SliderAwesome = (props) => {

  const ShowImage = (data, index) => {
    let imgData = new Buffer.from(data.data).toString('base64');
    return <img src={`data:image/*;base64,${imgData}`} alt={index} />
  }

  return (
    <AwesomeSlider className='home-slider'>
      {
        props.imageData.map((imgDt, index) =>
          <div>
            {ShowImage(imgDt.img, index)}
          </div>
        )
      }
      {/* <div>
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
      </div> */}
    </AwesomeSlider>
  )
}

export default SliderAwesome