<template>
    <h2 class="flex-c mb-4">H200 还原剂</h2>

    <h3 class="mb-2">一、概述</h3>
    <p class="leading-6 indent-8 mb-2">
      在减水剂合成中氧化-还原催化体系是由组成他的氧化剂和还原剂之间发
      生氧化还原反应而产生能引发的自由基，该类的引发剂特点是活化能较低，可
      以在较低温下引发聚合，而有较快的聚合速率。该还原剂是一种不含甲醛的硫
      基还原剂，能够满足减水剂合成的严格监管要求，建议的PH 范围为4-8，主聚
      合和后聚合的有效温度低至20 度。
    </p>
    <h3 class="mb-2">二、技术指标</h3>
    <div class="flex justify-between">
        <table class="mb-2 mr-4">
            <tr><th>有效成分</th><th>≥98</th></tr>
            <tr><td>外观</td><td>白色粉</td></tr>
            <tr><td>溶状</td><td>溶于水澄清</td></tr>
            <tr><td>气味</td><td>无气味</td></tr>
        </table>
        <div class="flex-c">
            <el-image class="icon mb-2" :src="productImg" alt=""></el-image>
        </div>
    </div>
    <h3 class="mb-2">三、特性</h3>
    <ul class="mb-2 list-decimal">
      <li>适应于市面上主流C4、C5、C6 等单体，尤其是C6 的低温聚合。</li>
      <li>尤其适合保坍母液和C6 母液合成。</li>
      <li>较高的单体转化率、稳定的分子量。</li>
      <li>该溶液为碱性，不能与酸性溶液配制。</li>
    </ul>

    <h3 class="mb-2">四、注意事项</h3>
    <ol class="leading-6 mb-2 list-decimal">
        <li>本产品不可食用，当接触到人的身体和眼睛时，应尽快用清水冲洗， 对部分人体造成过敏现象时应及时就医治疗。</li>
        <li>本品应存储于阴凉干燥环境中，避免雨淋漏水及杂物混入。</li>
    </ol>

    <h3 class="mb-2">五、包装规格</h3>
  <ol class="leading-6 mb-2">
    <li>20 k 纸箱包装，也可根据实际情况定制。</li>
    <li>本产品储存稳定性可保持12 个月，如超过存储期，经试验人员检验后，产品无变质现象，仍可继续使用。</li>
  </ol>
</template>

<script lang="ts" setup>
    import productImg  from  "~/assets/img/products/H200.jpg"

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
    ol,ul{
      padding-left: 40px;
      li {
        margin-bottom: 8px;
      }
    }
</style>
