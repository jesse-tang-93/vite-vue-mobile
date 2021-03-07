<template>
  <div class="page-view" @click="goLogin">home goLogin</div>
</template>
<script lang="ts" setup="props">
import { useRouter } from "vue-router";
const router = useRouter();
const goLogin = () => {
  router.push("/Login");
};
</script>
<style scoped>
.page-view {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 50px;
  background: #ff3939;
  border-radius: 2px;
  height: 50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
