import MyText from "../myText";
import TextWithBackgroundComponent from "../textWithBackground";

export default function DownloadComponent() {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex">
                                <MyText text="Get started with" mystyle="font-normal" />
                                <MyText text="Download" mystyle="underline pl-2" />
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <MyText text="Size" mystyle="font-normal" />
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <MyText text="Downloads" mystyle="font-normal" />
                        </th>
                        <th scope="col" className="px-6 py-3 flex justify-end">
                            <div className="flex">
                                <MyText text="Sorted by" mystyle="font-normal" />
                                <MyText text="popular" mystyle="underline pl-2" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border  rounded-xl">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  md:w-1/2">
                            <div className="flex flex-col md:flex-row md:items-center">
                                <div className="my-2 md:my-0 md:mr-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex justify-center items-center">
                                        <MyText text="1." type="header" mystyle="text-white" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <MyText text="Dashboard" type="header" mystyle="underline" />
                                    </div>
                                    <div className="inline-block">
                                        <MyText text="Lorem ipsum dolor, sit amet consectetur adipisicing elit." mystyle="inline-block" />
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            <MyText text="220.4 MB" type="header" />
                        </td>
                        <td className="px-6 py-4">
                            <MyText text="1 000 000+" type="header" />
                        </td>
                        <td className="px-6 py-4 flex items-center justify-end">
                            <TextWithBackgroundComponent text="Download now" mystyle="bg-black w-[220px] text-white text-center" />
                        </td>
                    </tr>
                    <div className="mt-6" />
                    <tr className="border  rounded-xl">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  md:w-1/2">
                            <div className="flex flex-col md:flex-row md:items-center">
                                <div className="my-2 md:my-0 md:mr-4">
                                    <div className="w-12 h-12 bg-indigo-400 rounded-full flex justify-center items-center">
                                        <MyText text="2." type="header" mystyle="text-indigo-900" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <MyText text="Management panel" type="header" />
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            <MyText text="2.42 TB" type="header" />
                        </td>
                        <td className="px-6 py-4">
                            <MyText text="500 000+" type="header" />
                        </td>
                        <td className="px-6 py-4 flex items-center justify-end">
                            <TextWithBackgroundComponent text="Download now" mystyle="bg-white border border-black rounded-full w-[220px] text-black text-center" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}