// NOTE: Constant

function DropDownMenuButton() {
  return (
    <div className="TimelineSidebarHeader-buttonContainer">
      <div className="TaskTimelineSidebarHeader-addTask">
        <div className="SecondarySplitDropdownMenuButton AddTaskDropdownButton">
          <div className="SecondarySplitDropdownMenuButton AddTaskDropdownButton">
            <div class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton AbstractThemeableRectangularButton--medium SecondarySplitDropdownMenuButton-leftButton" role="button" tabindex="0">
              <svg class="MiniIcon AbstractThemeableRectangularButton-leftIcon PlusMiniIcon" focusable="false" viewBox="0 0 24 24">
                <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z"></path>
              </svg>
              Add task
            </div>
            <div class="AbstractThemeableRectangularButton--isEnabled AbstractThemeableRectangularButton--withNoLabel AbstractThemeableRectangularButton AbstractThemeableRectangularButton--medium SecondarySplitDropdownMenuButton-rightButton" role="button" aria-label="More actions" aria-expanded="false" tabindex="0">
              <svg class="MiniIcon AbstractThemeableRectangularButton-leftIcon ArrowDownMiniIcon" focusable="false" viewBox="0 0 24 24">
                <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DropDownMenuButton;
