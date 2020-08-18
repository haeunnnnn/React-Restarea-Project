import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      maxHeight:500,
      padding: '10px'
    },
    content: {
      border: 0,
      borderRadius: 1,
      color: 'black',
      height: 50,
      
    },
    date: {
      border: 0,
      borderRadius: 1,
      color: 'black',
      height: 10,
      margin : '3px'
    }
  });
  
export default function OrderDetail() {
    const classes = useStyles();
    console.log("OrderDetail");
    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        강릉 대관령 휴게소
                    </Typography>
                </CardContent>
                <CardContent className={classes.content} l={89}>
                    <Typography variant="subtitle1" color="textSecondary" component="p" align="center">
                        치즈라면 1개 2000원
                    </Typography>
                </CardContent>
                <CardContent className={classes.date}>
                    <Typography variant="h5" color="textSecondary" component="p" align="right">
                        2020-08-15 1번
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );

}