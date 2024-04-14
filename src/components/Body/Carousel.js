const Carousel = () => {
  return (
    // <div className="flex justify-center bg-black" style={{height: '20vh'}}>
    //     {/* <div className="max-w-screen-xl w-full" >
    //         <img src="https://www.nelakkibolchaa.com/images/banner-4.jpg" />
    //     </div> */}
    // </div>
   
      <div className="carousel w-full no-scrollbar ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://www.nelakkibolchaa.com/images/banner-1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-black text-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-black text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.nelakkibolchaa.com/images/banner-2.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-black text-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-black text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.nelakkibolchaa.com/images/banner-3.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-black text-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-black text-white">
              ❯
            </a>
          </div>
        </div>
      </div>
      
   
  );
};

export default Carousel;
