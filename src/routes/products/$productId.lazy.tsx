import { createLazyFileRoute } from '@tanstack/react-router'
import SEOMetadata from '../../components/seo/SEOMetadata'
import { getMetadata } from '../../utils/utils'

export const Route = createLazyFileRoute('/products/$productId')({
  component: ProductPage,
})

function ProductPage() {
  const { productId } = Route.useParams()
  return (
    <>
      <SEOMetadata {...{ ...getMetadata('products'), title: `${productId}` }} />
      <div>{`Hello From "/products/${productId}"!`}</div>
    </>
  )
}
