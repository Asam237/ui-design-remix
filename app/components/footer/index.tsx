import { Link } from "react-router-dom"
import msgImg from "../../assets/pictures/mail.png"

const footers = [
    {
        title: "PRODUCT",
        items: [
            {
                name: "Jackets",
                link: "#"
            },
            {
                name: "Shets",
                link: "#"
            },
            {
                name: "Customer",
                link: "#"
            },
            {
                name: "Bottoms",
                link: "#"
            },
        ]
    },
    {
        title: "BUYING",
        items: [
            {
                name: "Shop",
                link: "#"
            },
            {
                name: "Terms of Use",
                link: "#"
            },
            {
                name: "Privacy",
                link: "#"
            },
            {
                name: "How it work",
                link: "#"
            },
        ]
    },
    {
        title: "SOCIAL",
        items: [
            {
                name: "Instagram",
                link: "#"
            },
            {
                name: "Facebook",
                link: "#"
            },
            {
                name: "Twitter",
                link: "#"
            },
        ]
    },
]

export default function FooterComponent() {
    return (
        <footer className="bg-black mt-[8%] py-16">
            <div className="container mx-auto">
                <div className="flex">
                    <div className="w-[29%]">
                        <div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 mr-4 border-4 border-white rounded-full" /><h1 className="text-[4rem] text-white font-extrabold leading-[110%]">SOPA</h1>
                            </div>
                            <h4 className="text-xl text-gray-400 font-normal pt-12 leading-[110%]">REAL DESIGNS BY REAL ARTISTS<br />FOR REAL PEOPLE</h4>
                        </div>
                    </div>
                    {
                        footers.map((item, index) => {
                            return (<div className="w-[14%]" key={index}>
                                <ul>
                                    <h4 className="text-white pb-6">{item.title}</h4>
                                    {
                                        item.items.map((item0, index) => {
                                            return (
                                                <li key={index} className="pt-1">
                                                    <Link to={item0.link} className="text-sm text-gray-400">{item0.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>)
                        })
                    }
                    <div className="w-[29%]">
                        <h4 className="text-white pb-6">JOIN OUT COMMUNITY</h4>
                        <div className="border-white border-2 rounded-full py-2 flex justify-between pl-12">
                            <input className="bg-black text-gray-400 outline-none focus:outline-none" placeholder="EMAIL ADRESS" type="text" />
                            <div className="w-12 h-12 bg-orange-400 rounded-full flex justify-center items-center mr-6">
                                <img src={msgImg} alt="" className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}