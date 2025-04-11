<template>
    <h2 class="flex-c mb-4">LC-K535  抗泥调节剂</h2>

    <h3 class="mb-2">一、概述</h3>
    <p class="leading-6 indent-8 mb-2">
      本产品主要是利用抗泥调节剂分子结构中多种基团率先吸附在粘土及水泥水化物表面，减少粘土及水泥水化物对减水剂的吸附消耗，
      最大限度的发挥减水剂在混凝土拌合物中的表面活性作用。与此同时，
      抗泥剂分子中还引入了阳离子基团，吸附在粘土颗粒表面，带电荷的颗粒相互靠近时，产生排斥作用，阻止颗粒絮凝团聚。
    </p>
    <h3 class="mb-2">二、技术指标</h3>
    <div class="flex justify-between">
        <table class="mb-2 mr-4">
            <tr><th>含固（%）</th><th>40±1</th></tr>
            <tr><td>减水率（%）</td><td>无</td></tr>
            <tr><td>氯离子含量（%）</td><td>≤0.05</td></tr>
            <tr><td>PH值</td><td>7±1</td></tr>
        </table>
        <div class="flex-c">
            <el-image class="icon mb-2" :src="productImg" alt=""></el-image>
        </div>
    </div>
    <h3 class="mb-2">三、特性</h3>
    <ul class="mb-2 list-decimal">
        <li>抗泥剂同混凝土减水剂（萘磺酸盐或聚羧酸）相容性好。</li>
        <li>既可以单独使用，又可以与减水剂复配在一起使用。</li>
    </ul>

    <h3 class="mb-2">四、注意事项</h3>
    <ol class="leading-6 mb-2 list-decimal">
        <li>储存于阴凉、通风的库房，远离火种、热源。</li>
        <li>包装要求密封。</li>
        <li>与碱类分开存放，不应混储。</li>
        <li>储区应备有泄漏应急处理设备和合适的收容材料。</li>
    </ol>

    <h3 class="mb-2">五、包装规格</h3>
    <p class="leading-6 mb-2">
      该产品使用塑料吨桶包装，保质期为6个月。
    </p>
</template>

<script lang="ts" setup>
    import productImg  from  "~/assets/img/products/LC-K535.jpg"

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
