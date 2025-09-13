'use client';

const Herosection = () => {
    return (
        <div className='h-[100vh] w-[100%] flex  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className=" h-[100vh] w-[75%] bg-gray-500 p-26 mt-26  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <div className='text-xl text-amber-500 mb-3  font-normal  mt-20 ml-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <p>Welcome to our college</p>
                </div>
                <h1 className=' text-white mt-15 ml-20 text-7xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>Start Your <span className=' text-amber-500'>Bright</span> Journey With Us</h1>
                <p className=' text-amber-500 mt-12 ml-20 text-2xl  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>There are many varistions of passages available, but<br></br> the majority have suffered alteration in some from</p>
                <div >
                    <button className='bg-amber-500 rounded px-5 py-3 hover:bg-slate-800 text-white ml-20 mt-20  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>ABOUT MORE </button>
                    <button className='bg-amber-500 rounded px-5 py-3 hover:bg-slate-800 text-white ml-20 mt-20  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>LEARN MORE </button>
                </div>

            </div>
            <div>
                <img className='h-[100vh] w-[900px]  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3' src='hero.jpg' alt='' />
            </div>
        </div>
    )
}

export default Herosection