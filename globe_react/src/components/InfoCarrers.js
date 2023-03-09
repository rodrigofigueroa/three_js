import React from 'react';
import AppMap from './map';
import MapTwo from './MapTwo/MapTwo'
import  './InfoCarrers.scss';
class InfoCarrers extends React.Component{
    render() {
        return (
            <section className="info-container">
                <h2>Carreras</h2>
                <h1>Info carreras</h1>                                
                <section className="change-menu">
                    <article>
                        {/* <AppMap /> */}
                        <MapTwo />
                    </article>
                    <article className="flexing">
                        <div>
                            <h2>Ventas</h2>
                            <p>Toyota Motor Manufacturing de Baja California S. de RL de C.V (TMMBC)
                                is an automobile manufacturing plant in Tijuana, 
                                Baja California, Mexico. The plant was established in 2002. 
                                The plant is a 350,000 sq ft (33,000 m2) building on a site of 700 acres, 
                                employing 700 people.[1] TMMBC is Toyotas first Automotive manufacturing 
                                The plant was built for an annual capacity of 180,000 truck beds and 30,000 Tacoma pickup trucks. In January
                                2006, Toyota announced that the plant capacity would be expanded to produce 50,000 Tacoma pickup trucks, and 200,000
                                truck beds. The Tacoma truck beds are used for total Tacoma production.[3] 
                                Plant in Tijuana,Mexico and builds Tacoma pickup trucks. ç
                                As of January 2016, Toyota reports truck production capacity of 90,000, employing 1,100.</p>
                        </div>
                            <button>Conoce</button>
                    </article>
                </section>
            </section>
        )
    }
}

export default InfoCarrers;