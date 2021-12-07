import { useCallback, useState } from 'react';
import { calculateResult } from './util';
import { Button, Form, Input, Radio, Tooltip, Typography } from 'antd';

const { Title, Text } = Typography;

const Home = () => {

  const [inputListForPrint, setInputListForPrint] = useState([]);
  const [targetValueForPrint, setTargetValueForPrint] = useState(0);
  const [resultListForPrint, setResultListForPrint] = useState([]);


  const calculator = useCallback((inputList, targetValue, calculateType) => {
    return calculateResult(inputList, targetValue, calculateType);
  }, []);

  const submit = (values) => {
    const { targetValue, calculateType, ...restInput } = values;
    const inputList = Object.values(restInput).filter(v => !!v && parseFloat(v) >= 0).map(k => parseFloat(k));

    if (inputList.length) {
      const resultList = calculateResult(inputList, targetValue, calculateType);

      console.log(resultList);
      console.log(calculateType);

      console.log('发票金额：' + inputList);
      console.log('目标额度：' + targetValue + '元');

      resultList.forEach(v => {
        console.log('最接近目标值的组合为 ' + JSON.stringify(v.list) + ' ,合计' + v.total + '元');
      });

      setInputListForPrint(inputList);
      setTargetValueForPrint(targetValue);
      setResultListForPrint(resultList);
    } else {
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
        <Tooltip title="1207更新：1.修复未完全筛掉相同输出结果的问题，增加对输入负数校验处理；2.调整输出界面换行，微调标题样式；3.增加计算“不低于”目标额度的功能">
          E票M - 发票助手 V 0.9.1
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
          style={{ padding: '4%', width: '50%' }}
        >
          <Title level={4}>
            计算方式
          </Title>
          <Form.Item
            initialValue="noMoreThan"
            name="calculateType"
          >
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="noMoreThan">不超过（交通）</Radio.Button>
              <Radio.Button value="noLessThan">不低于（其他）</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Title level={4}>
            目标额度
          </Title>
          <Form.Item name="targetValue" style={{ display: 'inline-block', width: '60%' }}>
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
          <div style={{ padding: '4%', width: '50%' }}>
            <Title level={4}>发票金额：</Title>
            <Title level={5}>{JSON.stringify(inputListForPrint, null, 2)}</Title>
            <br />
            <Title level={4}>目标额度：</Title>
            <Title level={5}>{targetValueForPrint} 元</Title>
            <br />
            <Title level={4}>最接近目标值的组合为：</Title>
            {resultListForPrint.map((v) =>
              (<Title level={5}>{JSON.stringify(v.list, null, 2)}&nbsp;&nbsp;&nbsp;&nbsp;合计 {v.total} 元</Title>)
            )}

          </div>
        ) : null}
      </div>
    </>
  );
};


export default Home;