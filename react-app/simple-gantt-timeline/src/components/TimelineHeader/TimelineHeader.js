// NOTE: Constant

function TimelineHeader() {
  return (
    <div class="Timeline-timelineHeader">
      <div class="TimelineHeader-viewStateButtons">
        <div class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--medium SubtleButton TimelineHeader-todayButton" role="button" tabindex="0">
          Today
        </div>
        <div
          class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--medium SubtleButton CompletionMenuStructure TimelineCompletionMenu TaskTimeline-timelineCompletionSettingMenu--inHeader"
          role="button"
          aria-expanded="false"
          tabindex="0"
        >
          <svg class="MiniIcon AbstractThemeableRectangularButton-leftIcon CheckCircleMiniIcon" focusable="false" viewBox="0 0 24 24">
            <path d="M12,3c5,0,9,4,9,9s-4,9-9,9s-9-4-9-9S7,3,12,3 M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1L12,1zM11.2,16.2l6-6c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-5.3,5.3l-2.3-2.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l3,3c0.2,0.2,0.5,0.3,0.7,0.3S11,16.4,11.2,16.2z"></path>
          </svg>
          All tasks
        </div>
        <div class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--medium SubtleButton TimelineZoomMenu" role="button" aria-expanded="false" tabindex="0">
          <svg class="MiniIcon AbstractThemeableRectangularButton-leftIcon MagnifyerZoomMiniIcon" focusable="false" viewBox="0 0 24 24">
            <path d="M16,11c0,0.6-0.4,1-1,1h-3v3c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3H7c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h3V7c0-0.6,0.4-1,1-1s1,0.4,1,1v3h3C15.6,10,16,10.4,16,11z M21.7,21.7C21.5,21.9,21.2,22,21,22s-0.5-0.1-0.7-0.3L16.6,18c-1.5,1.2-3.5,2-5.6,2c-5,0-9-4-9-9c0-5,4-9,9-9c5,0,9,4,9,9c0,2.1-0.7,4.1-2,5.6l3.7,3.7C22.1,20.7,22.1,21.3,21.7,21.7z M18,11c0-3.9-3.1-7-7-7c-3.9,0-7,3.1-7,7c0,3.9,3.1,7,7,7C14.9,18,18,14.9,18,11z"></path>
          </svg>
          Weeks
        </div>
        <div
          class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--medium SubtleButton SortMenuStructure TimelineSortMenu TaskTimeline-sortSettingsMenu--inHeader"
          role="button"
          aria-expanded="false"
          tabindex="0"
        >
          <svg class="MiniIcon AbstractThemeableRectangularButton-leftIcon SortMiniIcon" focusable="false" viewBox="0 0 24 24">
            <path d="M11.7,9.7c-0.2,0.2-0.4,0.3-0.6,0.3H8v9c0,0.6-0.4,1-1,1s-1-0.4-1-1v-9H2.9C2.4,10,2,9.6,2,9.1c0-0.2,0.1-0.5,0.3-0.6l4.1-4.1C6.7,4,7.3,4,7.6,4.3l0,0l4.1,4.1C12.1,8.8,12.1,9.4,11.7,9.7z M21.7,14.3c-0.2-0.2-0.4-0.3-0.6-0.3H18V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9h-3.1c-0.5,0-0.9,0.4-0.9,0.9c0,0.2,0.1,0.5,0.3,0.6l4.1,4.1c0.4,0.4,0.9,0.4,1.3,0l0,0l4.1-4.1C22.1,15.2,22.1,14.6,21.7,14.3z"></path>
          </svg>
          Sort
        </div>
        <div
          class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--medium SubtleButton ViewSettingsMenuColorDropdown ViewSettingsMenuColorDropdown-button"
          role="button"
          aria-expanded="false"
          tabindex="0"
        >
          <svg class="MiniIcon AbstractThemeableRectangularButton-leftIcon PaintbrushMiniIcon" focusable="false" viewBox="0 0 24 24">
            <path d="M21,0H3C2.4,0,2,0.4,2,1v10c0,1.7,1.3,3,3,3h3v6c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4v-6h3c1.7,0,3-1.3,3-3V1  C22,0.4,21.6,0,21,0z M4,2h2v2c0,0.6,0.4,1,1,1s1-0.4,1-1V2h2v2c0,0.6,0.4,1,1,1s1-0.4,1-1V2h2v2c0,0.6,0.4,1,1,1s1-0.4,1-1V2h4v4.9  H4V2z M20,11c0,0.6-0.4,1-1,1h-4c-0.6,0-1,0.4-1,1v7c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2v-7c0-0.6-0.4-1-1-1H5c-0.6,0-1-0.4-1-1V8.9  h16V11z"></path>
          </svg>
          Color: Default
        </div>
        <div class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--medium SubtleButton CustomizeMenuButton" role="button" aria-expanded="false" tabindex="0">
          <svg class="MiniIcon AbstractThemeableRectangularButton-leftIcon AppsIconMini" focusable="false" viewBox="0 0 24 24">
            <path d="M7,2c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H3C2.45,8,2,7.55,2,7V3c0-0.55,0.45-1,1-1H7 M7,0H3C1.34,0,0,1.34,0,3v4  c0,1.66,1.34,3,3,3h4c1.66,0,3-1.34,3-3V3C10,1.34,8.66,0,7,0L7,0z M7,16c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H3  c-0.55,0-1-0.45-1-1v-4c0-0.55,0.45-1,1-1H7 M7,14H3c-1.66,0-3,1.34-3,3v4c0,1.66,1.34,3,3,3h4c1.66,0,3-1.34,3-3v-4  C10,15.34,8.66,14,7,14L7,14z M21,2c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1V3c0-0.55,0.45-1,1-1H21 M21,0h-4  c-1.66,0-3,1.34-3,3v4c0,1.66,1.34,3,3,3h4c1.66,0,3-1.34,3-3V3C24,1.34,22.66,0,21,0L21,0z M23,18h-3v-3c0-0.55-0.45-1-1-1  s-1,0.45-1,1v3h-3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h3v3c0,0.55,0.45,1,1,1s1-0.45,1-1v-3h3c0.55,0,1-0.45,1-1  C24,18.45,23.55,18,23,18z"></path>
          </svg>
          Customize
        </div>
        <div
          class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--medium SubtleButton TaskTimeline-unscheduledTasksButton"
          role="button"
          aria-expanded="false"
          tabindex="0"
        >
          Unscheduled
        </div>
        <div
          class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton--withNoLabel AbstractThemeableRectangularButton AbstractThemeableRectangularButton--medium SubtleButton MoreMenu ProjectPageToolbarMoreMenu"
          role="button"
          aria-label="More actions"
          aria-expanded="false"
          tabindex="0"
        >
          <svg class="Icon AbstractThemeableRectangularButton-leftIcon MoreIcon" focusable="false" viewBox="0 0 32 32">
            <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TimelineHeader;
