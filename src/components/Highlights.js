import React from "react";
import Card from "./Card";
import "../css/Highlights.css";
import bruchetta from "../images/bruchetta.svg";
const projects = [
    {
      title: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../images/greekSalad.jpg"),
    },
    {
      title: "Bruchetta",
      description:
        "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => { return bruchetta;},
    },
    {
      title: "Lemon Desert",
      description:
        "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined",
      getImageSrc: () => require("../images/lemonDessert.jpg"),
    }
];

export default function Highlights(){
    return(
        <div class="hlSection">
            <div class="title">
                <h2 style={{ color: 'black', fontWeight: '500' }}>This Weeks Specials!</h2>
                <button type="button" id="menu" >Online Menu</button>
            </div>
            <div class="container">
                    {projects.map((project) => (
                        <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.getImageSrc()}
                        />
                    ))}
            </div>
        </div>
    );
}