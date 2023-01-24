export default function ChangingWayComponent() {
    return (
        <div className="h-[70vh] my-[8%] flex">
            <div className="bg-orange-400 h-full rounded-2xl w-2/3 mr-2">
                <div className="container mx-auto px-12 py-16">
                    <h1 className="text-[4rem] font-bold leading-[120%]" style={{ fontFamily: 'Bebas Neue' }}>WE'RE CHANGING<br />THE WAY THINGS<br />GET MADE BY<br /> TRAVEL PRO.</h1>
                </div>
                <div className="h-[2px] bg-gray-700 mt-10" />
                <div>
                    <div className="container mx-auto px-12 py-4">
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="pt-8">
                                    <h4 className="text-2xl font-medium">MISSION</h4>
                                </div>
                                <div className="py-4 mr-6">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a incidunt perferendis amet voluptatum? Ullam.</p>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="pt-8">
                                    <h4 className="text-2xl font-medium">SUSTAINBILITY</h4>
                                </div>
                                <div className="py-4 mr-6">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a incidunt perferendis amet voluptatum? Ullam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-center bg-cover h-full rounded-2xl w-1/3 ml-2 bg-trendingone" />
        </div >
    )
}