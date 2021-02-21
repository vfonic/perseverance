import * as S from './styles'

const products = [{
  title: 'Winter Jacket',
  price: '$99.99',
  imageSrc: 'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369'
}, {
  title: 'Winter Jacket',
  price: '$99.99',
  imageSrc: 'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369'
}, {
  title: 'Winter Jacket',
  price: '$99.99',
  imageSrc: 'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369'
}, {
  title: 'Winter Jacket',
  price: '$99.99',
  imageSrc: 'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369'
}, {
  title: 'Winter Jacket',
  price: '$99.99',
  imageSrc: 'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369'
}, {
  title: 'Winter Jacket',
  price: '$99.99',
  imageSrc: 'https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369'
}]

export const ProductsGrid = () => (
  <S.Products>
    {products.map(product => <ProductGridItem product={product} />)}
  </S.Products>
)

const ProductGridItem = ({ product }: { product: any }) => (
  <S.ProductGridItem>
    <S.ProductImg alt={product.title}
                  src={product.imageSrc} />
    <S.ProductInfo>
      <h3>{product.title}</h3>
      <div>{product.price}</div>
    </S.ProductInfo>
  </S.ProductGridItem>
)
