<template>
  <view class="index">
    <view class="page-title">购物车</view>
    <product-card :shop-info="item" v-for="item in shops" />
  </view>
</template>

<script>
import { reactive } from 'vue'
import productCard from '../../components/productCard/productCard'
import productInfos from '../../data/cart.json'
import './cart.scss'

export default {
  components: { productCard },
  setup() {
    const shops = reactive(productInfos)
    shops.forEach(item => {
      item.productList.forEach(j => {
        j.productNum = 1
      })
    })
    return {
      shops
    }
  }
}
</script>