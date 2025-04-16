import React from "react";
import Carousel from "./carousel";
import type { ComponentProps } from "react";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

const Template = (args: ComponentProps<typeof Carousel>) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { type: "image", src: "https://picsum.photos/id/1011/800/450" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://picsum.photos/id/1015/800/450" },
    { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
  ],
  slideIconName: "chrome_icon",
  slideName: "Machine Name - Result 1 - Script Name",
  collapseIconName:"collapse_icon",
  onCollapseClick: () => alert('Collapse clicked!'), 
  timeText:"5 min 30 sec",
  currentScripts: 4, 
  totalScripts: 50,  
};
