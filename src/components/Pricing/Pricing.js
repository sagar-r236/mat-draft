const Pricing = () => {
  return (
    <div className="flex justify-center mt-4 mb-4 ">
      <div className="max-w-screen-xl w-full ">
        <h1 className="p-4 font-black text-3xl text-center">Pricing</h1>
        <hr />
        {/* <hr className="pr-2 pl-2"></hr> */}
        <div className="flex p-4 flex-wrap">
          <div className="card w-96 bg-base-100 shadow-xl m-2">
            <h1 className="font-extrabold text-center text-2xl p-4">Montly Subscription</h1>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Price: 3000 Rs</h2>
              <h2 className="card-title">Number of days:  30 Days</h2>
              <div className="card-actions p-4">
                <button className="btn btn-primary bg-orange-400 hover:bg-white hover:border-dotted hover:border-2 hover:border-black">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-2">
            <h1 className="font-extrabold text-center text-2xl p-4">Silver Subscription</h1>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Price: 8000 Rs</h2>
              <h2 className="card-title">Number of days:  90 Days</h2>
              <div className="card-actions p-4">
                <button className="btn btn-primary bg-orange-400 hover:bg-white hover:border-dotted hover:border-2 hover:border-black">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-2">
            <h1 className="font-extrabold text-center text-2xl p-4">Gold Subscription</h1>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Price: 14000 Rs</h2>
              <h2 className="card-title">Number of days:  180 Days</h2>
              <div className="card-actions p-4">
                <button className="btn btn-primary bg-orange-400 hover:bg-white hover:border-dotted hover:border-2 hover:border-black">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-2">
            <h1 className="font-extrabold text-center text-2xl p-4">Diamond Subscription</h1>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Price: 20000 Rs</h2>
              <h2 className="card-title">Number of days:  360 Days</h2>
              <div className="card-actions p-4">
                <button className="btn btn-primary bg-orange-400 hover:bg-white hover:border-dotted hover:border-2 hover:border-black">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
