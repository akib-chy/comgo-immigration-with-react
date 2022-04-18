import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="question-container">
        <h1 className="question-title">Question Part</h1>
        <div className="question-part">
          <div>
            <h2>What is Context API?</h2>
            <p>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </div>
          <div className="right-part">
            <img
              className="question-img"
              src="https://www.carlrippon.com/static/0d1f722d0fe4c2bc4c3d71595dbe67dd/ca682/prop-drilling-v-context.png"
              alt=""
            />
          </div>
        </div>
        <div className="question-part part-2">
          <div>
            <img
              className="question-img"
              src="https://pbs.twimg.com/media/FD7gFAOVIAchAe2.jpg"
              alt=""
            />
          </div>
          <div className="right-part">
            <h2>What Is Semantic Element ?</h2>
            <p>
              Semantic tags clearly define the purpose of the HTML element. It
              also describes the type of content that the element should
              contain.
              <br />
              For example, "header", "footer", "article" are considered semantic
              elements as they clearly describe their purpose and the type of
              content they should enclose.
            </p>
          </div>
        </div>
        <div className="question-part">
          <div>
            <h2>What is Context API?</h2>
            <p>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
          </div>
          <div className="right-part">
            <img
              className="question-img"
              src="https://www.carlrippon.com/static/0d1f722d0fe4c2bc4c3d71595dbe67dd/ca682/prop-drilling-v-context.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
