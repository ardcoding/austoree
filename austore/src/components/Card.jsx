import { Card } from "@mui/material";

const CardComponent = ({ children, className, ...props }) => {
  return (
    <Card
      sx={{ p: 0, position: "relative" }}
      className={className}
      elevation={9}
      variant={undefined}
      {...props}
    >
      {children}
    </Card>
  );
};

export default CardComponent;