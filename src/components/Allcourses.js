import React, { useEffect, useState } from "react";
import Course from "./Course";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";

const Allcourse=()=>{

    useEffect(()=>{
        alert("testing");
    } , []);

    //function to call server api

    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response.data);
                toast.success("courses has been loaded");
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
                
            }
        );
    };
    
    //calling loading course function

    useEffect(()=>{
        getAllCoursesFromServer();
    }, []);

    const[courses,setCourses]=useState([]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=> c.id!=id))
    };

    return(
        <div>
            
            <h1>All course</h1>
            <p>List of Courses are follows</p>
            {
                courses.length>0 ? courses.map((item)=><Course key={item.id} course={item} update={updateCourses}/>):"No course"
            }
        </div>
    );
};

export default Allcourse