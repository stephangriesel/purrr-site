import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Product from '../components/product';

const PRODUCTS_QUERY = graphql`
    query AllProducts {
            allStripeSku {
              edges {
                node {
                  product {
                    name
                    id
                  }
                  id
                  attributes {
                    name
                  }
                  price
                  image
                }
              }
            } 
            allStripeProduct {
              edges {
                node {
                  name
                  id
                }
              }
            }
    }
`;

const Products = () => {
  return (<StaticQuery
    query={PRODUCTS_QUERY}
    render={
      ({ allStripeSku, allStripeProduct }) => {

        return allStripeProduct.edges.map(product => {
          const skus = allStripeSku.edges.filter(
            sku => sku.node.product.id === product.node.id
          )
          console.log(skus);
          const images = skus.filter(
            sku => sku.node.image
          )
          const image = images.length > 0 ? images[0].node.image : "";
          console.log(image);
          return (
            <Product
              key={product.node.id}
              skus={skus}
              product={product.node}
              image={image}
            />
          )
        })
        return
      }
    }
  />)
}

export default Products;
