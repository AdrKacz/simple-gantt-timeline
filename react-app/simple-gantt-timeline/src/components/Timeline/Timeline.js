import TimelineContent from "../TimelineContent/TimelineContent";
import TimelineDetails from "../TimelineDetails/TimelineDetails";

function Timeline() {
  return (
    <div className="ProjectPage">
      <div className="ProjectPage-timeline">
        <div className="ProjectPage-timelineInner">
          <div className="FullWidthPageStructureWithDetailsOverlay FullWidthPageStructureWithDetailsOverlay--withDetailsOverlayOpen FullWidthPageStructureWithDetailsOverlay--shrinkMainContentForOverlay PotTimelinePage-pageStructure">
            <div className="FullWidthPageStructureWithDetailsOverlay-fullWidth">
              <div className="FullWidthPageStructureWithDetailsOverlay-mainContent">
                <TimelineContent />
              </div>
              <div className="FullWidthPageStructureWithDetailsOverlay-detailsOverlay">
                <TimelineDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Timeline;
