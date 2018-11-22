import React from 'react';
//import Text from './AboutText';
import url from "./About.md";
import Markdown from '../components/Markdown';
//console.log(thing);

const About = () => (
    <div>
        <Markdown path={url} />
    </div>
)

export default About;