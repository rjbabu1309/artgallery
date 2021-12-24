import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NoPage() {
    return (
        <Card className="text-center">
            <Card.Header>Ohhh! I am sorry!</Card.Header>
            <Card.Body>
                <Card.Title>404 Not Found</Card.Title>
                <Card.Text>
                    This page is not found or something went wrong.
                </Card.Text>
                <Link to='/'>Go to home.</Link>
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
    )
}
