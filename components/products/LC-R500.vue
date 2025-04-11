<template>
    <h2 class="flex-c mb-4">LC-R500  降粘母液</h2>

    <h3 class="mb-2">一、概述</h3>
    <p class="leading-6 indent-8 mb-2">
      降粘母液为聚羧酸醚类聚合物，针对于长距离泵送要求的松软、低粘的混凝土而设计的。降粘母液用其配制的混凝土和易性非常优异，混凝土柔软不板结、裹浆性能好。
      因此，用于粘度偏高的混凝土中时能够降低混凝土的粘度。对于配置高标号混凝土，建议与高减水母液（如台界高减水母液）复配使用，
      降粘效果更为明显。同时，该款母液还具有降低外加剂对混凝土地材的敏感性，增强外加剂在混凝土中的适应性。
    </p>
    <h3 class="mb-2">二、技术指标</h3>
    <div class="flex justify-between">
        <table class="mb-2 mr-4">
            <tr><th>含固（%）</th><th>40±1</th></tr>
            <tr><td>减水率（%）</td><td>≥25</td></tr>
            <tr><td>氯离子含量（%）</td><td>0.05</td></tr>
            <tr><td>PH值</td><td>7±1</td></tr>
        </table>
        <div class="flex-c">
            <el-image class="icon mb-2" :src="productImg" alt=""></el-image>
        </div>
    </div>
    <h3 class="mb-2">三、特性</h3>
    <ul class="mb-2">
        <li>降低外加剂对混凝土地材的敏感性。</li>
        <li>混凝土柔软不板结、裹浆性能好。</li>
    </ul>

    <h3 class="mb-2">四、注意事项</h3>
    <ol class="leading-6 mb-2">
        <li>
          该母液可与各种减水、保坍母液任意比例搭配，减水率约为减水型母液的70%。
        </li>
        <li>储存于阴凉、通风的库房。远离火种、热源。</li>
        <li>包装要求密封。</li>
        <li>储区应备有泄漏应急处理设备和合适的收容材料。</li>
    </ol>

    <h3 class="mb-2">五、包装规格</h3>
    <p class="leading-6 mb-2">
      该产品使用1000公斤塑料桶包装，保质期为6个月。
    </p>
</template>

<script lang="ts" setup>
    import productImg  from  "~/assets/img/products/LC-R500.jpg"

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
