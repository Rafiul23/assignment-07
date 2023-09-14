import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";


const MainContainer = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="container mx-auto pt-4">
            <div className="w-3/4">
               <div className="grid grid-cols-3 gap-4">
               {
                    courses.map((course, idx)=> <Course 
                    key={idx} 
                    course={course}>
                    </Course>)
                }
               </div>
            </div>
            <div className="w-1/4">

            </div>
        </div>
    );
};

export default MainContainer;