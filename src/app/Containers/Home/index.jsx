import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import statistics from "./constants";
import { Button, Card, Typography } from "@mui/material";

export default function Elevation() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" },
              gap: 3,
            }}
          >
            {[...statistics].map((item) => (
              <Card sx={{ display: "flex" }} key={item} elevation={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                    marginTop: "10px",
                    minWidth: "60%",
                  }}
                >
                  <Typography
                    sx={{ fontSize: 13 }}
                    color="text.secondary"
                    variant="subtitle2"
                  >
                    {item.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "-5px",
                    }}
                  >
                    <Typography marginRight={'2px'} variant="h6" gutterBottom>
                      {item.amount}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        marginTop: "10px",
                        color: item["p&l"] ? "green" : "red",
                      }}
                    >
                      {item.rate}
                    </Typography>
                  </Box>
                </Box>
                <Grid container justifyContent="center" alignItems="center">
                  <Button
                    sx={{
                      ":hover": {
                        bgcolor: "#22b0fd",
                        color: "white",
                      },
                      bgcolor: "#22b0fd",
                      color: "white",
                      height: "80%",
                    }}
                    disableElevation
                  >
                    {item.icon}
                  </Button>
                </Grid>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
