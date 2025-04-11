<template>
    <h2 class="flex-c mb-4">固体消泡粉 LC-X720</h2>

    <h3 class="mb-2">一、概述</h3>
    <p class="leading-6 indent-8 mb-2">
      本品系以特种聚醚酯为主要原料，配合多种活性助剂精制而成。
    </p>

    <h3 class="mb-2">二、性能指标</h3>
  <div class="flex justify-between">
    <table class="mb-2">
      <tr><th>堆积密度</th><th>700-900kg/m³</th></tr>
      <tr><td>PH 值</td><td>6-8</td></tr>
      <tr><td>外观</td><td>白色粉末状晶体</td></tr>
      <tr><td>使用温度</td><td>5-100 摄氏度</td></tr>
    </table>
    <div class="flex-c">
      <el-image class="icon mb-2" :src="productImg" alt=""></el-image>
    </div>
  </div>
    <h3 class="mb-2">三、特性</h3>
   <p class="leading-6 indent-8 mb-2">
    本品主要特点为：用量少、消泡力度强、抑泡持久、水溶性好、干燥度好、
    耐强酸强碱性高。是一种高效粉体消泡剂，使用成本低、耐高电解质、耐高剪切、
    可消除多种体系含水性体系的泡沫。本品为可以跟水泥砂浆等混合的干粉，可增
    加体系强度。适用于各种干粉砂浆（灌浆料、压浆料、仿木灌浆料、砂浆柱、自
    流平水泥、石膏基）、粉状涂料、水泥砂浆、石棉瓦体系、硅酸钙板、胶粉、HPMC
    纤维素等多种体系。
   </p>
  <h3 class="mb-2">四、应用领域</h3>
  <p class="leading-6 indent-8 mb-2">
    适用于各种干粉砂浆（灌浆料、压浆料、仿木灌浆料、砂浆柱、自流平水泥、
    石膏基）、粉状涂料、水泥砂浆、石棉瓦体系、硅酸钙板、胶粉、HPMC 纤维素等多种体系。
  </p>
    <h3 class="mb-2">五、用量范围</h3>
  <p class="leading-6 indent-8 mb-2">
    在现场直接使用时，可将本品直接撒入泡沫表面消泡，也可用水化开后洒向
    泡沫表面，也可和其它粉状助剂均匀混合后用，一般添加量为 0.02—0.3℅，具
    体用量请根据现场实际效果适当调整。
  </p>
    <h3 class="mb-2">六、包装与贮运</h3>
  <ol class="leading-6 mb-2">
    <li>本系列产品可根据用户要求使用 25kg 编织袋装，也可根据实际情况定制。 </li>
    <li>本系列产品应存放于阴凉干燥处。 </li>
    <li>本产品有效期1年，到期经检验合格后方可使用。</li>
    <li>本系列产品为绿色、环保、无毒、对环境无污染的产品，不可食用。</li>
  </ol>
</template>

<script setup>
 import productImg  from  "~/assets/img/products/LC-X720.jpg"
</script>

<style lang="scss" scoped>
    h1, h2 {
        color: #2a5d84;
    }
    table {
        border-collapse: collapse;
        width: 60%;
        margin-bottom: 2em;
    }
    table, th, td {
        border: 1px solid #ccc;
    }
    th, td {
        padding: 0.5em;
        text-align: left;
    }
</style>
