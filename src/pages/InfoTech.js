import React, { useRef, useState } from "react";

export default function AI() {
  const [contentNumber, setContentNumber] = useState(1);
  const sideBar = useRef(null);

  const navToggle = () => {
    sideBar.current.classList.toggle("active");
  };

  return (
    <>
      <header className="club">
        <i className="bi bi-list d-lg-none" onClick={navToggle}></i>
        <h2>InfoTech Logo</h2>
      </header>

      <aside className="sidebar" ref={sideBar}>
        <ul className="nav-list">
          <li
            className={contentNumber === 1 ? "nav-item active" : "nav-item"}
            onClick={() => setContentNumber(1)}
          >
            <i className="bi bi-house"></i>Home
          </li>
          <li
            className={contentNumber === 2 ? "nav-item active" : "nav-item"}
            onClick={() => setContentNumber(2)}
          >
            <i className="bi bi-question-lg"></i>About
          </li>
          <li
            className={contentNumber === 3 ? "nav-item active" : "nav-item"}
            onClick={() => setContentNumber(3)}
          >
            <i className="bi bi-easel"></i>Projects
          </li>
          <li
            className={contentNumber === 4 ? "nav-item active" : "nav-item"}
            onClick={() => setContentNumber(4)}
          >
            <i className="bi bi-people"></i>Club Members
          </li>
        </ul>
      </aside>

      <main className="club-main">
        {contentNumber === 1 && (
          <>
            <h4>Home</h4>
          </>
        )}
        {contentNumber === 2 && (
          <>
            <h4>About</h4>
          </>
        )}
        {contentNumber === 3 && (
          <>
            <h4>Projects</h4>
          </>
        )}
        {contentNumber === 4 && (
          <>
            <h4>Club Members</h4>
            <div className="mt-3 row">
              <div className="card" style={{ width: "220px", margin: "20px" }}>
                <div
                  className="card-body d-flex justify-content-center align-items-center"
                  style={{ height: "120px" }}
                >
                  <div
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      alt="club member"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3XPpya8iYq37P7KuUzrCgdyW_66IaBQZfjHD3wBTnQ&s"
                    />
                  </div>
                </div>
                <h3 align="center">Name</h3>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
