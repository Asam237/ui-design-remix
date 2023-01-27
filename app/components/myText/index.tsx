interface MyTextProps {
    type?: string
    text: string
    mystyle?: string
}

export default function MyText({ type, text, mystyle }: MyTextProps) {
    if (type === "title") {
        return <h1 className={`text-4xl leading-[120%] ${mystyle}`}>{text}</h1>
    }
    if (type === "header") {
        return <h4 className={`text-2xl leading-[120%] font-normal ${mystyle}`}>{text}</h4>
    }
    return <p className={`text-sm leading-[150%] ${mystyle}`}>{text}</p>
}