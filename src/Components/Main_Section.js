import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const Main_Section = () => {

   // Get all products
   
   const [products, setProducts] = useState([]);

   useEffect(() => {
      fetch('https://fakestoreapi.com/products')
         .then(res => res.json())
         .then(data => setProducts(data))
         .catch(err => console.log(err));
   }, [])


  return (
    <div>
      <div className="fashion_section">
         <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="fashion_taital">Man & Woman Fashion</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man T -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img src="images/tshirt-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img src="images/dress-shirt-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Woman Scart</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img src="images/women-clothes-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Man & Woman Fashion</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man T -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img src="images/tshirt-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img src="images/dress-shirt-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Woman Scart</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img src="images/women-clothes-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Man & Woman Fashion</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man T -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img src="images/tshirt-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Man -shirt</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img src="images/dress-shirt-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Woman Scart</h4>
                                 <p className="price_text">Price  <span style={{color: "#262626"}}>$ 30</span></p>
                                 <div className="tshirt_img"><img src="images/women-clothes-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <FaAngleLeft />
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <FaAngleRight />
            </a>
         </div>
      </div>
      <div className="fashion_section">
         <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="fashion_taital">Electronic</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Laptop</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img src="images/laptop-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Mobile</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img src="images/Mobiles.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Computers</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img src="images/PC.png"  alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Electronic</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Laptop</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img src="images/laptop-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Mobile</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img src="images/Mobiles.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Computers</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img src="images/computer-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Electronic</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Laptop</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img src="images/laptop-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Mobile</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img src="images/Mobiles.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Computers</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="electronic_img"><img src="images/computer-img.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev">
            <FaAngleLeft />
            </a>
            <a className="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
            <FaAngleRight />
            </a>
         </div>
      </div>
      <div className="HomeAppliance_section">
         <div id="jewellery_main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <h1 className="fashion_taital">Home Appliances</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Refrigirator</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="HomeAppliance_img"><img src="images/Home1.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Microwave Oven</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="HomeAppliance_img"><img src="images/Home2.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Grinders</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="HomeAppliance_img"><img src="images/Home3.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Home Appliances</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Refrigirator</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="HomeAppliance_img"><img src="images/Home1.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Microwave Oven</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="HomeAppliance_img"><img src="images/Home2.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Grinders</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="HomeAppliance_img"><img src="images/Home3.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <h1 className="fashion_taital">Home Appliances</h1>
                     <div className="fashion_section_2">
                        <div className="row">
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Refrigirator</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="HomeAppliance_img"><img src="images/Home1.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Microwave Oven</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="HomeAppliance_img"><img src="images/Home2.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-4 col-sm-4">
                              <div className="box_main">
                                 <h4 className="shirt_text">Grinders</h4>
                                 <p className="price_text">Start Price  <span style={{color: "#262626"}}>$ 100</span></p>
                                 <div className="HomeAppliance_img"><img src="images/Home3.png" alt='img'/></div>
                                 <div className="btn_main">
                                    <div className="buy_bt"><a href="/">Buy Now</a></div>
                                    <div className="seemore_bt"><a href="/">See More</a></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#jewellery_main_slider" role="button" data-slide="prev">
            <FaAngleLeft />
            </a>
            <a className="carousel-control-next" href="#jewellery_main_slider" role="button" data-slide="next">
            <FaAngleRight />
            </a>
         </div>
      </div>
    </div>
  )
}

export default Main_Section;
