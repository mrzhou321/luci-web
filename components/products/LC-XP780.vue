<template>
    <h2 class="flex-c mb-4">LC-XP780 聚醚型消泡剂</h2>

    <h3 class="mb-2">一、概述</h3>
    <p class="leading-6 indent-8 mb-2">
      本产品主要由改性聚醚多元醇，分散剂，乳化剂等组成的高效消泡剂。本品系列有较好的消泡及抑泡性。主要应用于建材，减水剂，砂浆，污水处理，垃圾渗滤液，高温多效蒸发等。
    </p>
    <h3 class="mb-2">二、技术指标</h3>
    <div class="flex justify-between">
        <table class="mb-2 mr-4">
            <tr><th>外观</th><th>透明液体</th></tr>
            <tr><td>阴离子活性物（%）</td><td>≥95</td></tr>
            <tr><td>PH值水溶液（1%水溶液）</td><td>5-8</td></tr>
            <tr><td>溶解性</td><td>溶于水</td></tr>
        </table>
        <div class="flex-c">
            <el-image class="icon mb-2" :src="productImg" alt=""></el-image>
        </div>
    </div>
    <h3 class="mb-2">三、应用领域及范围</h3>
    <ul class="mb-2 list-decimal pl-8">
        <li>可直接加入到起泡体系中, 也可用水稀释后加入体系，需保证其均匀分散。稀释后的乳液建议在短时间内用完以保持其最佳性能。一般稀释后不建议保存超过四小时。</li>
        <li>一般添加范围为减水剂的 0.01～0.1%即可。对于不同的消泡体系，由于使用环境不同，建议事先进行试验，以达到最佳的消泡效果和控制适宜的用量。</li>
    </ul>

    <h3 class="mb-2">四、包装规格与贮运 </h3>
    <ol class="leading-6 mb-2 list-decimal">
        <li>本产品为普通化学品，本产品不易燃、不易爆、不腐蚀、没有毒性。</li>
        <li>全新25kg/ 200kg 塑胶桶包装。</li>
        <li>常温保存（5℃-30℃），避免阳光直射，贮存于阴凉干燥的室内环境中，不得在高温或严寒环境中久置。</li>
        <li>质保期 6 个月。</li>
    </ol>
</template>

<script lang="ts" setup>
    import productImg  from  "~/assets/img/products/EA100.jpg"

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
