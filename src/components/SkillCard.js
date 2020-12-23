import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';


import { IconContext } from "react-icons";
import { SiJavascript, SiPhp, SiPython, SiJava, SiLaravel, SiDjango, SiReact, SiFlask, SiNodeDotJs, SiAngular, SiFirebase } from 'react-icons/si';

export default function SkillCard({ title, color, colorText }) {



    const style = {
        card: {
            marginTop: '16px',
            backgroundColor: color,
            color: colorText,
            width: 95,
            flexGrow: 1
        }

    };

    return (

        <Tooltip title={title}>
            <Card style={style.card} elevation={4} >
                <CardContent>
                    <IconContext.Provider value={{ className: "global-class-name" }, { size: "4.5em" }}>
                        {title === 'Javascript' ? (<SiJavascript />)
                            : title === 'PHP' ? (<SiPhp />)
                                : title === 'Python' ? (<SiPython />)
                                    : title === 'Java' ? (<SiJava />)
                                        : title === 'Laravel' ? (<SiLaravel />)
                                            : title === 'Django' ? (<SiDjango />)
                                                : title === 'ReactJS' ? (<SiReact />)
                                                    : title === 'Flask' ? (<SiFlask />)
                                                        : title === 'Express JS' ? (<SiNodeDotJs />)
                                                            : title === 'Angular' ? (<SiAngular />)
                                                                : title === 'Firebase' ? (<SiFirebase />)
                                                                    : null
                        }
                    </IconContext.Provider>
                </CardContent>
            </Card>
        </Tooltip>
    );
}