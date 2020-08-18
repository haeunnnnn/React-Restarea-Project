
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OrderDetail from './OrderDetail';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  but: {
    background: 'black',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin : '10px'
  },
});

function OrderCard(){
  const classes = useStyles();
  return(
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            8/15 (토)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            강릉 대관령 휴게소
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.but}>
          주문 번호
        </Button>
        <Button className={classes.but} onClick={OrderDetail}>
          주문 상세
        </Button>
      </CardActions>
    </Card>
  )
}

export default function OrderList() {
  return (
    <OrderCard/>
  );
}
