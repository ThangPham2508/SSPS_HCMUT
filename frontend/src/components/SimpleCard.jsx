import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
 
const SimpleCard = ({icon, headertext, bodytext}) => {
  return (
    <Card className="w-56">
      <CardBody className="flex flex-col items-center gap-2">
        {icon}
        <Typography className="text-lg font-bold">
          {headertext}
        </Typography>
        <Typography className="text-justify">
          {bodytext}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SimpleCard;