import {FaBookOpen} from 'react-icons/fa';

function Course({ course }) {
    const { course_thumbnail, credit_hours, course_price, course_name, course_details } = course;

    return (
        <div className="p-4 bg-white rounded-xl">
            <img src={course_thumbnail} />
            <h2 className="text-xl font-bold">{course_name}</h2>
            <p className="text-[#1c1b1ba8]">{course_details}</p>
            <div className='flex pt-2 justify-between'>
            <p>$ <span className="text-[#1c1b1bad]">Price: {course_price}</span></p>
            <div className='pt-1 -mr-12'>
            <FaBookOpen></FaBookOpen>
            </div>
              <p className="text-[#1c1b1bad]">Credit: {credit_hours} hours
            </p>
            </div>

            <button className='bg-[#2F80ED] text-white w-full p-2 mt-4 rounded-lg'>Select</button>
        </div>
    );
}

export default Course;