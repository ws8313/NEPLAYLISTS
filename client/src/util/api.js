import axios from "axios"
//axios middleware
const url = "http://elice-kdt-ai-3rd-team03.koreacentral.cloudapp.azure.com";

export const postRequestWithJwtToken = (address,data,func) =>{
  // if (localStorage.getItem('token')) {
    let formData = new FormData();    
    for (var key in data) {
      formData.append(key, formData[key])
    }
    try {
      console.log(url+address);
      console.log(formData);

    axios({
      method:"post",
      url : url +address,
      data:formData,
      headers:{"Content-Type" : "multipart/form-data",}
      // "Authorization" : localStorage.getItem('token')
    }).then(
      res => {
        console.log("res는",res.data);
        return res
      }
    )} catch (e) {
      console.log(e)
    }
  }

