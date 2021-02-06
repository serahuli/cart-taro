<template>
  <view class="product-item">
    <radio value="" checked="false" />
    <view class="product-item__img-container">
      <image :src="product.productImg" class="product-item__img" />
    </view>
    <view class="product-item__cxt">
      <view class="product-item__cxt-title">{{ product.productName }}</view>
      <view class="product-item__cxt-desc">{{ product.productDesc }}</view>
      <view class="product-item__cxt-total">
        <view class="product-item__cxt-price">￥{{ product.productPrice }}</view>
        <view class="product-item__cxt-num-container">
          <view class="product-item__cxt-num-container-dec product-item__cxt-num-container-action" @click="changeNum('des')">-</view>
          <view class="product-item__cxt-num-container-num">{{ product.productNum }}</view>
          <view class="product-item__cxt-num-container-ins product-item__cxt-num-container-action"  @click="changeNum('ins')">+</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { reactive } from 'vue'
import './productItem.scss'
export default {
  name: 'ProductItem',
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  setup(props, { emit }) {
    const pro = reactive(props.product)
    const changeNum = (type) => {
      if(type === 'ins') {
        pro.productNum++
      } else {
        (pro.productNum) > 1 && pro.productNum--
      }
      const parameter = {
        productNum: pro.productNum,
        productId: pro.productId
      }
      emit('changeNum', parameter)
    }

    return { changeNum }
  }
}
</script>