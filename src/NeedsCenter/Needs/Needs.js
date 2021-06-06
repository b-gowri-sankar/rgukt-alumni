import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from './Needs.module.css';

const Needs = (props) => {
  let settings = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
        }
      ]
    };
  return (
      <Carousel {...settings}>
          <Wrap>
              <div className={classes.Card}>
            <div className={classes.Description}>
                Hello All, I am a graduate student at Brown University and looking for internships in the US for 2021 summer in Machine learning/Data science. Any help/leads/referrals would be very very helpful.    
            </div>
            <div className={classes.Author}>
                <p className={classes.Author__title}> Peeyush Kumar Agarwal</p>
                <button className={classes.Reply__button} >Replay</button>      
                  </div>
                  </div>
        </Wrap>

        <Wrap>
        <div className={classes.Card}>
            <div className={classes.Description}>
                Hello All, I am a graduate student at Brown University and looking for internships in the US for 2021 summer in Machine learning/Data science. Any help/leads/referrals would be very very helpful.    
            </div>
            <div className={classes.Author}>
                <p className={classes.Author__title}> Peeyush Kumar Agarwal</p>
                <button className={classes.Reply__button} >Replay</button>      
                  </div>
                  </div>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
      visibility: hidden;
  }
  /* & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  } */
`;

const Wrap = styled.div`
  /* border-radius: 4px;
  cursor: pointer;
  position: relative;
  display: flex;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  } */
`;

export default Needs;