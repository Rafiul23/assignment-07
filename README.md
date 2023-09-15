
Q: Add at least 3 Project features.
A: 3 Project features are as follow:

 a. You can select any course by clicking the select button. But you can't select a course more than one time. If you want to do so, you will get a error message.

b. You can take total 20 credit hours. You can't take course more than 20 credit hours. If you want to do so, an error message will be shown to you.

c. You can see all selected courses and their total price on cart section.


Q: Discuss how you managed the state in your assignment project.

A: At first, I made a mother component named MainContainer. I declared all the states in that component. All the cards and cart section were under the MainContainer. 

I brought all necessary data from all cards by passing the parameters through handleCartSection function written inside the onClick attribute of button (select button) element.The function was stated in MainContainer component.After getting necessary information through the parameters, I updated all the states by setState (ex: setCourses, setRemaingCredit etc.) functions. Then I passed the updated varriables (ex: courses, remainingCredit etc.) into the cart component like below:

             <Cart
                remainingCredit={remainingCredit}
                totalCredit={totalCredit}
                coursePrice={coursePrice}
                courseName={courseName}>
                </Cart>

    Inside the cart component, I caught all the parameters by object destructuring. 

    const Cart = ({remainingCredit, totalCredit, coursePrice, courseName}) =>{
        ...... code......
    }   

 Then I used data where necessary.In brief, I declared the states in a mother component. I tooke data from one child (Card component) then updated by useState and then passed the updated data to another child (cart component).Thus I managed all the states in my projects. 