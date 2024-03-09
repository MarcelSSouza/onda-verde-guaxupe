import React from 'react';

import gridImg1 from './assets/grid-img-1.jpeg';
import gridImg2 from './assets/grid-img-2.jpeg';
import gridImg3 from './assets/grid-img-3.jpeg';
import gridImg4 from './assets/grid-img-4.jpeg';
import gridImg5 from './assets/grid-img-5.jpeg';
import gridImg6 from './assets/grid-img-6.jpeg';
import gridImg7 from './assets/grid-img-7.jpeg';
import gridImg8 from './assets/grid-img-8.jpeg';
import gridImg9 from './assets/grid-img-9.jpeg';
import gridImg10 from './assets/grid-img-10.jpeg';
import gridImg11 from './assets/grid-img-11.jpeg';
import gridImg12 from './assets/grid-img-12.jpeg';
import gridImg13 from './assets/grid-img-13.jpeg';

function MyGallery() {
  return (
    <>
      <div className="container">
        <br />
        <div className="d-flex flex-wrap gap-4 justify-content-center">
          <img src={gridImg1} className="col-3 grid-img" alt="" />
          <img src={gridImg2} className="col-3 grid-img" alt="" />
          <img src={gridImg3} className="col-3 grid-img" alt="" />
          <img src={gridImg4} className="col-3 grid-img" alt="" />
          <img src={gridImg5} className="col-3 grid-img" alt="" />
          <img src={gridImg6} className="col-3 grid-img" alt="" />
          <img src={gridImg7} className="col-3 grid-img" alt="" />
          <img src={gridImg8} className="col-3 grid-img" alt="" />
          <img src={gridImg9} className="col-3 grid-img" alt="" />
          <img src={gridImg10} className="col-3 grid-img" alt="" />
          <img src={gridImg11} className="col-3 grid-img" alt="" />
          <img src={gridImg12} className="col-3 grid-img" alt="" />
          <img src={gridImg13} className="col-3 grid-img" alt="" />
        </div>
      </div>
      <br />
    </>
  );
}

export default MyGallery;
