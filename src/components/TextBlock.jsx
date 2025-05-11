export default function TextBlock({heading,content}){
    return(
        <div className="">
        <div className="font-libre ">{heading}</div>
        <div className="font-quest py-3">{content}</div>
        </div>
    )
}