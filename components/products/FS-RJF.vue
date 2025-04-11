<template>
    <h2 class="flex-c mb-4">可再分散乳胶粉</h2>
    <h3 class="mb-2">一、概述</h3>
    <p class="leading-6 indent-8 mb-2">
      可再分散乳胶粉是醋酸乙烯/乙烯基可再分散共聚乳胶粉，本品具有优异的抗皂化性能。特别适用于与其他无机粘合剂如水泥、石灰以及石膏混合使用或者单独作为粘结成分，
      用于制造高粘接力瓷砖胶黏剂、高韧性墙面与地面找平材料、填缝剂、修补砂浆等。含有细的矿物质抗结块剂，不含有任何溶剂、增塑剂与成膜助剂。
      能够提高改性混合料的粘合性、抗折强度、可塑性、耐磨性及施工性，并且对材料的流动性、 触变性以及保水性等没有任何不利影响。
    </p>
    <h3 class="mb-2">二、技术指标</h3>
    <div class="flex justify-between">
        <table class="mb-2 mr-4">
            <tr><th> 固含量（130℃，30min）</th><th>99±1%</th></tr>
            <tr><td>灰分（1000℃，10min）</td><td>12±2%</td></tr>
            <tr><td>堆积密度</td><td>560±50g/L</td></tr>
            <tr><td>主要颗粒尺寸</td><td> 0.05—0.3mm</td></tr>
            <tr><td>最低成膜温度</td><td>0℃</td></tr>
            <tr><td>玻璃化温度</td><td>16℃</td></tr>
        </table>
        <div class="flex-c">
            <el-image class="icon mb-2" :src="productImg" alt=""></el-image>
        </div>
    </div>
    <h3 class="mb-2">三、适用范围</h3>
    <ol class="leading-6 mb-2 list-decimal">
      <li>瓷砖与建筑用粘合剂，用于制造具有良好抗冻性、耐热性、高粘结力瓷砖粘合剂，建议掺量为砂浆总量的 1.5~3%。</li>
      <li>用于外墙保温饰面系统(EIFS)的粘结砂浆，在外墙保温系统中建议掺量为砂浆总量的 1.5~3%，可提高其粘合性、耐久性。</li>
      <li>自流平地坪/ 地坪材料，在自流平地坪材料中建议掺量为砂浆总量的 1.0~5%；要获得快速凝结的体系，则需将硅 酸盐水泥、高铝水泥和石膏一起使用。通常，还需要加入一定的消泡剂。 </li>
      <li>抹灰与饰面砂浆，在水泥或石灰-水泥基的饰面抹灰中建议掺量为砂浆总量的 2~5%，可提高其粘合性、耐 磨性和柔韧性。 </li>
      <li>内外墙批荡料、腻子和填缝剂，根据不同的强度要求，建议掺量为砂浆总量的 2~3%，以及其他的有机添加剂如纤维素 醚类/淀粉醚类等有机添加剂。</li>
    </ol>
    <h3 class="mb-2">四、包装与贮运</h3>
  <ol class="leading-6 mb-2 list-decimal">
    <li>本品纸袋包装，25kg/包；</li>
    <li>本品对温度不敏感，但建议储存环境温度为 10~30℃；</li>
    <li>密封存储，防止受潮受压，存放时间不宜超过 12 个月。</li>
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
