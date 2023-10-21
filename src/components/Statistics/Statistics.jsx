import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const color = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={css.item}
              style={{ backgroundColor: color() }}
            >
              <span className={css.name}>{label}</span>
              <span className={css.proportion}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
