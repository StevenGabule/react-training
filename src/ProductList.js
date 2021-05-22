import React from "react";
import {Container, Jumbotron} from "react-bootstrap";
import Product from "./components/Product";

class ProductList extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        // eslint-disable-next-line no-undef
        this.setState({products: Seed.products})
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        });
        this.setState({
            products: nextProducts
        })
    }

    render() {
        const products = this.state.products.sort((a, b) => (
            b.votes - a.votes
        ));
        const productComponents = products.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ))
        return (
            <Container fluid={'md'}>
                <Jumbotron>
                    <h3 className={'text-center mt-5 border-bottom pb-3'}>Popular Products</h3>
                </Jumbotron>
                {productComponents}
            </Container>
        )
    }
}

export default ProductList;
