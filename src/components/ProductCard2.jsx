import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { styled } from "@mui/material/styles";
import { Box, Grid, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import toast from "react-hot-toast";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function ProductCard2({ p }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // <Box sx={{ width: "100%" }}>
    // <Stack direction="row" spacing={3}>
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // title="Shrimp and Chorizo Paella"
        title={p ? p.title : "Product Title"}
        subheader={p ? p.subtitle : "Product Subtitle"}
      />
      <CardMedia
        component="img"
        height="194"
        // image="/static/images/cards/paella.jpg"
        image={p.image || "https://via.placeholder.com/400x300?text=No+Image"}
        alt="Paella dish"
        onClick={() => navigate(`/product/${p.id}`)}
        sx={{ cursor: "pointer" }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {p ? p.description : "Product description goes here."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}
        <Button
          aria-label="add to favorites"
          variant="contained"
          color="primary"
          size="small"
          sx={{ my: 2 }}
          onClick={() => {
            addToCart(p);
            toast.success("Item added to cart!");
          }}
        >
          Add to cart
        </Button>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Details:</Typography>

          <Typography sx={{ marginBottom: 2 }}>
            {p.shortDescription || "Short description goes here."}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            {p.longDescription || "Long description goes here."}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    // </Stack>
    // </Box>
  );
}
