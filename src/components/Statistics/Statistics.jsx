import PropTypes from 'prop-types';

const setColors = (index) => {
  switch (index) {
    case 0:
      return 'item item-blue';
    case 1:
      return 'item item-purple';
    case 2:
      return 'item item-red';
    case 3:
      return 'item item-green';
    default:
      return 'item item-default';
  }
};

export const Statistics = ({ title, stats }) => (
  <section className={'statistics'}>
    <div className={'statistics-container'}>
      <h2 className={'title'}>{title}</h2>
      <ul className={'stat-list'}>
        {stats.map((element, index) => (
          <li key={index} className={setColors(index)}>
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
};
