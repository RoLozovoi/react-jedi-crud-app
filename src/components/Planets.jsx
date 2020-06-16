import React, { useState } from 'react';

import Table from "./common/Table";
import Form from './common/Form'

const data = [
    {name: 'Tatooine', climate: 'arid', terrain: 'desert', diameter: 20000, population: 123453, created: Date.now(), id: '1'},
    {name: 'Alderaan', climate: 'temperate', terrain: 'mountains', diameter: 2300, population: 300323, created: Date.now(), id: '2'},
    {name: 'Yavin IV', climate: 'tropical', terrain: 'jungle', diameter: 20000, population: 1234353, created: Date.now(), id: '3'}
]

const columns = Object.keys(data[0]);

function Planet() {
    const [planet, setPlanet] = useState(data);
    console.log(planet);

    const handleAppPlanet = (planetData) => {
        const data = [...planet, planetData];
        setPlanet(data)
    }

    const getInitialPlanetData = () => {
        return columns.reduce((cols, columnName) => {
            cols[columnName] = "";
            return cols;
        }, {})
    }

    return (
        <div className="container">
            <Table
                data={planet}
                columns={columns}
                tableDescriptor="Planet"
            />
            <Form
                initialData={getInitialPlanetData()}
                columns={columns}
                onAddData={handleAppPlanet}
            />
        </div>
    );
}

export default Planet;
