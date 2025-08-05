const header = () => {
  return (
    <div className="h-16 w-full bg-gray-800 px-3 sm:p-0">
        <div className="container mx-auto w-full h-full flex items-center justify-between text-white">
            <div className="md:flex md:items-center md:gap-10 flex justify-between md:w-2/4">
                <div className="text-3xl font-bold">Side Bar</div>
                <div className="hidden md:block">
                    <ul className="flex gap-4 lg:gap-8">
                        <li>
                            Home
                        </li>
                        <li>
                            Featurs
                        </li>
                        <li>
                            FaQs
                        </li>
                        <li>
                            About
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-2">
                <input type="text" className="border-2 border-white px-3 rounded-2xl"/>
                <button className="border-2 p-1 rounded-xl cursor-pointer">Login</button>
                <button className="bg-orange-600 p-1 rounded-xl cursor-pointer">Sign-up</button>
            </div>
        </div>
    </div>
  )
}

export default header