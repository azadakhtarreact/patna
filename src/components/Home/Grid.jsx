import React from 'react'

const GridPage = () => {
    return (
        <div className='p-4'>

            <div className="container mx-auto">
                <h1 className='xl:text-2xl lg:text-xl md:text-md sm:text-sm text-black-800'>12 Columns Examples</h1>
                <div className="grid gap-2 md:grid-cols-12">
                    <div className="p-4 text-center bg-red-600">1</div>
                    <div className="p-4 text-center bg-green-400">2</div>
                    <div className="p-4 text-center bg-yellow-400">3</div>
                    <div className="p-4 text-center bg-yellow-800">4</div>
                    <div className="p-4 text-center bg-red-600">5</div>
                    <div className="p-4 text-center bg-green-400">6</div>
                    <div className="p-4 text-center bg-yellow-400">7</div>
                    <div className="p-4 text-center bg-yellow-800">8</div>
                    <div className="p-4 text-center bg-red-600">9</div>
                    <div className="p-4 text-center bg-green-400">10</div>
                    <div className="p-4 text-center bg-yellow-400">11</div>
                    <div className="p-4 text-center bg-yellow-800">12</div>
                </div>
            </div>
            <br />
            <div className="container mx-auto">
                <h1 className='xl:text-2xl lg:text-xl sm:text-sm text-black-800'>division span in Columns Examples</h1>
                <div className="grid gap-2 md:grid-cols-12">
                    <div className="p-4 text-center bg-red-600 md:col-span-8">1</div>
                    <div className="p-4 text-center bg-green-400 md:col-span-4">2</div>
                    <div className="p-4 text-center bg-yellow-400 md:col-span-6">3</div>
                    <div className="p-4 text-center bg-yellow-800 md:col-span-6">4</div>
                </div>
            </div>
            <br />
            <div className="container mx-auto">
                <h1 className='xl:text-2xl lg:text-xl sm:text-sm text-black-800'>1/7/4 division span in Columns span Examples</h1>
                <div className="grid gap-2 lg:grid-cols-12 md:grid-cols-12">
                    <div className="p-4 text-center bg-red-600 lg:col-span-1 md:col-span-12">1</div>
                    <div className="p-4 text-center bg-green-400 lg:col-span-7 md:col-span-12">2</div>
                    <div className="p-4 text-center bg-yellow-400 lg:col-span-4 md:col-span-12">3</div>
                </div>
                <br />
            </div>

            <br />

            <div className="container mx-auto">
                <h1 className='xl:text-2xl lg:text-xl sm:text-sm text-black-800'> Center division span in Columns span Examples</h1>
                <div className="grid gap-4 lg:grid-cols-6">
                    <div className="col-span-4 col-start-2 p-4 text-center bg-red-600">01</div>
                    <div className="col-start-1 col-end-3 p-4 text-center bg-green-600">02</div>
                    <div className="col-span-2 col-end-7 p-4 text-center bg-yellow-600">03</div>
                    <div className="col-start-1 col-end-7 p-4 text-center bg-blue-600">04</div>
                </div>
                <br />
            </div>

            <div className="container mx-auto">
                <h1 className='xl:text-2xl lg:text-xl sm:text-sm text-black-800'>3 Columns Examples</h1>
                <div className="grid gap-2 md:grid-cols-2">
                    <div className="p-4 text-center bg-red-600">1</div>
                    <div className="p-4 text-center bg-green-400">2</div>
                    <div className="p-4 text-center bg-yellow-400">3</div>
                    <div className="p-4 text-center bg-yellow-800">4</div>
                </div>
            </div>
            <br />

            <div className="container mx-auto">
                <h1 className='xl:text-2xl lg:text-xl sm:text-sm text-black-800'>3 and 4 Columns Examples</h1>
                <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2">
                    <div className="p-4 text-center bg-red-600">1</div>
                    <div className="p-4 text-center bg-green-400">2</div>
                    <div className="p-4 text-center bg-yellow-400">3</div>
                </div>
                <br />
                <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2">
                    <div className="p-4 text-center bg-red-600">1</div>
                    <div className="p-4 text-center bg-green-400">2</div>
                    <div className="p-4 text-center bg-yellow-400">3</div>
                    <div className="p-4 text-center bg-yellow-800">4</div>
                </div>
            </div>

        </div>
    )
}

export default GridPage