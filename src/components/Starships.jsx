import React, { useState } from 'react';

import Table from "./common/Table";
import Form from './common/Form'

const data = [
    {name: 'Sentinel-class landing craft', manufacturer: 'Sienar Fleet Systems', class: 'Landing Craft', cost: 240000, length: 20, id: '1'},
    {name: 'Death Star', manufacturer: 'Sienar Fleet Systems', class: 'Landing Craft', cost: 240000, length: 20, id: '2'},
    {name: 'Y-wing', manufacturer: 'Sienar Fleet Systems', class: 'Landing Craft', cost: 240000, length: 20, id: '2'},
]

const columns = Object.keys(data[0]);

function Starship() {
    const [starship, setStarship] = useState(data);
    console.log(starship);

    const handleAppStarship = (starshipData) => {
        const data = [...starship, starshipData];
        setStarship(data)
    }

    const getInitialStarshipData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            <Table
                data={starship}
                columns={columns}
                tableDescriptor="Starship"
            />
            <Form
                initialData={getInitialStarshipData()}
                columns={columns}
                onAddData={handleAppStarship}
            />
        </div>
    );
}

export default Starship;
