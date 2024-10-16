import "./MapComponent.css";

const MapComponent = ({ Businesses }) => {
    return (
        <div className="mapContainer">




            {Businesses.map((Business, index) => (

                <div className="BusinessCard">
                    <div className="image"></div>
                    <div className="textContainer">
                        <div className="Title" key={index}>{Business}</div>
                        <div className="texting">test</div>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default MapComponent;
