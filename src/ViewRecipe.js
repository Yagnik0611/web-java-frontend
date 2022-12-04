
import { useEffect, useState } from "react";
//import { Link, useNavigate } from "react-router-dom";



const  ViewEmp=()=> {
    const [empdata, empdatachange] = useState(null);
    const [Authorization, setAuth] = useState("");
    useEffect(() => {
        fetch('http://localhost:8083/viewrecipe', {
            method: 'GET',
            
           mode:"cors"
          }).then((res) => {
            console.log(res)
          
            return res.json();
        }).then((resp) => {
           console.log(resp)
          
        }).catch((err) => {
            console.log(err);
            
        })
    }, [])
      

 

        
    
    return (
        
        <>
        
           {/* <>
            <div>
      <h1  className='text-center   text-black'> EMPLOYEE LIST</h1>
  
  <div className="container">
      <div className="card">
          
          <div className="card-body">
             
          
            
              <table className="table  table-bordered">
                  <thead className="bg-dark text-white">
                      <tr>
                          <td>ID</td>
                          <td>first_name</td>
                          <td>last_name</td>
                          <td>email</td>
                          <td>gender</td>
                          <td>Action</td>
                      </tr>
                  </thead>
                  <tbody>
                  {empdata &&
                          empdata.map(item => (
                              <tr key={item._id}>
                              <td>1</td>
                          <td>{item.first_name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.email}</td>
                          <td>{item.gender}</td>
                          <td> <div className="d-flex justify-content-around">
                                      <a href={url2+item._id} className="btn btn-success">Edit</a>
                                      <a onClick={(e) => deleteEMp(item._id)} className="btn btn-danger">Remove</a>
                                      <a  href={url1+item._id} className="btn btn-primary">Details</a>
                                      </div>
                          </td>    

                                 
                      </tr>
                          ))
                      }

                  </tbody>

              </table>
          </div>
      </div>
  </div> </div></> */}
       

    </> 
   
                
       
        
        
         
    
    );
}
export default ViewEmp;