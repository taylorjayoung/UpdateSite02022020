import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({}))

export default function Skills() {
  const classes = useStyles();
  const skillsArray = [
    "ReactJS",
    "Redux",
    "Javascript",
    "NodeJS",
    "Ruby",
    "AWS S3",
    "SQLite",
    "PostgreSQL",
    "Rails",
    "C#",
    "ASP.Net Core",
    "ASP.Net MVC",
    "MVC",
    "HTML",
    "CSS",
    "SASS",
    "Material UI",
    "Bootstrap",
    "Git",
    "REST",
    "JSON",
    "Photoshop",
    ".Liquid"
  ];
  return (
    <Fragment>
      <div class="homeWrapper">
        <div className="skillsFlexContainer">
          <div className="skillsAbout">
            <h1 className="skillsPageTitle">Skills</h1>
            <p className="skillPs">
              Trained and practice both Front and Back End, I can take a project
              from concept to deployment. Always eager to learn new
              technologies, and never miss a chance to read up on all of the
              latest trends. Focusing on honing more Javascript at the moment
              due to it's powerful and versatile nature.
            </p>
          </div>
          <ul className="skills">
            
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
