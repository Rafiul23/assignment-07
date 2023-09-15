

const Cart = ({remainingCredit, totalCredit}) => {
    

    return (
        <div className="bg-white p-4 rounded-xl">
            <h2 className="text-[#2F80ED] text-xl font-bold">Credit Hour Remaining: {remainingCredit} hr </h2>
            <hr />
            <h2 className="text-xl font-bold">Course Name</h2>

            <hr />
            <p className="text-[#1C1B1BCC]">Total Credit Hours: {totalCredit} </p>
            <hr />
            <p className="text-[#1C1B1BCC]">Total Price : USD</p>
        </div>
    );
};

export default Cart;