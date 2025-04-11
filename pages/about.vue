<template>
    <div>
      <Header></Header>
      <div class="middle flex-c flex-col bg-white relative">
        <el-image :src="HeaderImg" style="width: 100%;height:400px;" alt=""></el-image>
        <div class="flex about container mt-10">
          <el-image class="bg" :src="BgImg" alt=""></el-image>
          <div class="flex-1  ml-4">
            <h2>
                 &nbsp;&nbsp;&nbsp;&nbsp;合肥卢瓷环保科技有限公司专业从事化工产品的生产、销售和服务贸易。主要经营的品种有混凝土用功能性助剂（功能性单体、和易性调节剂、降粘母液、微沫型引气剂、消泡剂）和
              砂浆外加剂（粉体减水剂、石膏分散剂、粉体消泡剂、石膏缓凝剂等）。公司和诸多优秀的减水剂厂家建立了优良的合作关系，拥有比较稳定的供货网络，保供能力强，产品质量可靠，
              致力于为国内化工应用客户提供优质化工产品。
            </h2>
            <h2>
              &nbsp;&nbsp;&nbsp;&nbsp;公司秉承"无信则不立"的宗旨，竭诚为客户服务 。如果您还不是我们的顾客，但是，您愿意接受我们的产品和服务，我们一定能够向您提供行业优惠的产品
              和专业服务。对既有客户，同样会一如既往保证产品质量和利益。
            </h2>
            <h2>
              &nbsp;&nbsp;&nbsp;&nbsp;我们公司靠品质生存，用品质赢得市场，先进的技术支持以及快捷细腻的服务赢得您的信任，热诚希望与各界携手合作，共同发展 ，共同繁荣。
            </h2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </template>

<script lang="ts" setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import HeaderImg from '~/assets/img/home_01.jpg'
  import BgImg from "~/assets/img/bg.jpeg";
</script>

<style lang="scss" scoped>
  .container{
    width: 1200px;
  }
  .about{
    .bg{
      width: 275px;
      height: 275px;
    }
  }

</style>
