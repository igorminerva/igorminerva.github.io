import React from 'react'
import { Button } from 'react-bootstrap'

import resume from '../assets/resume.pdf'

const ResumeButton = () => {
    return (
        <Button variant="primary" href={resume} download>
            <i className="bi bi-filetype-pdf"></i> Download My Resume
        </Button>
    )
}
export default ResumeButton