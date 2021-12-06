import { useCallback, useState } from 'react';
import { calculateResult } from './util';
import { Button, Form, Input, Tooltip, Typography } from 'antd';

const { Title, Text } = Typography;

const Home = () => {

  const [inputListForPrint, setInputListForPrint] = useState([]);
  const [targetValueForPrint, setTargetValueForPrint] = useState(0);
  const [resultListForPrint, setResultListForPrint] = useState([]);


  const calculator = useCallback((inputList, targetValue) => {
    return calculateResult(inputList, targetValue);
  }, []);

  const submit = (values) => {
    const { targetValue, ...restInput } = values;
    const inputList = Object.values(restInput).filter(v => !!v).map(k => parseFloat(k));

    if (inputList.length) {
      const resultList = calculator(inputList, targetValue);

      console.log('发票金额：' + inputList);
      console.log('目标额度：' + targetValue + '元');

      resultList.forEach(v => {
        console.log('最接近目标值的组合为 ' + JSON.stringify(v.list) + ' ,合计' + v.total + '元');
      });

      setInputListForPrint(inputList);
      setTargetValueForPrint(targetValue);
      setResultListForPrint(resultList);
    }else{
      setInputListForPrint([]);
      setTargetValueForPrint(0);
      setResultListForPrint([]);
    }
  };

  const initForm = () => {
    const formList = [];
    for (let i = 0; i < 21; i += 1) {
      formList.push(
        <Form.Item
          name={'value_' + i}
          style={{ display: 'inline-block', width: '33%' }}
        >
          <Input />
        </Form.Item>
      );
    }
    return formList;
  };

  return (
    <>
      <Text
        style={{ margin: 10 }}
      >
        <Tooltip title="1206更新：1.修复输入不支持小数的问题，修复重复计算导致输出相同结果的问题，略微增强对输入数字的校验；2.调整输入界面至三列，微调标题样式；3.除控制台外，增加界面右侧输出显示">
          发票助手-不高于（交通费）V 0.9.丐
        </Tooltip>
      </Text>
      <div style={{ display: 'flex' }}>
        <Form
          name="basic"
          wrapperCol={{
            span: 18,
          }}
          onFinish={submit}
          autoComplete="off"
          style={{ margin: '4%', width: '50%' }}
        >
          <Title level={3}>
            目标额度
          </Title>
          <Form.Item name="targetValue">
            <Input />
          </Form.Item>
          <Title level={4}>
            输入发票金额
          </Title>
          {initForm()}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
        {resultListForPrint?.length ? (
          <div style={{ margin: '4%', width: '50%' }}>
            <Title level={4}>发票金额：{JSON.stringify(inputListForPrint, null, 2)}</Title>
            <br />
            <Title level={4}>目标额度：{targetValueForPrint} 元</Title>
            <br />
            {resultListForPrint.map((v) =>
              (<Title level={4}>最接近目标值的组合为：{JSON.stringify(v.list, null, 2)}，合计 {v.total} 元</Title>)
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};


export default Home;