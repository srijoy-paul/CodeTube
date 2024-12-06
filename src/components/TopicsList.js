import React from 'react'
import { topics } from "../utils/configUtils"
import Topic from "./Topic"
function TopicsList() {
    return (
        <div className="p-2 px-8 flex overflow-x-auto w-full gap-2">{topics?.map(topic => <Topic name={topic} key={topic} />)}</div>
        // <div></div>
    )
}

export default TopicsList