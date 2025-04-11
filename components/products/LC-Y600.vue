<template>
    <h2 class="flex-c mb-4">LC-Y600 液体引气剂</h2>

    <h3 class="mb-2">一、概述</h3>
    <p class="leading-6 indent-8 mb-2">
      本产品用于配制各种混凝土早强型、标准型、缓凝高性能减水剂及高效减水剂、
      泵送剂。该产品气泡微小、稳泡性能好、掺量小、减水率高，对混凝土强度影
      响小，混凝土坍落度经时损失小，性价比明显高于同类进口产品。
    </p>
    <h3 class="mb-2">二、技术指标</h3>
    <div class="flex justify-between">
        <table class="mb-2 mr-4">
            <tr><th>减水率</th><th>≥7%</th></tr>
            <tr><td>含气量</td><td>≥4%</td></tr>
            <tr><td>坍落度增加值</td><td>≥9cm</td></tr>
            <tr><td>稳泡时间</td><td>≥2 小时</td></tr>
        </table>
        <div class="flex-c">
            <el-image class="icon mb-2" :src="productImg" alt=""></el-image>
        </div>
    </div>
    <h3 class="mb-2">三、特性</h3>
    <ul class="mb-2 list-decimal">
      <li>减水率高，一般可达到 8-10%，高于国内大部分引气剂产品。</li>
      <li>对混凝土强度影响小，3 天 7 天 28 天抗压强度仍有提高。</li>
      <li>适应性好，除用于聚羧酸复配外，萘系脂肪族等复配均有较好效果。</li>
    </ul>
    <h3 class="mb-2">四、应用领域及范围</h3>
    <ul class="mb-2 list-decimal pl-8">
        <li>
          该产品因掺量极低，一般与其它外加剂复合使用，在工程项目上可以单掺
          （减水母液一般用量 20-30 公斤,引气剂 5-25 公斤，即可达到铁路、水利引
          气剂相关标准）。
        </li>
        <li>
          一般添加范围为减水剂的 0.01～0.1%即可。对于不同的消泡体系，由于使用环境不同，建议事先进行试验，以达到最佳的消泡效果和控制适宜的用量。
        </li>
        <li>
          该产品虽然水泥适应性好，但用于矿渣水泥、粉煤灰水泥或与粉煤灰同掺应增大掺用量。
        </li>
        <li>
          与其它外加剂复合使用时，应用混凝土检测其技术性能，因为净浆流动检测不适用于有一定引气量的外加剂。
        </li>
    </ul>

    <h3 class="mb-2">五、包装规格与贮运 </h3>
    <ol class="leading-6 mb-2 list-decimal">
        <li>本系列产品为 200 公斤/1000 公斤塑料桶包装。</li>
        <li>本系列产品应存放于阴凉干燥处。</li>
        <li>本系列产品有效期一年，到期经检验合格后方可使用。 </li>
        <li>本系列产品为绿色、环保、无毒、对环境无污染的产品，不可食用。</li>
    </ol>
</template>

<script lang="ts" setup>
    import productImg  from  "~/assets/img/products/LC-Y600.jpg"

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
