import MapComponent from "../Components/Lists/LinearList/mapComponent";

const BusinessOverviewPage = () => {
    const businesses = [
        "Acme Corporation", "Globex Industries", "Umbrella Corp", "Stark Enterprises",
        "Wayne Enterprises", "Oscorp Industries", "Cyberdyne Systems", "Weyland-Yutani Corp",
        "Initech", "Soylent Corporation", "Tyrell Corporation", "Massive Dynamic",
        "Wonka Industries", "Dunder Mifflin", "Los Pollos Hermanos", "Prestige Worldwide",
        "Gekko & Co", "Hooli", "Pied Piper", "Vehement Capital Partners"
    ];

    return (
        <div>
           
            <MapComponent Businesses={businesses} />
        </div>
    );
};

export default BusinessOverviewPage;

