import DropDownMenuButton from "../DropDownMenuButton/DropDownMenuButton";

import TimelineScrollable from "../TimelineScrollable/TimelineScrollable";
import TimelineHeader from "../TimelineHeader/TimelineHeader";

function TimelineContent() {
  return (
    <div className="TimelineOverlaySwitch">
      <div className="TaskTimeline">
        <div className="TimelineSidebarHeader TaskTimelineSidebarHeader">
          <DropDownMenuButton />
        </div>
        <div className="Timeline">
          <TimelineScrollable />
          <TimelineHeader />
        </div>
      </div>
    </div>
  )
};

export default TimelineContent;
