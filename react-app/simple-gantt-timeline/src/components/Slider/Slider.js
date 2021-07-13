// TODO: Center text vertically
// TODO: CHange layout to add transparent padding

import './Slider.css';

function Slider({previous, next}) {
  previous = previous ?? ((_) => (undefined));
  next = next ?? ((_) => (undefined));
  
  function previousDate(e) {
    e.preventDefault();
    e.stopPropagation();

    previous();
  };

  function nextDate(e) {
    e.preventDefault();
    e.stopPropagation();

    next();
  };

  return (
    <div className="Slider">
      <button
        onClick={previousDate}
      >
      <i className="arrow left" />
      </button>
      <button
        onClick={nextDate}
      >
      <i className="arrow right" />
      </button>
    </div>
  );
}

export default Slider;
