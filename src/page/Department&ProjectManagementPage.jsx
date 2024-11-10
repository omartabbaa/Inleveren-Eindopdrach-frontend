import GridMapComponent from "../Components/Lists/GridList/GridMapComponent";
import "./Department&ProjectManagementPage.css";
const DepartmentProjectManagementPage = () => {
    const departments = [
        "Department 1", "Department 2", "Department 3", "Department 4", "Department 5",
        "Department 6", "Department 7", "Department 8", "Department 9", "Department 10",
        "Department 11", "Department 12", "Department 13", "Department 14", "Department 15",
        "Department 16", "Department 17", "Department 18", "Department 19", "Department 20"
    ];
    return (
        <div>

          
            
            <div className="DepartmentProjectManagementPage">
            <GridMapComponent data={departments} />
            </div>
          
            
        </div>
    );
};

export default DepartmentProjectManagementPage;

