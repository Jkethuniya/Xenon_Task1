import { authAxios , unAuthAxios } from "../axios";

export async function  login(data) {

        const response =    await unAuthAxios.post('/auth/login' , data)
     

 
        // console.log(response.data)
        // console.log(response.data.detail)
        localStorage.setItem("profile" , JSON.stringify(response.data.detail))
    

  return response.data;
  
}

export async function register(data) {
  const response =    await unAuthAxios.post('/auth/register' , data)
  // console.log(response.data.data)

}