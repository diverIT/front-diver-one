export default async function ApiRequest({
    url,
    method = "POST",
    body,
    headers
}){
    try{
        const response =  await fetch(url,{
            method,body,headers
        })
      
        return response.json()
    }catch(error){
        Promise.reject(error)
    }

}