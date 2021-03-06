
import React,{useState} from 'react'
import { Card,Badge,Button,Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'


export default function Job({job}) {
    const [open,setOpen] = useState(false)
    return (
        <Card>
            <Card.Body>
        <div className="d-flex justify-content-between">
             
             <div>

                <Card.Title>
                    {job.title} - <span className="text-muted
                     front-weight-light">{job.company}</span>
                </Card.Title>
                <Card.Subtitle className="text-muted mb-2">
                    {new Date(job.created_at).toLocaleDateString()}
                </Card.Subtitle>
                <Badge variant="secondary" className="mr-2"></Badge><Badge>{job.type}</Badge>
                <Badge variant="secondary"></Badge><Badge>{job.location}</Badge>

                <div style={{wordBreak:'break-all'}}>
                <ReactMarkdown source={job.how_to_apply}/>
                </div>
                </div>
                <div>
                    <img  className="d-sn-none d-md-block" height="50" alt={job.company} src={job.company_logo}/>

                </div>
                </div>
        
        <Card.Text>
        <Button onClick={()=>setOpen(prevOpen=>!prevOpen)}
        variant="primary"
        >
        {open ? 'Hide Details' :'View Details'}</Button>
        </Card.Text>
        <Collapse in={open}>
            <div className="mt-4">
                <ReactMarkdown source={job.description}/>
            </div>
        </Collapse>   
         
        </Card.Body>
        </Card>
    )
}

