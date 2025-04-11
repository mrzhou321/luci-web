<template>
    <h2 class="flex-c mb-4">憎水剂 </h2>
    <h3 class="mb-2">一、概述</h3>
    <p class="leading-6 indent-8 mb-2">
      憎水剂为无机盐改性的有机硅烷粉末，是一种用于提高水泥基材料耐水性、抗 渗性的添加剂。
      憎水剂可以防止液态水通过材料表面或毛细管渗透进入材料内部，能大幅度 的降低材料的吸水率，保护材料表面不被水分渗透、侵蚀；
      产品的抗渗效果和掺量有关，在其推荐掺量范围内对材料抗压强度几乎不会有不良影响。本产品适用碱性环境。
    </p>
    <h3 class="mb-2">二、技术指标</h3>
    <div class="flex justify-between">
        <table class="mb-2 mr-4">
            <tr><th>外观</th><th>白色粉末</th></tr>
            <tr><td>密度（g/L）</td><td>200—400</td></tr>
            <tr><td>PH值（1%水溶液）</td><td>7.0—9.0</td></tr>
            <tr><td>细度（200 目筛筛余），% </td><td>≤2.0</td></tr>
            <tr><td>浸水 2h 吸水率，%  </td><td>1.84</td></tr>
            <tr><td>浸水 24h 吸水率，% </td><td>3.09</td></tr>
        </table>
        <div class="flex-c">
            <el-image class="icon mb-2" :src="productImg" alt=""></el-image>
        </div>
    </div>
    <h3 class="mb-2">三、用量范围</h3>
    <p class="leading-6 mb-2">
      本产品在各类体系中推荐掺量为体系的 1~5‰，若对表面憎水状态要求高，可提高掺量， 最佳掺量需经试验后确定。
    </p>

    <h3 class="mb-2">四、应用领域</h3>
    <ol class="leading-6 mb-2 list-decimal">
      <li>防水砂浆、填缝剂、石膏预制板、粉刷石膏、装饰砂浆。</li>
      <li>耐水腻子、瓷砖粘结剂、抗渗防水水泥基砂浆。</li>>
    </ol>
    <h3 class="mb-2">五、包装与贮运</h3>
    <ol class="leading-6 mb-2 list-decimal">
      <li>本产品为普通化学产品，纸袋包装，20kg/袋；</li>
      <li>对储存温度不易过高，建议储存环境温度为10~25℃；</li>
      <li>密封存储，防止受潮受压，建议存放于阴凉干燥处，有效期为6个月。</li>
    </ol>
</template>

<script lang="ts" setup>
    import productImg  from  "~/assets/img/products/ZSJ.jpg"

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
