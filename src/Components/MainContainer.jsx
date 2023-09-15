import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
import Cart from "./Cart";


const MainContainer = () => {
    const [courses, setCourses] = useState([]);
    const [remainingCredit, setRemaingCredit] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);

    const handleCartSection = (credit_hours, course_price) =>{
        const newRemainingCredit = remainingCredit - credit_hours;
        setRemaingCredit(newRemainingCredit);
        const newTotalCredit = totalCredit + credit_hours;
        setTotalCredit(newTotalCredit);
    }

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="container flex gap-4 mx-auto pt-4">
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
                totalCredit={totalCredit}></Cart>
            </div>
        </div>
    );
};

export default MainContainer;