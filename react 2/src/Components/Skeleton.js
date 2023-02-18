import React from "react"

const Skeleton = ()=>{
    const SkeletonFeed = (
        <div className="sk_feed">
            <div className="img"></div>
            <div className="heading"></div>
            <div className="heading"></div>
            <div className="rating"></div>
        </div>
    )
    return (
        <div className="skeleton">
            {Array(16).fill(" ").map((arr,index) => (<React.Fragment key={index}>{SkeletonFeed}</React.Fragment>))}
        </div>
    )
}

export default Skeleton