import React from "react";
import { Card,CardBody } from "reactstrap";

function Header ({name, title}){
    return (
        <div class="text-bg-success ">
            <Card className="bg-warning">
                <CardBody>
            <h1 className="text-center">
                Welcome to Course Application
            </h1>
            </CardBody>
            </Card>
        </div>

    );
}
export default Header;