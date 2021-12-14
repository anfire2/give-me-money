# E票M

```sh
npm install -g yarn
# 安装依赖包
yarn
# 启动
yarn start
# 打包
yarn build
# 发布
yarn deploy
```

### Updates

**2021.12.06** 

*V 0.9.丐*

- 修复输入不支持小数的问题，修复重复计算导致输出相同结果的问题，略微增强对输入数字的校验
- 调整输入界面至三列，微调标题样式
- 除控制台外，增加界面右侧输出显示

**2021.12.07**

*V 0.9.1*

- 修复未完全筛掉相同输出结果的问题，增加对输入负数校验处理
- 调整输出界面换行，微调标题样式
- 增加计算“不低于”目标额度的功能

*V 0.9.2*

- 优化控制台输出，优化输出无结果时的显示

**2021.12.10**

*V 0.9.3*

- 右下增加反(bai)馈(piao)渠道

**2021.12.14**

*V 0.9.4*

- 暴力解决三位以内小数运算精度问题
- 二维码文件使用webp格式，略微调整显示大小