import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./assets/font-icon.css";
import { ThemeProvider } from "./provider";
import Button from "./components/button";
import Icon from "./components/icon";
import { Row, Col } from "./components";

function App() {
  return (
    // <ThemeProvider theme={{global:{red: "green"}}}>
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Icon icon="x-close" spin reverse />
      <div className="card">
        <Row>
          <Col flex="none">
            <Button>title</Button>
            <Button type="primary" loading>
              title
            </Button>
            <Button type="text">title</Button>
            <Button type="link">title</Button>
          </Col>
          <Col flex="auto">
            <Button shape="round">title</Button>
            <Button
              type="primary"
              shape="round"
              icon={<Icon icon="play" solid />}
            >
              title
            </Button>
            <Button type="primary" icon={<Icon icon="search" />} />
            <Button size="large" shape="circle">
              title
            </Button>
            <Button size="large" type="primary" shape="circle">
              title
            </Button>
          </Col>
        </Row>

        <br />

        <br />

        <Button type="primary" size="small">
          title
        </Button>
        <Button type="primary" size="default">
          title
        </Button>
        <Button type="primary" size="large">
          title
        </Button>

        <br />

        <Button ghost>title</Button>
        <Button type="primary" ghost>
          title
        </Button>

        <Button disabled>title</Button>
        <Button type="primary" disabled>
          title
        </Button>
        <Button type="text" disabled>
          title
        </Button>

        <Button block>title</Button>
      </div>
    </div>
    // </ThemeProvider>
  );

  // return (
  // <ThemeProvider theme={{font: "apple"}}>
  // <BootstrapProvider theme={{"$badge-danger-bg": "green"}}>
  //     <div className="App">
  //       <div>
  //         <a href="https://vitejs.dev" target="_blank">
  //           <img src="/vite.svg" className="logo" alt="Vite logo" />
  //         </a>
  //         <a href="https://reactjs.org" target="_blank">
  //           <img src={reactLogo} className="logo react" alt="React logo" />
  //         </a>
  //       </div>
  //       <h1>Vite + React</h1>
  //       <div className="card">
  //         {/* <Skeleton ></Skeleton> */}
  //         <Badge color="danger" tag={"p"}> 3a2sd3 2a3s d23as2 d3as2d
  //         <Skeleton ></Skeleton>
  //         </Badge>
  //         {/* <Button>Messages <BsBadge color="danger" >33</BsBadge></Button> */}
  //       </div>
  //     </div>
  //     </ThemeProvider>
  // )
}

export default App;
