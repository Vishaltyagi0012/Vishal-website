'use client';


const About = () => {
    return (
        <div className='h-[110vh] w-[100%] flex mt-2  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className=" h-[100vh] w-[81%] bg-white p-26 mt-26  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <img className=" mt-4 rounded-3xl ml-8  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" src="images.jpg" alt=""/>
                <img className=" ml-80 rounded-3xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" src="images 1.jpg" alt=""/>
                <img className=" ml-8 mt-1 rounded-3xl h-[30vh] w-[90%]  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" src="images2.jpg" alt=""/>
                
            </div>
            <div>
                <div>
                    <p className=" mt-20 text-amber-500 text-xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">ABOUT US</p>
                    <h1 className="mt-2 text-4xl font-bold  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Empowering Students To <span className="text-amber-500">Achieve</span> Dreams.</h1>
                    <p className=" mt-4 text-gray-600  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Our university is dedicated to fostering an sducational  environment that promotes personal growth , innovation, and academic excellence.</p>
                </div>
                <div>
                    <h3 className=" mt-8 font-bold text-xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Academice Excellence</h3>
                    <p className=" mt-4 text-gray-600  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Our faculty,resources, and state-of-the-art facilities ensure that students have access to everything they need to succeed and thrive</p>
                </div>
            </div>
        </div>
    )
}

export default About