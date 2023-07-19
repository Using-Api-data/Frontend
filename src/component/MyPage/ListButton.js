import React from "react";

const ListButton = ({topic,handleTopic,enable}) => {
    return (
        <button onClick={handleTopic} style = {{...enable}}>
            {topic}
        </button>
    )
}

export default ListButton;