import HeaderComponent from "~/components/header"
import UpArrowImg from "../assets/pictures/uparrow.png"
import PlayImg from "../assets/pictures/play.png"
import RightArrowImg from "../assets/pictures/rightarrow.png"
import TextWithBackgroundComponent from "~/components/textWithBackground"
import MyText from "~/components/myText"
import DownloadComponent from "~/components/download"

export default function Index() {
  return (
    <div className="site py-4 lg:py-8 px-4 sm:px-6 xl:px-0">
      <div className="container mx-auto">
        <HeaderComponent />
        <main className="py-5 lg:py-10">
          <div className="flex flex-col xl:flex-row">
            <div className="w-full xl:w-1/2 bg-trendingone bg-cover bg-center h-[45vh] xl:h-[55vh] mt-4 md:mt-0 md:mr-4 rounded-3xl">
              <div className="px-3 md:px-2 xl:px-6 py-12 h-full flex flex-col justify-between">
                <TextWithBackgroundComponent text="STREAM APPLICATION" mystyle="bg-white text-[#000000] text-xs lg:w-[200px]" />
                <div>
                  <div className="flex items-center">
                    <MyText type="header" text="Business conference" mystyle="text-white" />
                    <div className="w-14 h-10 md:w-6 md:h-6 rounded-full bg-green-500 ml-4 flex justify-center items-center">
                      <img src={RightArrowImg} className="h-4 w-4 md:w-2 md:h-2" alt="" />
                    </div>
                  </div>
                  <MyText text="Application and solution for companies to conduct training and remote classes with unlimited video conferencing" mystyle="text-white pt-8" />
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/2 h-[45vh] xl:h-[55vh] flex flex-col md:flex-row mt-4 md:mt-4 xl:mt-0 rounded-3xl">
              <div className="w-full h-full md:w-1/2 bg-blue-500 rounded-3xl md:mr-4">
                <div className="px-3 md:px-2 xl:px-6 py-12 h-full flex flex-col justify-between">
                  <TextWithBackgroundComponent text="TUTORIAL INTRODUCE" mystyle="bg-blue-400 mx-auto w-[180px] text-xs md:w-[180px] lg:w-[220px] text-white" />
                  <div className="mx-auto my-8 md:my-0">
                    <div className="border-2 border-white rounded-full p-6 xl:p-12">
                      <img src={PlayImg} alt="" className="w-6 h-6" />
                    </div>
                  </div>
                  <MyText type="header" text="Solutions and guide for meetings" mystyle="text-white md:px-0 text-center" />
                </div>
              </div>
              <div className="w-full h-[45vh] xl:h-[55vh] md:w-1/2">
                <div className="w-full h-full flex flex-col">
                  <div className="w-full h-full md:h-[22vh] xl:h-[26vh] bg-green-600 mt-4 md:mt-0 rounded-3xl">
                    <div className="px-3 md:px-2 xl:px-6 py-12 h-full flex flex-col justify-between">
                      <TextWithBackgroundComponent text="MEETING SYSTEM" mystyle="bg-green-500 w-[220px] text-xs mx-auto text-white" />
                      <div className="mx-auto my-8 md:my-0">
                        <MyText type="header" text="Streaming experience" mystyle="text-white" />
                        <MyText text="Configuration and management of the video streaming panel." mystyle="text-white pt-4" />
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[2vh] xl:h-[3vh]" />
                  <div className="w-full h-full md:h-[22vh] xl:h-[26vh] bg-black mt-4 md:mt-0 rounded-3xl">
                    <div className="px-3 md:px-2 xl:px-6 py-12 h-full flex flex-col justify-between">
                      <div className="flex items-center">
                        <MyText text="10M+" type="title" mystyle="text-white" />
                        <div className="w-6 h-6 rounded-full bg-white ml-4 flex justify-center items-center">
                          <img src={UpArrowImg} className="w-2 h-2" alt="" />
                        </div>
                      </div>
                      <div className="mx-auto my-8 md:my-0">
                        <MyText type="header" text="" mystyle="text-white" />
                        <MyText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolore?" mystyle="text-white pt-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="container mx-auto mt-[60vh] md:mt-0">
        <DownloadComponent />
      </div>
    </div>
  )
}