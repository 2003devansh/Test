import React, { useState } from 'react';
import { Select, Space , Input,Form,Button} from 'antd';
import { DatePicker,} from 'antd';
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import  { setFormData, setFormErrors, resetForm } from "./features/FormSlice"
import { useForm } from 'antd/es/form/Form';



const { TextArea } = Input;

const vehicleNumberRegex  = /^[A-z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/ ; 


const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const cityData1 = {
  Agra: ['sadar bazar', 'Agra cantt', 'Shadra'],
};

const cityData2 = {
  Raipur : ["Kabir nagar", "tatibandh","railway Station"]
}

type CityName2  = keyof typeof cityData2 ; 

type CityName1 = keyof typeof cityData1;

const provinceData1: CityName1[] = ['Agra'];
const provinceData2 : CityName2[] = ['Raipur'] ;

const App: React.FC = () => {
  const [sourceProvince, setSourceProvince] = useState<CityName1>(provinceData1[0]);
  const [sourceCities, setSourceCities] = useState(cityData1[provinceData1[0]]);


  const [destProvince, setDestProvince] = useState<CityName2>(provinceData2[0]);
  const [destCities, setDestCities] = useState(cityData2[provinceData2[0]]);

  const handleSourceProvinceChange = (value: CityName1) => {
    setSourceProvince(value);
    setSourceCities(cityData1[value]);
  };

  const handleDestProvinceChange = (value: CityName2) => {
    setDestProvince(value);
    setDestCities(cityData2[value]);
  };


  const dispatch = useDispatch()

  const [messageApi,ContextHolder] = message.useMessage() ;
  
  // const info = () =>{
  //   messageApi.info("clicked")
  // }
  const [form] = useForm() ; 

  const onfinishClicked = (val : any ) =>{
    form.resetFields() ;

    dispatch(setFormData(val));
    dispatch(resetForm(val)) ; 
    messageApi.success('Form submitted successfully!');
  }

  return (
    <Form form={form}  onFinish={onfinishClicked}>
     <Form.Item label="Order ID" name="orderId" rules={[{ required: true }]}>
        <Input placeholder="Order Id" />
      </Form.Item>

      <Form.Item label = "Consignee Name" name="consignee Name"  rules={[{ required: true }]}>
       <Input placeholder="Consignee Name"  required />
      </Form.Item>

      <Form.Item label = "Vehicle Number" name="Vehicle Number" rules={[{required: true},
        {
          pattern : vehicleNumberRegex ,
          message : "Invalid vehicle number format i.e  (e.g., MH12AB1234)"
        }
      ]}>
         <Input placeholder="Vehicle Number" required />
      </Form.Item>


    <p>select source locaton </p>
    <Space>
      <Form.Item name= "sourceProvince"  rules={[{required: true}]}>
         <Select
        style={{ width: 120 }}
        onChange={handleSourceProvinceChange}
        options={provinceData1.map((province) => ({ label: province, value: province }))}
      />
      </Form.Item>
     
     <Form.Item name="sourceCities"  rules={[{required: true}]}>
        <Select
        style={{ width: 120 }}
        options={sourceCities.map((city) => ({ label: city, value: city }))}
      />
     </Form.Item>
    
    </Space>

    <p>select designation locaton </p>
    <Space >
      <Form.Item name="destProvince" rules={[{required: true}]}>
         <Select
        style={{ width: 120 }}
        onChange={handleDestProvinceChange}
        options={provinceData2.map((province) => ({ label: province, value: province }))}
      />
      </Form.Item>
     

     <Form.Item name="destCities"  rules={[{required: true}]}>
      <Select
        style={{ width: 120 }}
        options={destCities.map((city) => ({ label: city, value: city }))}
      />
     </Form.Item> 
    </Space>
    <p>select the Item</p>


    <Form.Item
        label="Select Item"
        name="item"
        rules={[{ required: true, message: 'Please select an item' }]}
    >
         <Select
    showSearch
    placeholder="Select a itmes in the drop down list "
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    options={[
      {
        value: 'load',
        label: 'load',
      },
      {
        value: 'kit',
        label: 'kit',
      },
      {
        value: 'payroll',
        label: 'payroll',
      },
    ]}

  />
    </Form.Item>
  
    <p>select a loading Date</p>
    <Form.Item >
      <DatePicker />
    </Form.Item>
    

     <p>select a Drop  Date</p>
     <Form.Item>
      <DatePicker />
     </Form.Item>
    

    <p>Intruction Box</p>
    <Form.Item >
       <TextArea rows={4} placeholder="Got Instruction for Us? feel free to write... " maxLength={6} />
    </Form.Item>


   {/* <Form.Item> */}
    {ContextHolder}
        <Button type="primary"  htmlType="submit">
          Submit
        </Button>
      {/* </Form.Item> */}
    </Form>
  );
};

export default App;