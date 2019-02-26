import React from 'react';

const Legends = ({legends}) => {
        // const legList = legends.map(legend => {
        //     if(legend.goals > 250) {
        //     return (
        //         <div className="legend" key={legend.id}>
        //         <div>Name: {legend.name}</div>
        //         <div>Number: {legend.number}</div>
        //         <div>Gols: {legend.goals}</div>
        //     </div>
        //     )
        //     } else {
        //         return null
        //     }
        // })
        const legList = legends.map(legend => {
            return legend.goals > 5 ? (
                <div className="legend" key={legend.id}>
                    <div>Name: {legend.name}</div>
                    <div>Number: {legend.number}</div>
                    <div>Gols: {legend.goals}</div>
                </div> 
            ) : null;
        })
        return(
            <div className="legend-list">
                {legList}
            </div>
        )
    }

export default Legends;