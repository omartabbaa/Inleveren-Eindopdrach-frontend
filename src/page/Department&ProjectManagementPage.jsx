import GridMapComponent from "../Components/Lists/GridList/GridMapComponent";
import "./Department&ProjectManagementPage.css";
const DepartmentProjectManagementPage = () => {

    return (
        <div>

          
            
            <div className="DepartmentProjectManagementPage">
            <GridMapComponent data={departments} />
            </div>
          
            
        </div>
    );
};

export default DepartmentProjectManagementPage;

