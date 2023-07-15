const HeroSection=()=>{
return(
<>
<div className="hero container">
    <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-btns">
            <button className="btn1">Shop Now</button>
            <button className="btn2">Category</button>
        </div>
            <p className="mini-text">Also Available On</p>
            <div className="shops">
                <img src="/images/amazon.png" alt="amazon" className="shoping" />
                <img src="/images/flipkart.png" alt="flipkart" className="shoping" />
            </div>
            
        
    
    </div>
    <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe" className="shoe" />
    </div>
</div>
</>
);
};
export default HeroSection;