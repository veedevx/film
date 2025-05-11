export default function Button({href,text}){
    return(
        <div className="w-full flex justify-center py-2 hover:opacity-50 cursor-pointer">
            <a href={href} className="border rounded-full p-2">{text}</a>
        </div>
    )
}