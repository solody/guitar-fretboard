import React from "react";
import {Stage, Layer, Text, Group, Rect, Line, Circle} from 'react-konva';

const App = () => {

    let fretWidth = 80
    let fretHeight = 30

    let notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

    let frets = []
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 12; j++) {
            frets.push(createFret(fretWidth, fretHeight, fretWidth*j, fretHeight*i))
        }
    }

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {frets}
            </Layer>
        </Stage>
    );
};

function createFret(width: number, height: number, x: number, y: number) {
    return <Group x={x} y={y} draggable>
        <Rect
            width={width}
            height={height}
            fill="yellow"
            stroke="black"
            strokeWidth={0}
        />
        <Line
            points={[width, 0, width, height]}
            stroke="black"
            strokeWidth={2}
            lineCap="round"
            lineJoin="round"
            offsetX={1}
        />
        <Line
            points={[0, 0, width, 0]}
            stroke="red"
            strokeWidth={2}
            lineCap="round"
            lineJoin="round"
            offsetY={-height/2}
        />
        <Circle
            x={width / 2}
            y={height / 2}
            radius={height / 3}
            fill="red"
            stroke="black"
            strokeWidth={0}
        />
        <Text
            width={width}
            height={height}
            x={0}
            y={0}
            text="X"
            fontSize={height / 2}
            fontFamily="Calibri"
            fill="white"
            align={"center"}
            verticalAlign={"middle"}
        />
    </Group>
}

export default App;