import React from "react";
import Section from "../Section/Section";
import Card from "../Card/Card";
import Review from "../Review/Review";

const review = [
    {
        imgUrl: "",
        name: "John",
        content: "The first time I tried to make my own design decisions I decided I wasnt very good which is why I went with Dayton Designs. Would Recommend!",
        date: "July 2015"

    },
    {
        imgUrl: "",
        name: "Daryl",
        content: "The first time I tried to make my own design decisions I decided I wasnt very good which is why I went with Dayton Designs. Would Recommend!",
        date: "July 2015"

    },
    {
        imgUrl: "",
        name: "Hamilton",
        content: "The first time I tried to make my own design decisions I decided I wasnt very good which is why I went with Dayton Designs. Would Recommend!",
        date: "July 2015"

    }
];

const Reviews = () => {
    return (
        <>
            <Section header="Reviews">
                <Card>
                    <Review review={review[0]}/>
                </Card>
                <Card>
                    <Review review={review[1]}/>
                </Card>
                <Card>
                    <Review review={review[2]}/>
                </Card>
            </Section>
        </>
    );
};
export default Reviews;
