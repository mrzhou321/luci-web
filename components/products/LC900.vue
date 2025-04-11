<template>
    <h2 class="flex-c mb-4">LC900 和易性调节剂</h2>

    <h3 class="mb-2">一、概述</h3>
    <p class="leading-6 indent-8 mb-2">
      本产品为聚羧酸专用和易性调节剂，是一种交联共聚型水溶性高分子聚合 物，区别与传统的保水增粘剂，本产品能够很好的和聚羧酸溶液相容，
      不影响 混凝土的流动度和凝结时间以及强度，
      使得聚羧酸高性能减水剂在使用过程中 出现的泵损大，表观气泡较多，掺量及用水敏感等问题得到有效的解决。
    </p>
    <h3 class="mb-2">二、技术指标</h3>
    <div class="flex justify-between">
        <table class="mb-2 mr-4">
            <tr><th>氯离子含量</th><th>无</th></tr>
            <tr><td>外观</td><td>白色或黄色液体</td></tr>
            <tr><td>比重（g/cm3）</td><td>1.01—1.04</td></tr>
            <tr><td>水溶液PH</td><td>6.5—7.5</td></tr>
        </table>
       <p class="mb-2">使用参数：参考比例为每吨减水剂里面添加 5~20公斤。</p>
        <div class="flex-c">
            <el-image class="icon mb-2" :src="productImg" alt=""></el-image>
        </div>
    </div>
    <h3 class="mb-2">三、注意事项</h3>
    <ol class="leading-6 mb-2">
        <li>
          对于含粉高的机制砂中加入本产品可以有效改善混凝土浆体发粘、浆体下沉的情况，有效的提高了混凝土浆体的稳定性和匀质性。
        </li>
        <li>
          对于含粉较低、颗粒较粗的机制砂，本产品可辅以微沫引气剂复 合使用，可以有效解决混凝土包裹差离析抓底的现象，并且提浆效果显著。
        </li>
    </ol>

    <h3 class="mb-2">四、包装规格及贮运</h3>
  <ol class="leading-6 mb-2">
    <li>本系列产品用 1000 公斤塑料桶包装。</li>
    <li>本系列产品应存放于阴凉干燥处。</li>
    <li>本系列产品有效期 6 个月，到期经检验合格后方可使用。</li>
    <li>本系列产品为绿色、环保、无毒、对环境无污染的产品，不可食用。</li>
  </ol>
</template>

<script lang="ts" setup>
    import productImg  from  "~/assets/img/products/LC900.jpg"

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
    .icon{
        width: 364px;
        height: 274px;
    }
</style>
