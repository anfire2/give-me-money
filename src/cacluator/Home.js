import { useCallback } from 'react';
import { calculateResult } from './util';
import { Button, Form, Input } from 'antd';


const Home = () => {

  const calculator = useCallback((inputList, targetValue) => {
    return calculateResult(inputList, targetValue);
  }, []);


  const submit = (values) => {
    const { targetValue, ...restInput } = values;
    const inputList = Object.values(restInput).filter(v => !!v).map(k => parseInt(k, 10));

    const resultList = calculator(inputList, targetValue);


    console.log('发票金额：' + inputList);
    console.log('目标额度：' + targetValue + '元');
    console.log(resultList);
    resultList.forEach(v => {
      console.log('最接近目标值的组合为 ' + JSON.stringify(v.list) + ' ,合计' + v.total + '元');
    });
  };

  const initForm = () => {
    const formList = [];
    for (let i = 0; i < 20; i += 1) {
      formList.push(
        <Form.Item
          label={'Value_' + i}
          name={'value_' + i}
        >
          <Input />
        </Form.Item>
      );
    }
    return formList;
  };

  return (
    <div style={{ width: '50%' }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={submit}
        autoComplete="off"
        style={{ margin: 50 }}
      >
        <Form.Item label="目标额度" name="targetValue">
          <Input />
        </Form.Item>
        {initForm()}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};


export default Home;