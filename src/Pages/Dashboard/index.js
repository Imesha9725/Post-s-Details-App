import * as React from "react";
import { useEffect, useState } from "react";
import StickyHeadTable from "./table";
import PostsSearchForm from "./PostsSearchForm";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [postId, setPostId] = useState("");
  const [page, setPage] = React.useState(0);
  //Calling API
  const clicked = () => {
    setPage(0);
    return fetch("https://jsonplaceholder.typicode.com/posts/" + `${postId}`)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  //Initial Load - API Call
  useEffect(() => {
    clicked();
  }, []);

  //Reset Function
  const resetValue = () => {
    setPostId("");
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  return (
    <>
      <div
        className="App"
        style={{
          marginLeft: 80,
          marginRight: 80,
          marginTop: 10,
          marginBottom: 10,
          padding: 2,
          border: 5,
          backgroundColor: "#c5def5",
        }}
      >
        <br />
        <h2>Display Post's Details</h2>
        <PostsSearchForm
          data={data}
          setData={setData}
          setPostId={setPostId}
          postId={postId}
          clicked={clicked}
          resetValue={resetValue}
        />
        <br />

        <StickyHeadTable
          data={data}
          setData={setData}
          setPage={setPage}
          page={page}
        />
        <br />
      </div>
    </>
  );
};

export default Dashboard;
