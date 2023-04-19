import { useCallback, useState } from 'react';
import { calculateResult } from './util';
import { Button, Form, Input, Popover, Radio, Tag, Typography } from 'antd';
import qrcode from './qr_code.webp';

const { Title } = Typography;

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
      const resultList = calculator(inputList, targetValue, calculateType);
      console.log('===================================================');
      console.log('发票金额：' + inputList);
      console.log('目标额度：' + targetValue + '元');
      if (resultList.length) {
        resultList.forEach(v => {
          console.log('最接近目标值的组合为 ' + JSON.stringify(v.list) + ' ,合计' + v.total + '元');
        });
      } else {
        console.log('无结果');
      }

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
          <Input allowClear />
        </Form.Item>
      );
    }
    return formList;
  };

  return (
    <>
      <div style={{ display: 'flex', padding: '0 2%' }}>
        <Form
          name="basic"
          wrapperCol={{
            span: 18,
          }}
          onFinish={submit}
          autoComplete="off"
          style={{ padding: '2% 4% 0', width: '50%' }}
        >
          <Title level={4}>
            计算方式
          </Title>
          <Form.Item
            initialValue="noMoreThan"
            name="calculateType"
          >
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="noMoreThan">相加不超过</Radio.Button>
              <Radio.Button value="noLessThan">相加不低于</Radio.Button>
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
        {inputListForPrint?.length ? (
          <div style={{ padding: '2% 4% 0', width: '50%' }}>
            <Title level={4}>发票金额：</Title>
            <Title level={5}>{JSON.stringify(inputListForPrint, null, 2)}</Title>
            <br />
            <Title level={4}>目标额度：</Title>
            <Title level={5}>{targetValueForPrint} 元</Title>
            <br />
            <Title level={4}>最接近目标额度的组合为：</Title>
            {resultListForPrint.map((v) => (
              <Title level={5}>{JSON.stringify(v.list, null, 2)}&nbsp;&nbsp;&nbsp;&nbsp;合计 {v.total} 元</Title>
            ))}
            {!resultListForPrint.length && (<Title level={5}>无结果</Title>)}
          </div>
        ) : null}
      </div>
      <div
        style={{
          position: 'fixed',
          right: 28,
          bottom: 24,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          alignItems: 'center'
        }}
      >
        <Popover
          content={<img height="270" width="270" src={qrcode} alt="给钱啥都好说" />}
          trigger="click"
        >
          <Tag color="#108ee9">→ 点赞/吐槽/需求/BUG ←</Tag>
        </Popover>
        <Title level={5}>
          Eccom Money
        </Title>
      </div>
    </>
  );
};


export default Home;