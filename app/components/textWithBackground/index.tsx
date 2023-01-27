interface TextWithBackgroundProps {
    text: string
    mystyle: string
}

export default function TextWithBackgroundComponent({ text, mystyle, ...props }: TextWithBackgroundProps) {
    return <h4 className={`font-semibold ${mystyle} rounded-full text-center px-2 py-1`}>{text}</h4>

}