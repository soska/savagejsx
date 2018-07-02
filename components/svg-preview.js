export default ({ svg }) => (
  <div>
    <img src={svg} />
    <style jsx>{`
      div {
        background: #fff;
        background-image: linear-gradient(45deg, #eee 25%, transparent 25%),
          linear-gradient(-45deg, #eee 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #eee 75%),
          linear-gradient(-45deg, transparent 75%, #eee 75%);
        background-size: 20px 20px;

        flex: 1;
        padding: 22px;
        text-align: center;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.125) 0 11px 22px;
      }
      img {
        max-height: 200px;
      }
    `}</style>
  </div>
);
