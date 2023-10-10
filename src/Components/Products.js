import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ss from '../assets/ss.jpeg'
import wood from '../assets/wood.jpeg'
import { FaTruckFast } from 'react-icons/fa6';
import { TbPackageImport } from 'react-icons/tb';
import { MdSupportAgent} from 'react-icons/md';
import { ImCreditCard} from 'react-icons/im';
import { useDispatch,  useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';

    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        alert('Error occurred while fetching products');
      });
  }, []);



  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
      
        <div className="bg-cream">
         
         <div className='flex'>
              <div className="relative">
                 <div className="top-0 left-0 w-[700px] h-[550px] bg-green rounded-br-[35%]">
                    <p className="absolute top-0 left-0 right-0 bottom-0 text-white text-[50px] font-semibold ml-12 mt-[100px] bg-transparent font-fashion">
                       Make Your Fashion Look more Attractive
                    </p>
                    <p className='absolute top-0 left-0 right-[50px] bottom-0 text-white text-[20px]  ml-12 mt-[280px] '>
                    Discover the Essence of Autumn in Every Stitch: Unveiling Our Captivating 2023 Collection, Where Nature's Hues and Fashion Merge Seamlessly for Your Perfect Fall Wardrobe.            
                    </p>
                        <div className="relative">
                            <button className="bg-black bg-opacity-75 hover:bg-opacity-100 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:cursor-pointer transition duration-300 ease-in-out mt-[420px] ml-12">
                            Shop Now
                            </button>
                        </div>
                 </div>
              </div>

              <div className="w-[380px] h-[450px] absolute left-[870px] mt-[85px] rounded-t-[50%] border-2 border-black bg-transparent z-10"></div>
              <div className="w-[380px] h-[450px] bg-image absolute left-[900px] mt-[100px] rounded-t-[50%]" style={{ backgroundImage: `url(${ss})`,backgroundSize: 'cover' }}></div> {/* Square 2 */}
          </div>
           
            {/* <div className="bg-transparent py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-10"> 
                 <div className="text-white text-2xl font-semibold ml-7 font-custom">Company Name</div>
                          
                     <div className="text-center ml-2">
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text relative" style={{ backgroundImage: `url(${wood})`, backgroundSize: 'cover' }}>
                            Zen<span >Jeez</span>
                        </h1>
                    </div>

                <div className="space-x-[65px]">
                    <a href="#" className="text-white text-lg hover:text-gray-300 transition font-semibold font-nav smm:text-black">Home</a>
                    <a href="#" className="text-black text-lg hover:text-gray-300 transition font-semibold font-nav">Cart</a>
                    <a href="#" className="text-black text-lg hover:text-gray-300 transition font-semibold font-nav">Categories</a>
                    
                </div>
             </div> */}

             
                 <div className="grid grid-cols-4 gap-4 absolute mt-[60px] w-full ">
                    
                    <div className="p-4 text-black flex items-center justify-center border-r border-black h-[60px]">
                    <FaTruckFast className='text-[40px]  mr-3 '/>
                    <div className='font-footer'> Free Shipping <br />For ₹999 Order</div>
                    </div>  


                    <div className="p-4 text-black flex items-center justify-center border-r border-black h-[60px]">
                    <TbPackageImport  className='text-[40px]  mr-3 '/>
                    <div className='font-footer'> 10 Days Easy <br />Returns</div>
                    </div>

                    <div className="p-4 text-black flex items-center justify-center border-r border-black h-[60px]">
                   <MdSupportAgent className='text-[40px]  mr-3'/>
                   <div className='font-footer'> 24/7 Customer <br />Support</div>
                    </div>

                    <div className="p-4 text-black flex items-center justify-center h-[60px]">
                    < ImCreditCard  className='text-[40px]  mr-3'/>
                    <div className='font-footer'> Member Discount</div>
                   </div>

                  </div>

             

                      <div className="grid grid-cols-4 gap-4 mt-[200px] ml-[30px] mr-[30px]">
                        {products.map((product) => (
                          <div className="product" key={product.id}>


<div className="max-w-[300px] h-[500px]">


	<div className="bg-white shadow-lg rounded-t-[50px] rounded-b-[20px] min-w-[150px] min-h-[300px] ">
		<a href="#" className='min-h-[280px]'>
			<img className="rounded-t-lg p-8 ml-[40px] max-h-[280px] min-h-[280px] max-w-[220px]" src={product.image}
      alt={product.title}/>
        </a>
			<div className="px-5 pb-5">
				<a href="#">
					<h3 className="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">{product.title}</h3>
				</a>
				<div className="flex items-center mt-2.5 mb-5">
					<svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
						</path>
					</svg>
					<span className=" bg-cream  text-yellow-600 text-xs font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
					<a href="#"
           onClick={() => handleAddToCart(product)}
						className="text-white bg-green hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[20px] text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
						to cart</a>
				</div>
			</div>
	</div>

</div>

{/* <div className="w-[300px]">
  <div className=" bg-gray-400 min-h-[400px] rounded-lg shadow-xl hover:shadow-2xl flex flex-col">
    <img
      src={product.image}
      alt={product.title}
      className="w-[300px] h-[300px] bg-opacity-0 border border-gray-300 rounded-lg"
    />
    <div className="mt-2">
      <h2 className="text-xl font-semibold">{product.title}</h2>
      <p className="text-gray-700">Price: ${product.price.toFixed(2)}</p>
      <p className="text-gray-700">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
    </div>
  </div>
</div> */}

                          </div>
                        ))}
                      </div>



        </div>
      );
}

export default Products;
