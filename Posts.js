import api from "./API.js"
class Posts{
    constructor(){}
    render(data){
        data.forEach(item => {
         this.renderPosts(item)
        });
    }
    renderPosts(item){
        const parent = document.getElementById(`${(item.userId).toString()}`)
        parent.insertAdjacentHTML("beforeend", `<div id="${item.id}"><h4>${item.title}</h4><p>${item.body}</p><button>delete</button></div>`)
        const btn = document.getElementById(`${item.id.toString()}`).querySelector("button")
        btn.addEventListener("click", this.deletePost)
    }
    deletePost(event){
        event.preventDefault()
        const parent = event.target.closest("div")
        try{
            api.deleteData(`https://ajax.test-danit.com/api/json/posts/${parent.id}`)
         .then(res => {
            if(res.status === 200){
                parent.remove()
            }
         })

        } catch(error){
            console.log(error)
        }
    }
}
const posts = new Posts()
export default posts