import React, { Component } from 'react';
import Slider from "react-slick";
import star from '../../../../Assets/icons/star.png';
import soroar from '../../../../Assets/img/soroar.jpg'
import apu from '../../../../Assets/img/apu.png';
import alamin from '../../../../Assets/img/alamin.jpg';
import pervej from '../../../../Assets/img/parvez.jpg';
import injaman from '../../../../Assets/img/injaman.jpg';



export default class OthersSaying extends Component {
    constructor(props) {
      super(props);
      this.play = this.play.bind(this);
      this.pause = this.pause.bind(this);
    }
    play() {
      this.slider.slickPlay();
    }
    pause() {
      this.slider.slickPause();
    }
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
      return (
        <div className='p-20 '>
          <h2 className='text-4xl  text-info text-center mb-3'>What Our Client Says</h2>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div className='m-3 p-3'>
            <div class="card bg-white hover:bg-purple-200  shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img  src={soroar} alt="Shoes" />
                  </div>
                </div>
                </figure>
                 <img className='w-60 place-self-center' src={star} alt="Shoes" />
              <div class="card-body text-center">
                <p>"I received my certificate,and i would like to thank you for your support.I enjoyed your class tremendously."</p>
              </div>
            </div>
            </div>
            <div className='m-3 p-3'>
            <div class="card bg-white hover:bg-purple-200 shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={apu} alt="Shoes" />
                  </div>
                </div>
                </figure>
                 <img className='w-60 place-self-center' src={star} alt="Shoes" />
              <div class="card-body text-center">
               <p>"I received my certificate,and i would like to thank you for your support.I enjoyed your class tremendously."</p>
              </div>
            </div>
            </div>
            <div className='m-3 p-3'>
            <div class="card bg-white  hover:bg-purple-200  shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={alamin} alt="Shoes" />
                  </div>
                </div>
                </figure>
                 <img className='w-60 place-self-center' src={star} alt="Shoes" />
              <div class="card-body text-center">
               <p>"I received my certificate,and i would like to thank you for your support.I enjoyed your class tremendously."</p>
              </div>
            </div>
            </div>
            <div className='m-3 p-3'>
            <div class="card bg-white  hover:bg-purple-200  shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={pervej} alt="Shoes" />
                  </div>
                </div>
                </figure>
                 <img className='w-60 place-self-center' src={star} alt="Shoes" />
              <div class="card-body text-center">
               <p>"I received my certificate,and i would like to thank you for your support.I enjoyed your class tremendously."</p>
              </div>
            </div>
            </div>
            <div className='m-3 p-3'>
            <div class="card bg-white   hover:bg-purple-200  shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={injaman} alt="Shoes" />
                  </div>
                </div>
                </figure>
                 <img className='w-60 place-self-center' src={star} alt="Shoes" />
              <div class="card-body text-center">
               <p>"I received my certificate,and i would like to thank you for your support.I enjoyed your class tremendously."</p>
              </div>
            </div>
            </div>
            <div className='m-3 p-3'>
            <div class="card bg-white  hover:bg-purple-200  shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={soroar} alt="Shoes" />
                  </div>
                </div>
                </figure>
                 <img className='w-60 place-self-center' src={star} alt="Shoes" />
              <div class="card-body text-center">
               <p>"I received my certificate,and i would like to thank you for your support.I enjoyed your class tremendously."</p>
              </div>
            </div>
            </div>
          </Slider>

        </div>
      );
    }
  }