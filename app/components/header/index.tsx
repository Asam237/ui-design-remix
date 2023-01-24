import { Link } from "react-router-dom"
import accountImg from "../../assets/pictures/account.png"
import searchImg from "../../assets/pictures/search.png"
import shoppingImg from "../../assets/pictures/shopping.png"

interface NavsProps {
    link: string
    name: string
}

const imgs = [
    accountImg,
    searchImg,
    shoppingImg
]

const navs: NavsProps[] = [
    {
        link: "#article",
        name: "Article"
    },
    {
        link: "#radio",
        name: "Radio"
    },
    {
        link: "#podcast",
        name: "Podcast"
    },
    {
        link: "#beawriter",
        name: "Be a writer"
    },
    {
        link: "#talkous",
        name: "Talk Ous"
    },
]

export function HeaderComponent() {
    return (
        <header>
            <div className="site__header-txt bg-black text-center py-6">
                <p className="text-white text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="container mx-auto pt-10">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">

                        <div className="w-8 h-8 mr-4 border-4 border-black rounded-full" />
                        <Link to="#" className="mylogo text-lg font-extrabold">SOPA</Link>
                    </div>
                    <ul className="flex">
                        {
                            navs.map((item, index) => {
                                return (

                                    <li key={index} className="link mx-4 text-base font-normal text-black">
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="icon">
                        <ul className="flex">
                            {
                                imgs.map((item, index) => {
                                    return (<li className="w-5 h-5 ml-4" key={index}>
                                        <img src={item} alt="" />
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </header>
    )
}