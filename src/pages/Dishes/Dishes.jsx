import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import { Data } from "../../StaticData/Data";
import CustomeCard from "../../Components/CustomCard/CustomCard";

const Dishes = () => {
  const DishesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center,",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{
              color: "#000339",
              fontsize: "35px",
              fontWeight: "bold",
              ml: "13px",
            }}
          >
            Feaured Dishes
          </Typography>
          <Typography
            sx={{ color: "#5a6473", fontsize: "16px", ml: "13px", mt: 1 }}
          >
            Explore Variety of South Indian Dishes!!
          </Typography>
        </PropertiesTextBox>

        <DishesBox>
          {Data.map((foodItem) => (
            <CustomeCard
              key={foodItem.id}
              img={foodItem.img}
              price={foodItem.price}
              item={foodItem.item}
              likes={foodItem.likes}
              heart={foodItem.heart}
              share={foodItem.share}
            />
          ))}
        </DishesBox>
      </Container>
    </Box>
  );
};

export default Dishes;
