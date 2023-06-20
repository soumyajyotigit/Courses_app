import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form,FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Course || Learn Code By Yourself"
      },[]);

      const [course, setCourse]=useState({});
      //form handeler function
      const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
      };

      //creating function to post data on server
      const postDataToServer=(data)=>{
        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
                setCourse({id:"", title:"", description:""});
            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Error! Something went wrong");
            }
        )
      };

    return (
        
        <Fragment>
            <h1 className="text-center my-3">Fill course details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                <label for="user id">Course Id</label>
                <Input type="text" 
                placeholder="Enter here" 
                name="user id" 
                id="user id"
                onChange={(e)=>{
                    setCourse({...course,id:e.target.value});
                }}
                />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course title</label>
                    <Input type="text" placeholder="Enter title here" id="title"
                    onChange={(e)=>{
                        setCourse({...course, title:e.target.value});
                    }}
                    />
                    
                </FormGroup>

                <FormGroup>
                    <label for="description">Course description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height:150}}
                    onChange={(e)=>{
                        setCourse({...course, description:e.target.value}); 
                    }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add course</Button>
                    <Button color="warning ml-2" type="reset">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );

};

export default AddCourse;
