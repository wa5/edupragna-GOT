import Slider from "react-slick"
import img1 from '../../../static/img/1.jpg'
import img2 from '../../../static/img/2.jpg'
import img3 from '../../../static/img/3.jpg'
import img4 from '../../../static/img/4.jpg'
import img5 from '../../../static/img/1.jpg'
export const  Cardsforsinglepage=()=>{


    const settings = {
        customPaging: function(i:any) {
          return (
            <a>
              <img height="100px" src={img1} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (<>
     <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img height="20px" src={img1} />
          </div>
          <div>
            <img height="20px"  src={img3} />
          </div>
          <div>
            <img height="20px"  src={img2} />
          </div>
          <div>
            <img height="20px"  src={img2} />
          </div>
        </Slider>
      </div>
    </>)
}