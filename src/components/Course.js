import axios from "axios";
import React from "react";
import { Card, CardBody, CardTitle, CardText,Button, Container, CardSubtitle } from 'reactstrap';
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course=({course, update})=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("course deleted");
                update(id);
            },
            (error)=>{
                toast.error("course not deleted")
            }
        )
    };
    return(
        <Card>
            <CardBody className="text-center">
                <CardSubtitle tag="h5">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id)
                    }}>Delete</Button>
                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );

};

export default Course;