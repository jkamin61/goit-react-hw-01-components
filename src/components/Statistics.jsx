import PropTypes from 'prop-types';

const setColors = (index) => {
  switch (index) {
    case 0:
      return "#4FC5F3";
    case 1:
      return "#A63BF2";
    case 2:
      return "#E54D64";
    case 3:
      return "#52CBD4";
    default:
      return "#FFFFFF"
  }
}

export const Statistics = ({ title, stats }) => (
  <section className={'statistics'}>
    <div className={'statistics-container'}>
    <h2 className={'title'}>{title}</h2>
    <ul className={'stat-list'}>
      {stats.map((element, index) => (
        <li key={index} className={'item'} style={ {backgroundColor: setColors(index) } }>
        <span className={'stats-label'}>{element.label}</span>
        <span className={'percentage'}>{element.percentage}%</span>
        </li>

      ))}
    </ul>
    </div>
  </section>

);



Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
}
