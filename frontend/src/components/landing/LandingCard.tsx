import { Card, CardContent, Typography } from "@mui/material";

interface LandingCardProps {
  title?: string;
  description?: string;
  name?: string;
  testimonial?: string;
}

const LandingCard = ({
  title,
  description,
  name,
  testimonial,
}: LandingCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: "200px",
        margin: "20px auto",
        boxShadow: 3,
      }}
    >
      <CardContent>
        {title && (
          <Typography
            variant="h5"
            component="div"
            sx={{
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {title} 🎯
          </Typography>
        )}
        {description && <Typography variant="body2">{description}</Typography>}
        {name && (
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {name} 👨‍💻
          </Typography>
        )}
        {testimonial && <Typography variant="body2">{testimonial}</Typography>}
      </CardContent>
    </Card>
  );
};

export default LandingCard;
