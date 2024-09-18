import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import CreateAnnouncementForm from './CreateAnnouncementForm'
import AnnouncementCard from './AnnouncementCard'

export default function CreateAnnouncement() {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>
                                Create Announcement
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <CreateAnnouncementForm />
                            </Row>
                            <Row>
                                <p>Notice</p>
                                <AnnouncementCard />
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}