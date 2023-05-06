import React, { useState, useEffect } from 'react';
import pic from '../../pic-removebg-preview.png'
import pic1 from '../../pic2.avif'
import pic3 from '../../pic3.avif'
import pic4 from '../../pic4.avif'
import { projectsData } from '../../hooks/data';
const Task = () => {
    const [item, setItem] = useState({ name: 'all', image: pic, button1: 'entertainment', button2: 'entertainment', button3: 'entertainment', button4: 'entertainment', button5: 'entertainment' });
    const [image, setImage] = useState({ image1: pic, image2: pic1 })


    useEffect(() => {
        // get projects based on item
        if (item.name === 'all') {
            //setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.name.toLowerCase() === item.name;
            });
            //  setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (button1, button2, button3, button4, button5) => {
        setItem({ button1: button1, button2: button2, button3: button3, button4: button4, button5: button5 });


        console.log(item)

    };

    const handleClick2 = (image1, image2) => {
        setImage({ image1: image1, image2: image2 });


        console.log(item)

    };


    return (
        <div className='bg-[#f2edda] ' >
            <div className='mx-auto py-10'>
                <input type="text " className='bg-white px-3 py-1' />
                {/* <button className='btn border-0 '><i class="fa fa-search"></i></button> */}
                <i class="bg-white fa fa-search mx-2 p-2"></i>


            </div>

            <div className='flex justify-center'>
                <button onClick={() => {
                    handleClick('artist', 'fasion', 'something', 'nothing', 'entertain');
                }}

                    className='btn border-0 text-black bg-[#41c28a] mr-8'>entertainment</button>
                <button onClick={() => {
                    handleClick('Fashion', 'Fashion1', 'Fashion2', 'Fashion3', 'Fashion4');
                }} d

                    className='btn border-0 text-black bg-[#41c28a] mr-8'>Fashion</button>
                <button className='btn border-0 text-black bg-[#41c28a] mr-8'>entertainment3</button>
                <button className='btn border-0 text-black bg-[#41c28a] mr-8'>entertainment4</button>
                <button className='btn border-0 text-black bg-[#41c28a] mr-8'>entertainment5</button>
            </div>

            <div className='grid lg:grid-cols-2  sm:grid-cols:1 gap-x-2 gap-y-2 my-10 mx-10'>
                <div className='grid lg:grid-cols-2  sm:grid-cols:1   '>
                    <div className='pl-10 ml-32'>
                        <img className='ml-20 h-72' src={image.image1}></img>

                        <h1 className='text-3xl text-right ml-20 pl-10 '> {item.name}</h1>
                    </div>






                    <div className=' pl-20 ml-20 '>

                        <button

                            onClick={() => {
                                handleClick2(pic, pic3);
                            }}
                            className='btn mb-2 bg-orange-500 text-black'>{item.button1}</button>
                        <br></br>
                        <button
                            onClick={() => {
                                handleClick2(pic1, pic4);
                            }}
                            className='btn bg-[#f2edda] mb-1 bg-white text-black '>{item.button2}</button>
                        <br></br>
                        <button className='btn bg-[#f2edda] mb-1 bg-white text-black '>{item.button3}</button>
                        <br></br>
                        <button className='btn bg-[#f2edda] mb-1 bg-white text-black '>{item.button4}</button>
                        <br></br>
                        <button className='btn bg-[#f2edda] mb-1 bg-white text-black '>entertainment</button>
                        <br></br>
                        <button className='btn bg-[#f2edda] mb-1 bg-white text-black '>entertainment</button>
                        <br></br>
                        <button className='btn bg-[#f2edda] mb-1 bg-white text-black '>entertainment</button>
                        <br></br>
                        <button className='btn bg-[#f2edda] mb-1 bg-white text-black '>entertainment</button>
                        <br></br>




                    </div>


                </div>

                <div className='flex'>
                    <div className='bg-black h-[400px] w-3 mr-4'>

                    </div>

                    <div>
                        <div class="relative   overflow-hidden">
                            {/* <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="Avatar" class=" w-full h-full" /> */}
                            <img src={image.image2} />
                            <div class="absolute w-full py-2.5 bottom-0 inset-x-0 text-orange-600 text-3xl text-center leading-4 mb-8">Portrait Artist</div>
                        </div>
                        {/* <img src='https://www.w3schools.com/w3css/img_lights.jpg'></img> */}
                        <h1 className='text-3xl text-center mt-2 text-black-400 '>Discover Niche Talents</h1>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Task;