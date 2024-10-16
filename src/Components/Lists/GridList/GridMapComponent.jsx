import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./GridMapComponent.css";
import Update from '../../assets/Button/update.png';
import Delete from '../../assets/Button/delete.png';

const GridMapComponent = ({ departments, projects }) => {
    // Test data
    const testDepartments = ["Department 1", "Department 2", "Department 3"];
    const testProjects = ["Project A", "Project B", "Project C", "Project D", "Project E", "Project F", "Project G", "Project H"];
     
    // Use test data if no data is provided
    const [displayDepartments, setDisplayDepartments] = useState(departments || testDepartments);
    const [displayProjects, setDisplayProjects] = useState(projects || testProjects);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState(null); // Added modalType state
    const [currentProject, setCurrentProject] = useState({ deptIndex: null, projIndex: null, name: '' });
    const [currentDepartment, setCurrentDepartment] = useState({ index: null, name: '' });

    const addDepartment = () => {
        setDisplayDepartments([...displayDepartments, `Department ${displayDepartments.length + 1}`]);
    };

    const addProject = (deptIndex) => {
        const newProject = `Project ${displayProjects.length + 1}`;
        setDisplayProjects([...displayProjects, newProject]);
    };

    const deleteProject = (projIndex) => {
        const updatedProjects = displayProjects.filter((_, index) => index !== projIndex);
        setDisplayProjects(updatedProjects);
    };

    const deleteDepartment = (deptIndex) => {
        const updatedDepartments = displayDepartments.filter((_, index) => index !== deptIndex);
        setDisplayDepartments(updatedDepartments);
    };

    const openUpdateModal = (deptIndex, projIndex, projectName) => {
        setCurrentProject({ deptIndex, projIndex, name: projectName });
        setCurrentDepartment({ index: null, name: '' }); // Reset
        setModalType('project'); // Set modal type
        setModalVisible(true);
    };

    const openUpdateDepartmentModal = (deptIndex, departmentName) => {
        setCurrentDepartment({ index: deptIndex, name: departmentName });
        setCurrentProject({ deptIndex: null, projIndex: null, name: '' }); // Reset
        setModalType('department'); // Set modal type
        setModalVisible(true);
    };

    const updateProject = () => {
        const updatedProjects = [...displayProjects];
        updatedProjects[currentProject.projIndex] = currentProject.name;
        setDisplayProjects(updatedProjects);
        setModalVisible(false);
    };

    const updateDepartment = () => {
        const updatedDepartments = [...displayDepartments];
        updatedDepartments[currentDepartment.index] = currentDepartment.name;
        setDisplayDepartments(updatedDepartments);
        setModalVisible(false);
    };

    return (
        <div>
            {displayDepartments.map((department, deptIndex) => (
                <div key={`dept-${deptIndex}`}>
                    <div className='DepartmentHeader'>
                        <div className='DepartmentButtons'>
                            <button className='UpdateDepartmentButton' onClick={() => openUpdateDepartmentModal(deptIndex, department)}><img className='UpdateImage' src={Update} alt="Update" />Update Department</button>
                            <button className='DeleteDepartmentButton' onClick={() => deleteDepartment(deptIndex)}>X</button>
                        </div>
                        <h2 className='DepartmentTitle'>{department}</h2>
                    </div>
                    <div className='ProjectContainer'>
                        {displayProjects.map((project, projIndex) => (
                            <div className='ProjectCardContainer' key={`proj-${deptIndex}-${projIndex}`}>
                                <div className='ProjectCard'>
                                    <div className='ButtonsContainer'>
                                        <button className='UpdateProjectButton' onClick={() => openUpdateModal(deptIndex, projIndex, project)}>
                                            <img className='UpdateImage' src={Update} alt="Update" />
                                        </button>
                                        <button className='DeleteProjectButton' onClick={() => deleteProject(projIndex)}>X</button>
                                    </div>
                                    <Link to={`/question-overview/${department}/${project}`}>
                                        <div className='image-Component'></div>
                                        <div className='TitleProject'>{project}</div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <button className='AddProjectButton' onClick={() => addProject(deptIndex)}>
                            <div className='AddProject'>+</div>
                        </button>
                    </div>
                </div>
            ))}
            <button className='AddDepartmentButton' onClick={addDepartment}> + </button>   

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        {modalType === 'project' ? (
                            <>
                                <h2 className='UpdateProjectTitle' >Update Project</h2>
                                <input 
                                    type="text" 
                                    value={currentProject.name} 
                                    onChange={(e) => setCurrentProject({...currentProject, name: e.target.value})}
                                />
                                <button className='UpdateProjectButton-Modal' onClick={updateProject}>
                                    <img className='UpdateImage' src={Update} alt="Update" />
                                    Update
                                </button>
                            </>
                        ) : (
                            <>
                                <h2 className='UpdateDepartmentTitle' >Update Department</h2>
                                <input 
                                    type="text" 
                                    value={currentDepartment.name} 
                                    onChange={(e) => setCurrentDepartment({...currentDepartment, name: e.target.value})}
                                />
                                <button className='UpdateDepartmentButton' onClick={updateDepartment}>
                                    <img className='UpdateImage' src={Update} alt="Update" />
                                    Update
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GridMapComponent;
