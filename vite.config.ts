import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:"./",// 打包路径
  resolve: {
    alias:{
      '@': path.resolve(__dirname, './src')//设置别名
    }
  },
  server: {
    port: 3000, // 启动端口
    open: true,
    proxy: {
      // 选项写法
      '/api': 'http://:80'//代理网址
    },
    cors:true
  }
})
