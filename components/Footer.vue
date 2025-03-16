<template>
    <div class="w-full flex-c flex-col">
      <div class="footer-links h-40 w-full flex-c flex-col">
        <div class="flex justify-between h-16 main-container">
          <div class="flex-c">
            <img src="../assets/img/logo.png" class="size-12 mr-4"/>
            <span class="text-xl font-weight">{{$t('company.name') }}</span>
          </div>
          <div class="flex-c">
            <span>{{$t("footer.service") + "："}}</span>
            <div>{{$t("contact.phone")}}</div>
          </div>
        </div>
        <div class="border-t border-t-gray-300 w-full"></div>
        <div class="flex-c justify-between h-16 main-container h-20 text-xs">
          <div>
            <div class="mb-1">{{$t("company.name")}}</div>
            <div>
              <span>{{$t("contact.dz") + $t("contact.address")}}</span>
            </div>
          </div>
          <div>
            <div class="mb-1">{{$t("contact.lxdh") + $t("contact.phone")}}</div>
            <div>
              <span>{{$t("contact.yx") + $t("contact.email")}}</span>
            </div>
          </div>
          <div>
            <div class="mb-1">{{$t("company.name")}}</div>
            <div>
              <span>{{$t("contact.dz") + $t("contact.address")}}</span>
            </div>
          </div>
          <div>
            <div class="mb-1">{{$t("company.name")}}</div>
            <div>
              <span>{{$t("contact.dz") + $t("contact.address")}}</span>
            </div>
          </div>
          <div>
            <div class="mb-1">{{$t("company.name")}}</div>
            <div>
              <span>{{$t("contact.dz") + $t("contact.address")}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-full flex-c h-12">版权所有 © 2024 合肥庐瓷环保科技有限公司</div>
    </div>
  </template>

  <script lang="ts" setup>
  </script>

  <style scoped>
  footer {
    height: 80px;
    text-align: center;
    padding: 20px 0;
    border-top: 1px solid #ccc;
    background-color: #bbb;
  }
  .footer-links a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
    background-color: #EEE;
  }
  </style>
