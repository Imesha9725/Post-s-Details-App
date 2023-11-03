import { useState, useEffect, useMemo } from "react";
import StickyHeadTable from "./table";
import OutlinedCard from "./PostsSearchForm";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// function App() {
const PostsSearchForm = ({
  data,
  setData,
  resetValue,
  clicked,
  postId,
  setPostId,
}) => {
  return (
    <>
      <Grid>
        <Grid>
          <div>
            <TextField
              id="outlined-required"
              label="Post ID"
              value={postId}
              onChange={(e) => {
                setPostId(e.target.value);
              }}
              style={{ marginTop: 2, width: 250 }}
            />
          </div>
        </Grid>
        <br />
        <Grid>
          <Button variant="contained" onClick={clicked}>
            Search
          </Button>
          <Button
            style={{ marginLeft: 10 }}
            variant="contained"
            onClick={resetValue}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PostsSearchForm;
