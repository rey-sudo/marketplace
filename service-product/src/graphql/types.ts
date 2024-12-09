const typeDefs = `#graphql

type Product {
    id: String!
    state: String!
    state_label: String!
    moderated: Int!
    seller_id: String!
    name: String!
    price: Int!
    collateral: Int!
    sku: String!
    model: String!
    brand: String!
    features: String!
    category: String!
    keywords: String!
    bullet_list: String!
    paused: Int!
    color: String!
    color_name: String!
    quality: String!
    country: String!
    media_url: String!
    image_path: String!
    video_path: String!
    image_set: String!
    video_set: String!
    discount: Boolean!
    discount_value: Int!
    created_at: String!
}


input GetProductsInput {
  cursor: String!
}  

input GetProductInput {
  id: String!
} 
  
type GetProductsResponse {
  products: [Product]
  cursor: String!
  count: Int!
}

type Query {
  getProducts(getProductsInput: GetProductsInput!): GetProductsResponse!
  getProduct(getProductInput: GetProductInput!): Product!
}

#/////////////////////////////////////////////////

type CreateProductResponse {
  success: Boolean!
}

type UpdateProductResponse {
  success: Boolean!
}

type DeleteProductResponse {
  success: Boolean!
}

input CreateProductInput {
  name: String!
  price: Int! 
  collateral: Int!
  sku: String!              
  model: String!
  brand: String!
  features: String!
  category: String!
  keywords: String!
  bullet_list: String!
  paused: Int!
  color: String!
  color_name: String!
  quality: String!
  image_set: String!
  video_set: String!
  discount: Boolean!
  discount_value: Int!
}

input UpdateProductInput {
  name: String!
  price: Int! 
  collateral: Int!
  sku: String!              
  model: String!
  brand: String!
  features: String!
  category: String!
  keywords: String!
  bullet_list: String!
  paused: Int!
  color: String!
  color_name: String!
  quality: String!
  image_set: String!
  video_set: String!
  discount: Boolean!
  discount_value: Int!
  id: String!
}

input DeleteProductInput {
  id: String!
}

type Mutation {
  createProduct(createProductInput: CreateProductInput!): CreateProductResponse!
  updateProduct(updateProductInput: UpdateProductInput!): UpdateProductResponse!
  deleteProduct(deleteProductInput: DeleteProductInput!): DeleteProductResponse!
}

#/////////////////////////////////////////////////

`;


export { typeDefs }