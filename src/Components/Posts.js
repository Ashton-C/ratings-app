import React, { Component } from "react";
import RItem from "./RItem";

export default class Posts extends React.Component {
  sortData() {
    let posts = [];
    let data = this.props.data;
    for (let item in data) {
      //console.log(data[item]);
      posts.push(
        <RItem
          name={data[item]["name"]}
          rating={data[item]["rating"]}
          description={data[item]["description"]}
          catagory={data[item]["catagory"]}
        />
      );
    }
    //console.log(posts);
    return posts;
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      this.fetchData(this.props.data);
      this.sortData();
    }
  }
  render() {
    return <div className="Posts">{this.sortData()}</div>;
  }
}
