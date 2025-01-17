const url =  "http://localhost:3001/"


  const get = async (endpoint, id = "") => {
    try {
      const response = await fetch(url+endpoint+"/"+id, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data  = response.json()
    return data
     
    } catch (e) {
      console.error(e);
    
    } 
};


  const post = async (url, body) => {  
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      });
      
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    
      return null;
    } 
  

}


  
   const put = async (url, body) => {

    try {
      const response = await fetch(url, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      });
     
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      
      return null;
    } 
 
}

export { get, post, put };