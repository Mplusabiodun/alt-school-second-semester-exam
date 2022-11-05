import React from 'react'
import { Link } from "react-router-dom";
import classes from "./Errorpage.module.css";


const ErrorPage = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>That page doesn't exist!</h3>
      <p className={classes.sorry}>Sorry the page you were looking for could not be found</p>
      <div className={classes.empty}> <p className={classes.search}>Try searching for something else....</p></div>
      <h4 className={classes.last}>Or you can return to our <Link to='/'>HOMEPAGE</Link>  or <Link to='/'>CONTACT US</Link> if you can't find what you're looking for.</h4>
    </div>
  )
}

export default ErrorPage
