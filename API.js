class API{
    constructor(url){
        this.baseUrl = url
    }
    async getData(url){
     const res = await fetch(url)
     const data = await res.json()
    return data
    }
    async deleteData(url){
        console.log(url)
     const res = await fetch(url, {
        method:"DELETE", 
        headers: {
            'Content-Type': 'application/json'
        },
     })
     return res 
    }
}
const api = new API()
// api.getData("https://ajax.test-danit.com/api/json/users")
export default api 