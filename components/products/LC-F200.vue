<template>
    <h2 class="flex-c mb-4">聚羧酸高性能减水剂粉剂 LC-F200 </h2>
    <h3 class="mb-2">一、概述</h3>
    <p class="leading-6 indent-8 mb-2">
      LC-F200是一种由多种高分子化合物聚合而成的链状结构共聚物，经特殊喷雾干燥工艺制备成的粉体分散剂，为白色或淡黄色粉末，
      与各种水泥基、石膏基胶凝材料都有良好的适应性，尤其适用高流动要求的水泥基石膏基材料及其制品，赋予材料体系优异的施工性能。
    </p>
    <h3 class="mb-2">二、技术指标</h3>
    <div class="flex justify-between">
        <table class="mb-2 mr-4">
            <tr><th>有效成分</th><th>羧酸共聚物</th></tr>
            <tr><td>外观</td><td>白色或淡黄色</td></tr>
            <tr><td>堆积密度</td><td>500-700kg/m³</td></tr>
            <tr><td>PH值</td><td>7-10</td></tr>
            <tr><td>氯离子含量</td><td>≤0.01</td></tr>
            <tr><td>含水率</td><td>≤5%</td></tr>
        </table>
        <div class="flex-c">
            <el-image class="icon mb-2" :src="productImg" alt=""></el-image>
        </div>
    </div>
    <h3 class="mb-2">三、特性</h3>
    <ol class="leading-6 mb-2 list-decimal">
      <li>能够快速吸附，减少拌合时间，赋予材料体系优异的工作性能、流动性能；有效提高体系的密实度和强度；</li>
      <li>与各种水泥基、石膏基胶凝材料都有良好的适应性；</li>
      <li>改善收缩和徐变性能，减少裂缝，提高耐久性；</li>
      <li>性能稳定且具有广泛的配方适应性；</li>
      <li>无有害物质，属于绿色环保型产品；</li>
    </ol>

    <h3 class="mb-2">四、应用领域</h3>
    <ol class="leading-6 mb-2 list-decimal">
      <li>水泥基、石膏基自流平砂浆以及地面、底层找平砂浆。</li>
      <li>灌浆料、套筒灌浆料、无收缩灌浆料、压浆料及修补砂浆等。</li>>
    </ol>
    <h3 class="mb-2">五、用量范围</h3>
    <p class="leading-6 mb-2">
      推荐掺量为胶凝材料总量的0.08-0.5%,最佳掺量需根据不同的产品及实际情况进行调试确定。
    </p>
    <h3 class="mb-2">六、包装与贮运</h3>
  <ol class="leading-6 mb-2 list-decimal">
    <li>本系列产品可根据用户要求使用25kg编织袋装，也可根据实际情况定制。</li>
    <li>本系列产品应存放于阴凉干燥处。</li>
    <li>本系列产品有效期一年，到期经检验合格后方可使用。</li>
    <li>本系列产品为绿色、环保、无毒、对环境无污染的产品，不可食用。。</li>
  </ol>
</template>

<script lang="ts" setup>
    import productImg  from  "~/assets/img/products/LC-F200.jpg"

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
