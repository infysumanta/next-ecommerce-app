import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next E-Commerce App</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>E-Commerce</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All Right Reserved. Next E-Commerce App </Typography>
      </footer>
    </div>
  );
}
