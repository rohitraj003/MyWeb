import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-xl md:text-justify">
                      <q>Welcome to Hungry Hope, a passionate initiative aimed at eradicating hunger from our planet. At the heart of our mission is a commitment to bridge the gap between generosity and need, serving as a vital link between NGOs dedicated to hunger relief and food establishments eager to contribute to this noble cause.</q>
                      </h2>
                      <br/><br/>
                      <h2 className='md:text-xl font-bold'><p>Our Vision</p></h2>
                    
                      <p className="mt-6 text-gray-600 text-justify">
                      We envision a world where no one goes to bed hungry, where surplus food is rescued and redirected to those who need it most. Through collaborative efforts, we strive to create a sustainable and efficient system that combats food waste and addresses the pressing issue of global hunger.
                      </p>
                      <br/><br/>
                      <h2 className='md:text-xl font-bold'><p>Our Mission</p></h2>
                    
                      <p className="mt-6 text-gray-600 text-justify">
                      At Hungry Hope, our mission is clear: to connect the surplus of quality food from restaurants, hotels, and catering services with the pressing needs of communities facing hunger. By partnering with NGOs and leveraging technology, we facilitate the timely and effective distribution of excess food to those who need it, reducing food waste and transforming lives in the process.
                      </p>
                      <br/><br/>
                      <h2 className='md:text-xl font-bold'><p>How We Work</p></h2>
                    
                    <p className="mt-6 text-gray-600 text-justify">
                    We act as the intermediary between compassionate food establishments and dedicated NGOs. Restaurants, hotels, and caterers can easily connect with us to donate their surplus food. Our platform streamlines the process, ensuring that no edible food goes to waste. Simultaneously, we work closely with established NGOs to identify areas of need and distribute the rescued food to communities facing hunger.
                    </p>
                    <br/><br/>
                    <h2 className='md:text-xl font-bold'><p>Join Us in the Fight Against Hunger</p></h2>
                    
                    <p className="mt-6 text-gray-600 text-justify">
                    We invite you to be part of this transformative journey. Whether you are a food establishment eager to make a difference or an NGO committed to hunger relief, Hungry Hope provides the platform for collective action. Together, let's turn surplus food into a lifeline for those in need and pave the way for a hunger-free world.
                    </p>
                      
                  </div>
              </div>
          </div>
      </div>
  );
}