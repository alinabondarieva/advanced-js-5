class Users{
    constructor(){
    this.parent = document.querySelector("#root")
    }
    render(data){
        this.parent.insertAdjacentHTML("beforeend", `<ul>${data.map(item => {
            return `<li id=${item.id}>
            <p>${item.name}</p>
            <p>${item.username}</p>
            <p>${item.email}</p>
            </li>`
        }).join("")}</ul>`)
    console.log(data)
    }
}
const users = new Users()
export default users 