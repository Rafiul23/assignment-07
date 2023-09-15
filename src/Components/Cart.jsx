

const Cart = ({remainingCredit, totalCredit, coursePrice, courseName}) => {
    

    return (
        <div className="bg-white p-4 space-y-5 rounded-xl">
            <h2 className="text-[#2F80ED] text-xl font-bold">Credit Hour Remaining: {remainingCredit} hr </h2>
            <hr />
            <h2 className="text-xl font-bold">Course Name:</h2>
                <ol>
                    {
                        courseName.map((course, i)=> <li>{i+1}.    {course}</li>)
                    }
                </ol>
            <hr />
            <p className="text-[#1C1B1BCC] font-bold">Total Credit Hour: {totalCredit} </p>
            <hr />
            <p className="text-[#1C1B1BCC] font-bold">Total Price: {coursePrice} USD</p>
        </div>
    );
};

export default Cart;