function TimelineScrollable() {
  return (
    <div className="TaskTimelineScrollable--withGroupHeaders TaskTimelineScrollable--withGroupHeadersTimelineRenovation TaskTimelineScrollable TaskTimeline-scrollable">
      <div className="TaskTimelineScrollable-timeAxisWrapper">

      </div>
      <div className="Scrollable--withCompositingLayer Scrollable Scrollable--vertical TaskTimelineScrollable-groupSidebarWrapper--timelineRenovation TaskTimelineScrollable-groupSidebarWrapper TaskTimelineScrollable-scrollable">

      </div>
      <div className="Scrollable--withCompositingLayer Scrollable Scrollable--both DragScrollListener TaskTimelineScrollable-scrollable">
        <div className="TaskTimelineScrollable-canvasContainer">
          <div className="TimelineCanvas-timelineRenovation TimelineCanvas TaskTimelineScrollable-canvas">

          </div>
        </div>
      </div>
    </div>
  )
};

export default TimelineScrollable;
