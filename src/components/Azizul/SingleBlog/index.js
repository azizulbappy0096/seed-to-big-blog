import React from "react";
import Content from "../Content/Content";
import ProfileSection from "../ProfileSection/ProfileSection";
import Share from "../Share/Share";
import TitleSection from "../TitleSection/TitleSection";

// CSS
import "./index.css";

function SingleBlog() {
  return (
    <React.Fragment>
      <section className="w-100">
        <img
          className="blog__featureImg"
          src="/tempImg/tianyi-ma-WiONHd_zYI4-unsplash.jpg"
          alt=""
        />
      </section>
      <section className="py-3 py-md-5">
        <TitleSection />
        <Content />
        <Share />
        <ProfileSection />
      </section>
    </React.Fragment>
  );
}

export default SingleBlog;
