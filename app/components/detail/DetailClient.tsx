"use client"

import Image from "next/image"
import PageContainer from "../containers/PageContainer"
import Counter from "../general/Counter"
import { useState } from "react"
import { Button, Rating } from "@mui/material"
import Comment from "./Comment"
import Heading from "../general/Heading"


export type CardProductProps ={
  id:   string
  name: string
  description: string
  price:  number
  quantity: number
  image : string
  inStock : boolean

}

const DetailClient = ({product}:{product:any}) => {

  const [cardProduct, setCardProduct] = useState <CardProductProps>({
    id:   product.id,
    name: product.name,
    description: product.description,
    price:  product.price,
    quantity: 1,
    image : product.image,
    inStock :product.inStock,
  })
 const increaseFunc = ()  =>  {
  if(cardProduct.quantity==10) return
 setCardProduct(prev =>({...prev, quantity:prev.quantity + 1}))
 }
 const decreaseFunc = ()  =>  { 
  if(cardProduct.quantity==1) return
  setCardProduct(prev =>({...prev, quantity:prev.quantity - 1}))
 }

 let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length

  return (
    <div className="my-10">
     <PageContainer>
    <div className="block md:flex gap-10 justify-center">
      <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-3 md:mb-0">
      <Image src={product?.image} fill alt=""/>
      </div>
      <div className="w-full md:w-1/2 space-y-3">
      <div className="text-xl md:text-2xl">{product.name}</div>
      <Rating name="read-only" value={productRating} readOnly />
      <div className="text-slate-500">{product.description}</div>
      <div className="flex items-center gap-200">
        <div>STOK DURUMU:</div>
        {
          product.inStock ? <div className="text-green-500">Ürün Stokta Mevcut</div> : <div className="text-red-500">Ürün Stokta Bulunmamakta</div>
        }
      </div>
      <div>
        <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardProduct={cardProduct}/>
        <div className="text-lg md:text-2xl text-orange-600 font-bold">{product.price} ₺</div>
        <Button onClick={() => {}}>
  Sepete Ekle
</Button>

      </div>
      </div> 
    </div>
    <Heading text="Yorumlar"/>
    <div>
      {
        product?.reviews.map((prd:any) =>(
        <Comment key={prd.id} prd={prd}/>
        ))
      }
    </div>
     </PageContainer>
    </div>
  )
}

export default DetailClient
