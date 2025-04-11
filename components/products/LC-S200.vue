<template>
    <h2 class="flex-c mb-4">石膏缓凝剂LC-S200</h2>
    <h3 class="mb-2">一、概述</h3>
    <p class="leading-6 indent-8 mb-2">
      LC-S200是一种改性氨基酸类粉状高效石膏缓凝剂。
    </p>
    <h3 class="mb-2">二、技术指标</h3>
    <div class="flex justify-between">
        <table class="mb-2 mr-4">
            <tr><th>有效成分</th><th>改性氨基酸</th></tr>
            <tr><td>外观</td><td>灰白色</td></tr>
            <tr><td>含水率</td><td>≤3</td></tr>
            <tr><td>堆积密度</td><td>700±100</td></tr>
        </table>
        <div class="flex-c">
            <el-image class="icon mb-2" :src="productImg" alt=""></el-image>
        </div>
    </div>
    <h3 class="mb-2">三、性能优点</h3>
    <ol class="leading-6 mb-2 list-decimal">
      <li>缓凝效果好，添加量低；</li>
      <li>石膏凝结时间随着掺量增加呈直线增长，生产过程易控制；</li>
      <li>兼容多种石膏和其它添加剂；</li>
      <li>没有减少石膏制品的后期强度。</li>
    </ol>

    <h3 class="mb-2">四、应用领域</h3>
    <ol class="leading-6 mb-2 list-decimal">
      <li>石膏基自流平砂浆、石膏板、隔墙板、天花板、石膏砌块制作时的添加剂。</li>
      <li>干粉石膏基产品如嵌缝石膏及粉刷石膏等的添加剂，能有效延长上述产品的凝固时间。</li>>
    </ol>
    <h3 class="mb-2">五、用量范围</h3>
    <ol class="leading-6 mb-2 list-decimal">
      <li>石膏板的生产：按0.005%-0.02%的重量。</li>
      <li>嵌缝石膏及粉刷石膏：按0.01%-0.06%的总干混重量，缓凝时间可达到70-90min，随添加量增大，缓凝时间大幅延长。</li>
      <li>石膏自流平的生产：按0.03%—0.1%的重量。</li>
    </ol>
    <h3 class="mb-2">六、包装与贮运</h3>
  <ol class="leading-6 mb-2 list-decimal">
    <li>本系列产品可根据用户要求使用25kg编织袋装，也可根据实际情况定制。</li>
    <li>本系列产品应存放于阴凉干燥处。</li>
    <li>3、本系列产品有效期两年，到期经检验合格后方可使用。</li>
    <li>本系列产品为绿色、环保、无毒、对环境无污染的产品，不可食用。</li>
  </ol>
</template>

<script lang="ts" setup>
    import productImg  from  "~/assets/img/products/LC-S200.jpg"

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
