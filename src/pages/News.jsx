import React from 'react';
import { Tabs, Tab } from 'react-materialize';

function News() {
  return (
    <div className="news-container">
      <Tabs className="tab-demo z-depth-1 tabs-fixed-width" scope="tabs-23">
        <Tab
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="News 1"
        >
          News 1
        </Tab>
        <Tab
          active
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="News 2"
        >
          News 2
        </Tab>
        <Tab
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="News 3"
        >
          News 3
        </Tab>
        <Tab
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="News 4"
        >
          News 4
        </Tab>
        <Tab
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title="News 4"
        >
          News 5
        </Tab>
      </Tabs>
    </div>
  );
}

export default News;
