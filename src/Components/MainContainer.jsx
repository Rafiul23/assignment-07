import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
import Cart from "./Cart";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainContainer = () => {
    const [courses, setCourses] = useState([]);
    const [remainingCredit, setRemaingCredit] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);
    const [coursePrice, setCoursePrice] = useState(0);
    const [courseName, setCourseName] = useState([]);

    const handleCartSection = (credit_hours, course_price, course_name) =>{
        const newRemainingCredit = remainingCredit - credit_hours;

        if(newRemainingCredit < 0){
            return toast.error('No credit remaining');
        }

        if(courseName.find((course)=> course === course_name)){
            return toast.error('You have selected it already');
        } else {
            const newCourses = [ ...courseName, course_name];
            setCourseName(newCourses);
        }

        setRemaingCredit(newRemainingCredit);
        const newTotalCredit = totalCredit + credit_hours;
        setTotalCredit(newTotalCredit);
        const newCoursePrice = coursePrice + course_price;
        setCoursePrice(newCoursePrice);
        
    }

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="container flex gap-4 mx-auto py-8">
            <div className="w-3/4">
               <div className="grid grid-cols-3 gap-4">
               {
                    courses.map((course, idx)=> <Course 
                    key={idx} 
                    course={course}
                    handleCartSection={handleCartSection}>   
                    </Course>)
                }
               </div>
            </div>
            <div className="w-1/4">
                <Cart
                remainingCredit={remainingCredit}
                totalCredit={totalCredit}
                coursePrice={coursePrice}
                courseName={courseName}></Cart>
            </div>
        </div>
    );
};

export default MainContainer;