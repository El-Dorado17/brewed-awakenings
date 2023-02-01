import { getEmployees, getOrders } from "./database.js"     
//imported orders and employees (arrays of objects)

const employees = getEmployees()
const orders = getOrders()
// stored them each array of objects as variables



export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}
// This function loops through each employee and and lists their name and ID# within the html





const employeeOrders = (people, allOrders) => {     
    //function that should show how many orders an employee fulfilled themselves. (employee 7 ordered thrice: menu items 2, 4, & 9)
    
    let fulfilledOrders = 0 

    for (const order of allOrders){ //go through each order
        if (order.employeeId === people.id){  //if the order.employeeID is the same as the employee's ID,  
            ++fulfilledOrders   //increment fulfilledOrders by 1. If used prefix, (for example, ++x), it returns the value after incrementing.
        }
    }
    return fulfilledOrders
}






document.addEventListener(
    "click",
    (clickEvent) =>{
        const itemClicked = clickEvent.target
       if (itemClicked.id.startsWith('employee')){
         const [,employeeId] = itemClicked.id.split('--')
            for (const employee of employees){
             if(employee.id === parseInt(employeeId)){
                const orderCount = employeeOrders(employee, orders)
                    window.alert(`${employee.name} sold ${orderCount} menu items boi`)
                }
            }
        }
    }
)