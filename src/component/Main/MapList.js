import React from 'react';
import { LeftArrow,RightArrow } from './Arrow';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import TestContent from './TestContent';
import { useNavigate } from 'react-router-dom';

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_,idx) => ({ id: idx }));

function MapList() {
    const [items, setItems] = React.useState(getItems);
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/map/${id}`)
    };

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {items.map(({ id }) => (
                <TestContent
                    itemId={id}
                    title={id}
                    key={id}
                    onClick={handleClick}  
                />
            ))}
        </ScrollMenu>
    );
}


export default MapList;