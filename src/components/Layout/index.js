import s from "./style.module.css";

const Layout = ({ title, urlBg = null, colorBg = null, children }) => {
  if (!title) return null;
  return (
    <section
      style={{ background: urlBg ? `url(${urlBg})` : colorBg }}
      className={s.root}
    >
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>{children}</div>
        </article>
      </div>
    </section>
  );
};
export default Layout;
