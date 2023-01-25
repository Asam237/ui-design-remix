import ChangingWayComponent from "~/components/changingway";
import DesignComponent from "~/components/design";
import FooterComponent from "~/components/footer";
import { HeaderComponent } from "~/components/header";
import arrowImg from "../../assets/pictures/arrow.png"
import msgImg from "../../assets/pictures/mail.png"

export function MarketPlacePage() {

    return (
        <>
            <HeaderComponent />
            <main className="mt-12">
                <div className="container mx-auto">
                    <div className="flex h-[85vh]">
                        <section className="w-1/2 h-4/5 sectionone">
                            <div className="container mx-auto h-full">
                                <div className="blocone mr-2 rounded-2xl mx-auto h-full bg-center bg-cover bg-banner">
                                    <div className="flex items-end h-full p-8 justify-between">
                                        <div className="w-3/5 mr-2 rounded-full p-3 bg-white">
                                            <div className="flex justify-between mx-4">
                                                <h4 className="my-auto">LEARN MORE</h4>
                                                <div className="w-12 h-12 bg-black rounded-full flex justify-center items-center">
                                                    <img src={arrowImg} alt="" className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-3/5 ml-2 rounded-full p-3 border-2 border-white">
                                            <div className="flex justify-between mx-4">
                                                <h4 className="my-auto text-white">CONTACT US</h4>
                                                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                                                    <img src={msgImg} alt="" className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="w-1/2 h-4/5 sectiontwo">
                            <div className="container mx-auto h-full">
                                <div className="bloctwo ml-2 rounded-2xl mx-auto bg-[#d4d3cf] h-[64%]">
                                    <div className="container mx-auto h-full">
                                        <div className="p-8 flex flex-col justify-between h-full">
                                            <h1 className="text-[4rem] font-extrabold leading-[110%]" style={{ fontFamily: 'Bebas Neue' }}>GET TO YOUR<br />DREAM NOW DESTINATION<br />WITH TRAVEL PRO.</h1>
                                            <p className="w-[350px]" >Lorem ipsum dolor sit amet consectetur adipisicing elit iwbeoq iecfns qsiqnmp.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[1%]" />
                                <div className="ml-2 mx-auto h-[35%] flex">
                                    <div className="blocthree bg-trendingone bg-center bg-cover rounded-2xl w-1/2 mr-2 flex items-end">
                                        <h4 className="p-8 text-[2rem] font-bold text-white" style={{ fontFamily: 'Bebas Neue' }}>#TRENDING 2023</h4>
                                    </div>
                                    <div className="blocfour bg-trendingtwo rounded-2xl w-1/2 mr-2 flex items-end bg-center bg-cover">
                                        <h4 className="p-8 text-[2rem] font-bold text-white" style={{ fontFamily: 'Bebas Neue' }}>#OLDBUTGOLD</h4>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <h4 className="text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit <span className="myround">recusandae</span> sequi alias fuga, ipsum sint delectus id ipsam dignissimos ab obcaecati quia facilis placeat eius odit, officiis in et neque?</h4>
                    <ChangingWayComponent />
                    <DesignComponent />
                </div>
                <FooterComponent />
            </main>
        </>
    )
}