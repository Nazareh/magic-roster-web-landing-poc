import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Divider, Link } from '@mui/material';

const Badge = styled('span')(({ theme }) => ({
  alignSelf: 'center',
  padding: '1px 3px',
  backgroundColor: theme.palette.mode === 'light' ? 'rgb(235, 87, 87)' : '#c55e5e',
  color: '#fff',
  borderRadius: 3,
  marginLeft: 6,
  fontSize: '10px',
  lineHeight: '1.3',
  textTransform: 'uppercase',
  fontWeight: '700',
  letterSpacing: '0.5px',
  display: 'inline-block',
}));

const Root = styled('div')(({ theme }) => {
  return {
    background: theme.palette.secondary.light,
    marginTop: theme.spacing(6),
  };
});

const Logo = styled('div')(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    '& img': {
      width: 28,
      height: 22,
      marginRight: theme.spacing(1.5),
    },
  };
});

const ListGrid = styled(Grid)(({ theme }) => {
  return {
    marginBottom: theme.spacing(4),
    '& h3': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    '& li': {
      padding: '6px 0',
      color: theme.palette.text.secondary,
    },
  };
});


const CareersLi = styled('li')({
  display: 'flex',
});

const Footer = styled('footer')(({ theme }) => {
  return {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 0),
    },
  };
});

export default function AppFooter() {
  return (
    <Root>
      <Divider />
      <Container maxWidth="md">
        <Footer>
          <Grid container>
            <Grid item xs={12} sm={3}>
              <Logo>
                <img src="/static/logo.svg" alt=""/>
                <Link underline="hover" variant="body1" color="inherit" href="/">
                  Turmina Solutions
                </Link>
              </Logo>
            </Grid>
            <ListGrid item xs={6} sm={3}>
              <Typography component="h2" gutterBottom>
                {'Community'}
              </Typography>
              <ul>
                <li>
                  <Link
                    color="inherit"
                    variant="body2"
                    underline="hover"
                    href="https://github.com/mui-org/material-ui"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    underline="hover"
                    color="inherit"
                    variant="body2"
                    href="https://twitter.com/MaterialUI"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    color="inherit"
                    variant="body2"
                    underline="hover"
                    href="https://stackoverflow.com/questions/tagged/material-ui"
                  >
                    StackOverflow
                  </Link>
                </li>
              </ul>
            </ListGrid>
            <ListGrid item xs={6} sm={3}>
              <Typography component="h2" gutterBottom>
                {'Company'}
              </Typography>
              <ul>
                <li>
                  <Link underline="hover" color="inherit" variant="body2" href="/company/about/">
                    About
                  </Link>
                </li>
                <li>
                  <Link underline="hover" color="inherit" variant="body2" href="/company/contact/">
                    Contact Us
                  </Link>
                </li>
                <CareersLi>
                  <Link underline="hover" color="inherit" variant="body2" href="/company/careers/">
                    Careers
                  </Link>
                  <Link underline="hover" color="inherit" variant="body2" href="/company/careers/">
                    <Badge>hiring</Badge>
                  </Link>
                </CareersLi>
              </ul>
            </ListGrid>
          </Grid>
        </Footer>
      </Container>
    </Root>
  );
}
