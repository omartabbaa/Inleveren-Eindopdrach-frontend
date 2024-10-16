import './AdminDashboardPage.css';
import React from 'react';

import { useState } from 'react';
const AdmnDashboardPage = () => {
    const [expertBackroundColor, setExpertBackroundColor] = useState('');
    const [departments, setDepartments] = React.useState([
        "Department 1",
        "Department 2",
        "Department 3"
    ]);

    const [toggleStates, setToggleStates] = useState({});
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const [accordionStates, setAccordionStates] = useState({});
    const [selectedDepartmentToDelete, setSelectedDepartmentToDelete] = useState('');

    const projects = [
        "Project A", "Project B", "Project C", "Project D", "Project E", "Project F"
    ];

    const experts = [
        "Expert A", "Expert B", "Expert C", "Expert D", "Expert E", "Expert F", "Expert G", "Expert H", "Expert I"
    ];

    const allDepartments = [
        "Department 1", "Department 2", "Department 3", "Department 4", "Department 5",
        "Department 6", "Department 7", "Department 8", "Department 9", "Department 10"
    ];

    const addDepartment = () => {
        if (selectedDepartment) {
            setDepartments([...departments, selectedDepartment]);
            setSelectedDepartment('');
        }
        console.log(departments);
    };

    const handleToggle = (deptIndex, expertIndex) => {
        const toggleId = `${deptIndex}-${expertIndex}`;
        setToggleStates(states => ({
            ...states,
            [toggleId]: !states[toggleId]
        }));
    };

    const expandAccordion = (deptIndex, department) => {
        const accordionId = `${deptIndex}-${department}`;
        setAccordionStates(prev => ({
            ...prev,
            [accordionId]: !prev[accordionId]
        }));
        console.log("expand accordion");
    };

    const deleteDepartment = (deptIndex, departmentToDelete) => {
        setDepartments(departments.filter((dept, index) => index !== deptIndex));
        console.log("Department deleted:", departmentToDelete);
    };

    return (
        <div className="admin-dashboard">
            <h1 className="dashboard-title">Admin Dashboard
            <h2 className="dashboard-subtitle">Grant targeted access to expert agents for answering tickets related to specific products or entire product categories.</h2>
            </h1>
           
            
            <div className="department-grid">
             
                    {departments.map((department, deptIndex) => (
                        <div key={deptIndex} className="department-card">
                        
                        <span className="department-projectsContainer">
                            <h2 className="department-name">{department}</h2>
                            <h3 className="department-description">Give access to expert agents</h3>
                       
                            <div className="projects-list">
                                <ul className="project-select-container">
                                    <select className="project-select">
                                        <option className="project-option" value="all">All Projects</option>
                                        {projects.map((project, projIndex) => (
                                            <option className="project-option" key={projIndex} value={project}>{project}</option>
                                        ))}
                                    </select>
                                </ul>
                              

                            </div>
                            <div className="department-buttons-container">
                                <button onClick={() => expandAccordion(deptIndex, department)} className="accordion-experts-button">
                                    {accordionStates[`${deptIndex}-${department}`] ? '-' : '+'}
                                </button>
                                <button onClick={() => deleteDepartment(deptIndex, department)} className="delete-department-button">X</button>
                            </div>
                        </span>

                        {accordionStates[`${deptIndex}-${department}`] && (
                            <div className="experts-list">
                                <ul className="experts-container">
                                    {experts.map((expert, expertIndex) => {
                                        const toggleId = `${deptIndex}-${expertIndex}`;
                                        return (
                                            <li key={expertIndex} className={`expert-item ${toggleStates[toggleId] ? "expert-item-active" : ""}`}>
                                                <>
                                                    <div className='expert-item-container'>
                                                        <span className="expert-name">{expert}</span>
                                                        <button
                                                            className={`toggleButton${toggleStates[toggleId] ? " active" : ""}`}
                                                            onClick={() => handleToggle(deptIndex, expertIndex)}
                                                        >
                                                            <div className="toggle-circle"></div>
                                                        </button>
                                                    </div>
                                                    <h4 className='Access-NoAccess'>{toggleStates[toggleId] ? "Access" : "No Access"}</h4>
                                                </>
                                            </li>
                                            
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="add-department-container">
                <select 
                    className="department-select"
                    value={selectedDepartment} 
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                    <option value="">Select a product category</option>
                    {allDepartments.map((dept, index) => (
                        <option key={index} value={dept}>{dept}</option>
                    ))}
                </select>
                <button className="add-department-button" onClick={addDepartment}>Add Product Category</button>
            </div>
        </div>
    );
};

export default AdmnDashboardPage;

