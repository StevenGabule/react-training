import React from 'react'
import {Button, Card} from "react-bootstrap";
import aqua from '../images/products/image-aqua.png'

class Product extends React.Component {

    handleUpVote = () => {
        this.props.onVote(this.props.id)
    }

    render() {

        return (
            <Card>
                <Card.Body>
                    <Card.Img style={{width: '100px'}} src={aqua} variant={'left'}/>
                    <Card.Link>{this.props.title}</Card.Link>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>{this.props.votes}</Card.Text>
                    <Button type={'button'} onClick={this.handleUpVote}>Vote</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Product;
