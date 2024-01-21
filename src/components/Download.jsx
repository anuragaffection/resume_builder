import React, { useState } from 'react'
import jsPDF from 'jspdf'
import { useDispatch } from 'react-redux'
import Address from '../components/previewComponents/Address'
import Bio from '../components/previewComponents/Bio'
import Education from '../components/previewComponents/Education'
import Experience from '../components/previewComponents/Experience'
import KeySkills from '../components/previewComponents/KeySkills'
import Projects from '../components/previewComponents/Projects'
import { Paper, Box } from '@mui/material'
import Styles from '../styles/input.module.css'
import { previousComponents } from '../redux/slices/sliceFillDetails.js'
import { scrollToTop } from '../utils/controls.js'


function Download() {
    const dispatch = useDispatch();
    const backToEdit = () => {
        dispatch(previousComponents(1))
        scrollToTop();
    }
    const [dynamicWidth, setDynamicWidth] = useState('auto');

    const orignalWidth = () => {
        setDynamicWidth(dynamicWidth === '600px' ? 'auto' : 'auto');
    }

    const generatePDF = () => {
        setDynamicWidth(dynamicWidth === 'auto' ? '600px' : 'auto');
        const startTimeStamp = performance.now();
        const newPdf = new jsPDF('portrait', 'pt', 'a4');
        const bgColor = '#f3f4f6';
        newPdf.setFillColor(bgColor);
        newPdf.rect(
            0,
            0,
            newPdf.internal.pageSize.getWidth(),
            newPdf.internal.pageSize.getHeight(),
            'F'
        );
        newPdf.html(document.querySelector('#resume')).then(() => {
            newPdf.save('resume.pdf');
        });
        const endTimeStamp = performance.now();
        const timeDifference = endTimeStamp - startTimeStamp;
        setTimeout(orignalWidth, timeDifference + 4000);
    }

    return (
        <div className={Styles.container} >
            <div className={Styles.wrapper}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    <div>
                        <Paper
                            elevation={3}
                            id='resume'
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#f3f4f6',
                                color: 'black',
                                width: {
                                    xs: dynamicWidth,
                                    sm: '600px'
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display : 'flex',
                                    flexDirection : 'row',
                                    justifyContent : 'center',
                                    alignItems : 'center',
                                }}
                            >
                                <Bio />
                                <Address />
                            </Box>

                            <Experience />
                            <Projects />
                            <Education />
                            <KeySkills />

                        </Paper>
                    </div>

                    <div className={Styles.buttonWrapper}>
                        <button
                            className={Styles.button}
                            onClick={() => backToEdit()}
                            type="button"
                        >
                            Back To Edit
                        </button>
                        <button
                            className={Styles.button}
                            onClick={() => generatePDF()}
                            type="button"
                        >
                            Export PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download