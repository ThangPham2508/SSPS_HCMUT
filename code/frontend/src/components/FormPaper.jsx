import React, { useState } from 'react';
import { 
    Typography,
    Button,
    Input,
    Select
} from '@material-tailwind/react';

const FormPaper = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (event) => {
      const selectedDate = event.target.value;
      setSelectedDate(selectedDate);
    };
  
    const [numericValue, setNumericValue] = useState('');
  
    const handleNumericChange = (e) => {
      // Lọc chỉ giữ lại các ký tự số
      const value = e.target.value.replace(/\D/g, '');
      setNumericValue(value);
    };
  
    return (
      <div >
        <div>
          <Typography
            class="col-span-2"
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
            style={{fontWeight: 'bold'}}
          >
            Quản lý giấy miễn phí
          </Typography>
        </div>
        <div >
        <form className="grid grid-cols-2">
          <div style={{width : '70%'}}>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
              style={{fontWeight: 'bold'}}
            >
              Chọn ngày tặng giấy
            </Typography>
          <Input
            //containerProps={{ className: "min-w-[20px]" }}
            placeholder="Select a date" // bị lỗi
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
          </div>
  
        <div style={{width : '70%'}}>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
            style={{fontWeight: 'bold'}}
          >
            Số giấy miễn phí được cấp
          </Typography>
          <Input
            maxLength={3}
            //containerProps={{ className: "min-w-[px]" }}
            placeholder="Enter number"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            type="text"
            value={numericValue}
            onChange={handleNumericChange}
          />
        </div>
        <div>  </div>
        <div className="grid justify-items-center">
          <Button style={{marginTop : '2%'}}
          variant="gradient" 
          color = "blue"
          size="md"
          >
            Xác nhận
          </Button>
        </div>
        </form>
        
      </div>
      </div>
    );
  }

export default FormPaper;
