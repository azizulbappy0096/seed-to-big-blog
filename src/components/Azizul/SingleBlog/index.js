import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Content from "../Content/Content";
import ProfileSection from "../ProfileSection/ProfileSection";
import Share from "../Share/Share";
import TitleSection from "../TitleSection/TitleSection";

// CSS
import "./index.css";

function SingleBlog() {
  const { blogId } = useParams()
  const [blog, setBlog] = useState({})

  useEffect(() => {
    fetch("/testData.json")
    .then(res => {
      return res.json()
    }).then(jsonRes => {

      let findBlog = jsonRes.blogs.filter(blg => blg.id === Number(blogId))[0]
console.log(findBlog)
      setBlog(findBlog)
    })
  }, [blogId])

  return (
    <React.Fragment>
      <section className="w-100">
        <img
          className="blog__featureImg"
          src={blog.previewImg}
          alt=""
        />
      </section>
      <section className="py-3 py-md-5">
        <TitleSection title={blog.title} author={blog.author} views={blog.views} />
        <Content content={blog.content} />
        <Share />
        <ProfileSection author={blog.author} />
      </section>
    </React.Fragment>
  );
}

export default SingleBlog;
