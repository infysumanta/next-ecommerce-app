import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";
import useStyles from "./../utils/styles";

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Next E-Commerce App` : `Next E-Commerce App`}
          {description && <meta name="description" content={description} />}
        </title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>E-Commerce</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href="/cart" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All Right Reserved. Next E-Commerce App </Typography>
      </footer>
    </div>
  );
}
