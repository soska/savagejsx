const BlankState = ({ hover }) => (
  <div>
    {hover ? (
      <div className="hover">Drop It Like It's Hot</div>
    ) : (
      <div className="no-hover">
        Drag an SVG File here <span>Get a React component</span>
      </div>
    )}
    <style jsx>{`
      .hover {
        text-align: center;
        font-size: 44px;
        font-weight: semibold;
        flex: 1;
        padding: 22px;
        color: #e04964;
        letter-spacing: 0.025em;
        font-weight: bold;
      }

      .no-hover {
        text-align: center;
        font-size: 33px;
        font-weight: semibold;
        flex: 1;
        padding: 22px;
        color: #fff;
        letter-spacing: 0.025em;
      }

      .no-hover span {
        font-weight: bold;
        display: block;
        color: #fcec4e;
      }
    `}</style>
  </div>
);

export default ({ hover = false }) => (
  <div>
    <BlankState hover={hover} />
    <style jsx>{`
      div {
        padding: 11px;
        color: ${hover ? 'white' : '#f0f0f0'};
      }
    `}</style>
  </div>
);
