import axios from 'axios';
import React, { useState } from 'react';

async function Signout(navigate){

    const id = sessionStorage.getItem("id");

    try{

        const response = await axios.post('http://localhost:3001/Signout', 
                {id}
        );

        if(response.status === 200){
            navigate("/")
        }else{
            alert('Suan cikisinizi yapamiyoruz.');
        }


    }catch (err){
        console.error(err);
    }

}
export default Signout;