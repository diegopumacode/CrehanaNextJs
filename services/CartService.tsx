export default class CartService{
    
    constructor() {
        let data = localStorage.getItem("cart")
        console.log(data)
    }

    saveCourse(course) {
        if(localStorage.getItem("cart")){
            let list = JSON.parse(localStorage.getItem("cart"))
            let findCourse = list.find((courseList)=> courseList.id == course.id)
            console.log(findCourse)
            if (!findCourse) {
                localStorage.setItem("cart",JSON.stringify([...list,course]))    
                console.log("llege")
                return true
            }
            return false
        }else{
            localStorage.setItem("cart",JSON.stringify([course]))
        }
        return true
    }
    
        
    getCourses(){
        return JSON.parse(localStorage.getItem("cart")) || []
    }

    getSubtotal(){
        if (JSON.parse(localStorage.getItem("cart"))) {
            let courses = JSON.parse(localStorage.getItem("cart")) 
            console.log(courses)
            let total = 0
            courses.forEach(course => {
                total += course.price
            });
            console.log(total)
            return  Number(total.toFixed(2))    
        }else{
            return 0
        }
        
        
    }
}