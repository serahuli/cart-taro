<template>
  <view class="product-card">
    <view class="product-card__title">
      <radio value="" checked="false" /> {{ shopInfo.shopName }}
    </view>
    <product-item :product="item" v-for="item in shopInfo.productList" @changeNum="changeNum" />
    
  </view>  
  
</template>

<script>
import './productCard.scss'
import ProductItem from '../productItem/productItem'
export default {
  name: 'ProductCard',
  props: {
    shopInfo: {
      required: true,
      type: Object
    }
  },
  components: { ProductItem },
  setup() {
    const changeNum = params => {
      console.log(params)
    }
    return {
      changeNum
    }
  }
}
</script>
