import React, { useState } from 'react';
import { 
    Switch, 
    Typography,
    Button 
} from "@material-tailwind/react";
import PrinterImage from '../assets/PrinterImage.png';
import {
    InformationCircleIcon
} from "@heroicons/react/24/outline";

const PrinterItem = () => {

    return (
    <div className="flex flex-row gap-3 items-center">
        <img 
            src={PrinterImage} 
            style={{width : '15%', height : '15%'}}
            //className="justify-items-center"
        />  
        <div className="grow">
            <Typography
                variant="big"
                color="blue-gray"
                className="mb-2 font-bold"
                //style={{fontWeight: 'bold'}}
            >
                Mã máy: CS2-1002
            </Typography>
            <Typography
                variant="big"
                color="blue-gray"
                className="mb-2 font-bold"
                //style={{fontWeight: 'bold'}}
            >
                Vị Trí: CS2-H6-303
            </Typography>
            <Typography
                variant="big"
                color="blue-gray"
                className="mb-2 font-bold"
                //style={{fontWeight: 'bold'}}
            >
                Hàng chờ: 6
            </Typography>
        </div>
        <div className="grid grow justify-items-center">
            <Switch
                size="lg"
                //id="custom-switch-component"
                ripple={false}
                className="h-full w-full checked:bg-[#2ec946]"
                containerProps={{
                    className: "w-11 h-6",
                }}
                circleProps={{
                    className: "before:hidden left-0.5 border-none",
                }}
            />
        </div>
        <div>
            <Button 
            variant="gradient" 
            color = "red"
            size="lg"
            className="rounded-full font-medium"
            >
            Xóa
            </Button>
        </div>
        <div>
            <InformationCircleIcon 
            className="w-7"
            color="blue"
            />
        </div>
    </div>
  );
}
  
export default PrinterItem