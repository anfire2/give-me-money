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

**2023.04.19**

*V 0.9.7*

- 更名为Eccom Money
- 去除【注】部分的内容，去除左上角的版本和更新提示，标题移动至右下角
- 优化了一下边距排版
- 更新相关依赖至最新


**2022.06.28**

*V 0.9.6*

- 发票金额输入框支持单独清空
- 经人肉测试报销发票金额超过费用额度时也会被退回，因此报销方式不再对“额度券”和“费用额度”进行区分建议

**2022.05.27**

*V 0.9.5.fix*

- 修复计算说明的内容写反了的问题


**2022.05.16**

*V 0.9.5*

- 优化计算方式的描述，增加计算说明


**2021.12.14**

*V 0.9.4*

- 暴力解决三位以内小数运算精度问题（能用就行）
- 二维码文件使用webp格式，略微调整显示大小


**2021.12.10**

*V 0.9.3*

- 右下增加反(bai)馈(piao)渠道


**2021.12.07**

*V 0.9.2*

- 优化控制台输出，优化输出无结果时的显示

*V 0.9.1*

- 修复未完全筛掉相同输出结果的问题，增加对输入负数校验处理
- 调整输出界面换行，微调标题样式
- 增加计算“不低于”目标额度的功能


**2021.12.06** 

*V 0.9.丐*

- 修复输入不支持小数的问题，修复重复计算导致输出相同结果的问题，略微增强对输入数字的校验
- 调整输入界面至三列，微调标题样式
- 除控制台外，增加界面右侧输出显示
